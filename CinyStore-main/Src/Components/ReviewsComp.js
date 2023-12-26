//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { moderateScale, moderateScaleVertical, textScale, width } from '../Styles/responsiveSize';
import colors from '../Styles/colors';
import ImagePath from '../Constants/ImagePath';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../Navigations/NavigationStrings';
import { useSelector } from 'react-redux';
import Icons from 'react-native-vector-icons/AntDesign'

// import { width } from '../Styles/responsiveSize'

// create a component
const ReviewsComp = ({
    leftHeading,
    isComment,
    isButton,

}) => {

    const navigation = useNavigation()
    const [CurrentIndex, setCurrentIndex] = useState(0);
    const [Page, setPage] = useState('');
    const [Load, setLoad] = useState(false)
    const [feedList, setfeedList] = useState([])

    useEffect(() => {
        getFeedData();

    }, [Page])

    const getFeedData = async () => {
        setLoad(true)
        const res = await fetch(`https://cinystore.com/AllReview_API?cursor=${Page}`);
        const json = await res?.json();
        const Json_Result = json?.results?.filter((ele, ind) => ind === json?.results?.findIndex(elem => elem.Movie_name === ele.Movie_name))
        setfeedList([...feedList, ...Json_Result])
        if(json.next_url !==null){
        const nextUrl = json.next_url;
        const Newpage = nextUrl.split('=')[1] + "";
        setPage(Newpage);
        setLoad(false);
        }
    }
    const handleLoadMore = async () => {

        console.log('Load More')
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
            {leftHeading && <View>
                <TouchableOpacity onPress={() => navigation.navigate(NavigationStrings.REVIEWS)}><Text style={styles.browsetxt}>Reviews</Text></TouchableOpacity>
                <View style={{ borderBottomColor: '#2B5759', borderWidth: 0.5, marginVertical: moderateScaleVertical(10) }} />
            </View>
            }
            <View>
                <FlatList
                    horizontal={true}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    data={feedList.slice(0, 10)}
                    onEndReached={handleLoadMore}
                    onEndReachedThreshold={16}
                    onScroll={e => {
                        const x = e.nativeEvent.contentOffset.x;
                        // console.log(x)
                        setCurrentIndex((x / Dimensions.get("window").width).toFixed(0))
                    }}

                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={{ width: Dimensions.get("window").width }} key={index} onPress={() => navigation.navigate(NavigationStrings.MOVIE_REVIEW, { data: item })}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                    <Text style={styles.Heading}>{item.Movie_name}</Text>
                                    <Text style={styles.subHeading}>{item.comment.length > 50 ? item.comment.substring(0, 105) + ('...') : item.comment}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: moderateScaleVertical(15), }}>
                                    <View style={{ flexDirection: 'row', marginTop: moderateScale(8), alignItems: 'center', flex: 0.5, justifyContent: 'center' }}>
                                        {/* <Image source={ImagePath.Like} resizeMode='contain' style={{ width: '20%' }} /> */}
                                        <Icons name='like2' size={16} color={'#ED6626'} style={{ marginLeft: moderateScale(8) }} />

                                        <Text style={{ marginLeft: moderateScale(5), fontSize: textScale(13), fontWeight: '500', color: colors.whiteColor }}>{item.LikeTxt ? item.LikeTxt : 0}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: moderateScale(8), alignItems: 'center', flex: 0.5, justifyContent: 'center' }}>
                                        {/* <Image source={ImagePath.star} resizeMode='contain' style={{ width: '20%' }} /> */}
                                        <Icons name='staro' size={16} color={'#ED6626'} style={{ marginLeft: moderateScale(8) }} />

                                        <Text style={{ marginLeft: moderateScale(5), fontSize: textScale(13), fontWeight: '500', color: colors.whiteColor }}>{item.stars}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                    {
                        feedList.slice(0, 10).map((item, index) => {
                            return (
                                <View style={{
                                    width: moderateScale(8), height: moderateScale(8), borderRadius: moderateScale(4),
                                    backgroundColor: CurrentIndex == index ? colors.redColor : colors.whiteColor,
                                    margin: moderateScale(5)
                                }} key={index}></View>
                            )
                        })
                    }
                </View>

                {
                    isButton &&
                    <View style={{ alignSelf: 'center', width: '40%', marginTop: moderateScaleVertical(10) }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(NavigationStrings.MOVIE_REVIEW)}
                            style={{ backgroundColor: '#FF5E3A', borderRadius: moderateScale(15), padding: moderateScale(10), justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: textScale(12), fontWeight: '500', color: colors.whiteColor }}>View all reviews</Text>
                        </TouchableOpacity>
                    </View>
                }

            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginVertical: moderateScaleVertical(20),
        // borderStartColor:'green'
        // padding: moderateScale(16)
    },
    browsetxt: {
        color: colors.whiteColor,
        fontSize: textScale(18),
        fontWeight: '600',
        fontFamily: 'Montserrat-SemiBold',
        paddingHorizontal: moderateScale(5),
    },
    Heading: {
        color: '#FF5E3A',
        fontSize: textScale(22),
        fontWeight: '600',
        // textAlign: 'center',
        marginVertical: moderateScaleVertical(5),
        // padding:0,
        fontFamily: 'Montserrat-Medium',
        // width:'90%'
    },
    subHeading: {
        width: '100%',
        color: colors.whiteColor,
        fontSize: textScale(16),
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
    }
});

//make this component available to the app
export default ReviewsComp;
