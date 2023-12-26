//import liraries
import React, { Component,useEffect,useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import Header from '../../Components/Header';
import WrapperComponentTwo from '../../Components/WrapperComponentTwo';
import ReviewsComp from '../../Components/ReviewsComp';
import BrowseComp from '../../Components/BrowseComp';
import TrailersComp from '../../Components/TrailersComp';
import Groups from '../../Components/Groups';
import BoxOffice from '../../Components/BoxOffice';
import InterNational from '../../Components/InterNational';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrowse } from '../../Redux/features/Slices/BrowseSlice';
import { fetchLabel } from '../../Redux/features/Slices/CreateLabel';
import { fetchFeed } from '../../Redux/features/Slices/FeedSlice';
import { fetchTrailer } from '../../Redux/features/Slices/TrailerSlice';
import { fetchReview } from '../../Redux/features/Slices/AllReviewSlice';
import { fetchTMDB } from '../../Redux/features/Slices/TmdbSlice';

// create a component
const Home = ({ navigation }) => {
    const dispatch=useDispatch();
    // const Page = useSelector((state) => state.PageSlice.FeedPage);

    // useEffect(()=>{
    //     dispatch(fetchBrowse())
    //     dispatch(fetchLabel())
    //     dispatch(fetchFeed(Page))
    //     dispatch(fetchTrailer())
    //     dispatch(fetchReview())
    //     dispatch(fetchTMDB())
    // },[])
    
    return (
        <View style={{flex:1}}>
                <Header onPressleft={() => navigation.openDrawer()} placeholder={'Enter Movies,Trailer...'} />

            <ScrollView style={false} showsVerticalScrollIndicator={false}>
                <WrapperComponentTwo>
                    <BrowseComp />
                </WrapperComponentTwo>
                <WrapperComponentTwo>
                    <InterNational />
                </WrapperComponentTwo>
                <WrapperComponentTwo isPadding={true}>
                    <ReviewsComp leftHeading={true} />
                </WrapperComponentTwo>
                <WrapperComponentTwo>
                    <TrailersComp />
                    {/* <Groups /> */}
                    {/* <BoxOffice /> */}
                </WrapperComponentTwo>
            </ScrollView >
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: moderateScale(16)
        // justifyContent: 'center',
        // alignItems: 'center',

    },
});

//make this component available to the app
export default Home;
