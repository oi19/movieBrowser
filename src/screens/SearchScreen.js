import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, ListFooterComponent, RefreshControl } from 'react-native';
import MovieContainer from '../components/MovieContainer';
import SearchBar from '../components/SearchBar';
import omdb from '../api/omdb';
import { AntDesign } from '@expo/vector-icons';


const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState()
    const [results, setResutls] = useState([

    ])
    const [totalResults, setTotalResults] = useState(0)
    const [page, setPage] = useState(1)

    // useEffect(() => {
    //     navigation.addListener('didFocus', () => {
    //         console.log(results);
    //     })
    // }, [])

    const renderItem = (item) => {
        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Detail', { id: item.imdbID })
                }
            >
                <MovieContainer
                    movie={item} />
            </TouchableOpacity>
        )

    }



    const searchApi = async (term, pageNum) => {
        try {
            if (term.trim().length > 2) {
                const response = await omdb.get(`/?&apikey=b442f019&s=${term.trim()}&page=${pageNum}`)
                if (response.data.Response == "True") {
                    console.log(pageNum);
                    if (pageNum == 1) {
                        setResutls(response.data.Search)
                        setPage(1)
                    }
                    else {
                        setResutls([...results, ...response.data.Search])
                        setPage(pageNum)

                    }
                    setTotalResults(response.data.totalResults)
                    console.log(results)

                }
            }
            else {
                setResutls([])
            }
        }
        catch (err) {
            console.log(err, 'bassam')
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#1f1f1f' }}>
            <SearchBar
                term={term}
                onTermChange={(term) => {
                    setTerm(term)
                    searchApi(term, 1)
                }



                }
            />

            {
                results.length == 0
                    ? (<View style={{ flex: 1, justifyContent: 'center' }} >
                        <Text style={{ alignSelf: "center", fontSize: 18, color: 'white' }}>Search For Series, Movie,... above <AntDesign name="arrowup" size={24} color="white" /></Text>
                    </View>)
                    : <FlatList
                        style={{ flex: 1, marginBottom: 20 }}
                        keyExtractor={item => item.imdbID}
                        data={results}
                        renderItem={({ item }) => renderItem(item)}
                        refreshControl={
                            <RefreshControl
                                // refreshing={loader}
                                onRefresh={() => searchApi(term, 1)}
                                tintColor={'white'}
                            />
                        }
                        onEndReached={() => {

                            searchApi(term, page + 1)
                        }}
                        onEndReachedThreshold={.2}

                    />
            }





        </View>
    )
};

const styles = StyleSheet.create({

});


export default SearchScreen;