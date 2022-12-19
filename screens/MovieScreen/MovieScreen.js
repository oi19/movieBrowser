/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Text, View, SafeAreaView, Image, ActivityIndicator, ScrollView } from 'react-native';
import styles from './MovieScreenStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie, pressMovie } from '../../redux/actions/MovieScreenAction';


export default MovieScreen = (item) => {
    // the passed param 
    let imdbID = item.route.params.imdbID

    console.log(imdbID)
    const dispatch = useDispatch()
    useEffect(() => dispatch(pressMovie(imdbID)), [])
    const movieData = useSelector((state) => state?.MovieScreen?.movieData)
    console.log(movieData)
    const pageLoading = useSelector((state) => state?.MovieScreen?.pageLoading)
    const title = movieData?.Title
    const year = movieData?.Year
    const poster = movieData?.Poster
    const type = movieData?.Type
    const plot = movieData?.Plot
    const rated = movieData?.Rated
    const runtime = movieData?.Runtime
    const ratings = movieData?.Ratings
    ratings ? console.log(ratings) : null
    console.log(pageLoading)


    console.log('omar')
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {
                !pageLoading ? (
                    <ScrollView style={styles.container} contentContainerStyle={{ paddingHorizontal: 15 }}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: `${poster}`,
                            }}
                        />
                        <View style={styles.movie}>
                            <Text style={styles.movietitle} numberOfLines={1}>{title}</Text>
                            <Text style={styles.movietype}>({year})</Text>
                        </View>
                        <View>
                            <Text style={{ paddingVertical: 10 }}>{rated}, {runtime}</Text>
                        </View>
                        <Text style={styles.plot}>{plot}</Text>
                        {
                            ratings?.map((rating, index) => {
                                console.log('omar2')
                                let ratio = 0
                                let color = ''
                                if (rating.Value[(rating.Value.length - 1)] == '%') {
                                    ratio = rating.Value.slice(0, (rating.Value.length) - 1)
                                }
                                else {
                                    let i = rating.Value.split('/')
                                    ratio = (i[0] / i[1]) * 100;
                                }
                                if (ratio <= 100 && ratio > 80) { color = 'green' }
                                else if (ratio <= 80 && ratio > 65) { color = 'yellow' }
                                else if (ratio <= 65) { color = 'red' }
                                return (
                                    <View key={index} >
                                        <Text style={styles.source}>{rating.Source}  ({rating.Value})</Text>
                                        <View style={[styles.bar, { width: `${ratio}%` }, { backgroundColor: `${color}` }]} />
                                    </View>
                                )
                            })}

                    </ScrollView>
                ) : <ActivityIndicator />
            }
        </SafeAreaView>
    )
}