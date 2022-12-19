import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, FlatList, SafeAreaView, Image, Dimensions, ActivityIndicator } from 'react-native';
import styles from './SearchScreenStyle';
import Item from '../../components/components'
import { getMovieList, changePropMovieList, refreshMovieList, paginateMovieList } from '../../redux/actions/SearchScreenAction';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const SearchScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const movieList = useSelector((state) => state?.SearchScreen?.movieList);
    const pageLoading = useSelector((state) => state?.SearchScreen?.pageLoading);
    const pageError = useSelector((state) => state?.SearchScreen?.pageError);
    const pageRefresh = useSelector((state) => state?.SearchScreen?.pageRefresh);
    const pagePaginate = useSelector((state) => state?.SearchScreen?.pagePaginate);
    const moreData = useSelector((state) => state?.SearchScreen?.moreData);
    const pageIndex = useSelector((state) => state?.SearchScreen?.pageIndex);
    const searchValue = useSelector((state) => state?.SearchScreen?.searchValue);



    renderItem = ({ item, index }) => {
        // console.log(item)
        return (<Item
            item={item}
            onPress={() => navigation.navigate('Movie', item)} />)
    }
    renderFooter = () => {
        if (pagePaginate) {
            return (<ActivityIndicator style={{ alignSelf: 'center' }} />)
        } else {
            return null;
        }
    }
    rendrtEmptyItem = () => {
        return pageLoading ? <ActivityIndicator /> : <Text style={{ color: 'red', textAlign: 'center' }}>No Result</Text>
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <Text style={styles.text}>search</Text>
                <TextInput
                    style={styles.input}
                    value={searchValue}
                    onChangeText={(text) => {
                        dispatch(changePropMovieList('searchValue', text))
                        if (text.length >= 3) {
                            dispatch(getMovieList())
                        } else if (text.length == 0) {
                            dispatch(changePropMovieList('movieList', []))
                        }
                    }}
                    placeholder="search here"
                />
            </View>
            <FlatList
                data={movieList}
                renderItem={renderItem}
                keyExtractor={item => item.imdbID}
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}
                contentContainerStyle={!movieList?.length && { flex: 1, alignItems: 'center', justifyContent: 'center' }}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                refreshing={pageRefresh}
                onRefresh={() => !pageLoading && dispatch(refreshMovieList())}
                onEndReached={() => !pagePaginate && moreData && dispatch(paginateMovieList())}
                onEndReachedThreshold={0}
                ListFooterComponent={renderFooter}
                ListEmptyComponent={rendrtEmptyItem}
            />
        </SafeAreaView>
    );
}


export default SearchScreen