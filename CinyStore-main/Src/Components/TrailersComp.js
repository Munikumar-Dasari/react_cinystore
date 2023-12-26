//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, FlatList, ActivityIndicator } from 'react-native';
import { moderateScale, moderateScaleVertical, textScale, scale } from '../Styles/responsiveSize';
import colors from '../Styles/colors';
import ImagePath from '../Constants/ImagePath';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../Navigations/NavigationStrings';
import YoutubePlayer from "react-native-youtube-iframe";

// create a component
const TrailersComp = () => {
    const navigation = useNavigation();

    const [ID, setID] = useState('');
    const [Load, setLoad] = useState(false)
    const [feedList, setfeedList] = useState([])


    useEffect(() => {
        getFeedData();

    }, [])
    const getFeedData = async () => {
        setLoad(true)
        const res = await fetch(`https://www.cinystore.com/Trailers_API/?cursor=${ID}`);
        const json = await res?.json();
        setfeedList([...feedList, ...json.results])
        if(json.next_url !==null){
        const nextUrl = json.next_url;
        const Newpage = nextUrl.split('=')[1] + "";
        setID(Newpage);
        setLoad(false);
        }
    }

    const handleLoadMore = async () => {

        if (!Load) {

            try {
                getFeedData();

            } catch (e) {
                console.log(e, 'error');
            }
        }
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate(NavigationStrings.TRAILER)}><Text style={styles.browsetxt}>Trailers</Text></TouchableOpacity>
            <View style={{ borderBottomColor: '#2B5759', borderWidth: 0.5, marginVertical: moderateScaleVertical(10) }} />
            <View>
                <FlatList
                    horizontal={true}
                    // pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    data={feedList}
                    onEndReached={handleLoadMore}
                    onEndReachedThreshold={16}
                    ListEmptyComponent={<Text style={{ color: '#fff', fontFamily: 'Montserrat-SemiBold', fontWeight: '600' }}>No Data</Text>}
                    renderItem={({ item, index }) => {
                        return (
                            <View key={index} style={{ marginRight: scale(5), borderRadius: moderateScale(5),}}>
                                <YoutubePlayer
                                    height={230}
                                    play={false}
                                    width={400}
                                    webViewStyle={{flex:1,maxHeight:moderateScale(350),maxWidth:moderateScale('100%')}}
                                    videoId={item.trailer}
                                    forceAndroidAutoplay={false}
                                    
                                />
                            </View>
                        )
                    }}
                />
                {/* {
                        Load && <View style={{width:'100%',height:moderateScale(60),justifyContent:'center',alignItems:'center'}}>
                        <ActivityIndicator size={'large'} color={'#FF5E3A'}/>
                        <Text style={{color:'#fff',fontSize: textScale(14),fontWeight: '600',fontFamily: 'Montserrat-Medium',}}>Loading</Text>
                    </View>
                    } */}
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginVertical: moderateScaleVertical(20)
    },
    browsetxt: {
        color: colors.whiteColor,
        fontSize: textScale(18),
        fontWeight: '600',
        fontFamily: 'Montserrat-SemiBold',

    },
    Heading: {
        color: colors.whiteColor,
        fontSize: textScale(15),
        fontWeight: '500',
        fontFamily: 'Montserrat-Medium'

    }
});

//make this component available to the app
export default TrailersComp;
