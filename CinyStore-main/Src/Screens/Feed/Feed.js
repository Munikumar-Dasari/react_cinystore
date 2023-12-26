//import liraries
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import WrapperComponentTwo from '../../Components/WrapperComponentTwo';
import Header from '../../Components/Header';
import { textScale, moderateScale, moderateScaleVertical, scale, width, height } from '../../Styles/responsiveSize';
import colors from '../../Styles/colors';
import NavigationStrings from '../../Navigations/NavigationStrings';
import Icon from 'react-native-vector-icons/FontAwesome6'
import Icons from 'react-native-vector-icons/AntDesign'
import Iconss from 'react-native-vector-icons/MaterialIcons'
import moment from 'moment';
import AutoHeightImage from 'react-native-auto-height-image';
import ImagePath from '../../Constants/ImagePath';
import { useScrollToTop, } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


// create a component
const Feed = ({ navigation }) => {
    const isFocused = useIsFocused();
    const [showText, setShowText] = useState(3);
    const [Page, setPage] = useState(1);
    const [Load, setLoad] = useState(false)
    const [feedList, setfeedList] = useState([])
    let flatListRef;
    // const scrool = useScrollToTop(flatListRef)

    useEffect(() => {
        getFeedData();
    flatListRef.scrollToOffset({animation: true,offset:0});
    }, [isFocused])

    const getFeedData = async () => {
        setLoad(true)
        const res = await fetch(`https://cinystore.com/CombinedFeed_API?page=${Page}`);
        const json = await res?.json();
        console.log(json.results, 'json')
        setfeedList([...feedList, ...json.results])
        if (json.next_url !== null) {
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
        <>
            <Header onPressleft={() => navigation.openDrawer()} placeholder={'Search Feeds'} />
            <WrapperComponentTwo isPadding={true}>
                {/* <Text style={styles.feedPage}>Feed</Text> */}

                <View style={styles.container2}>
                    <View style={{ marginTop: moderateScaleVertical(10) }}>
                        <FlatList
                            ref={(ref)=>{
                                flatListRef=ref
                            }}
                            // ref={ref}
                            data={feedList}
                            onEndReached={handleLoadMore}
                            onEndReachedThreshold={16}
                            ItemSeparatorComponent={
                                <View style={{ borderBottomColor: '#2B5759', borderColor: '#2B5759', backgroundColor: '#2B5759', borderWidth: 5, marginVertical: moderateScaleVertical(15), width: '100%', flex: 1 }} />
                            }
                            ListEmptyComponent={<Text style={{ color: '#fff', fontFamily: 'Montserrat-SemiBold', fontWeight: '600' }}>Data Not Found...</Text>}
                            renderItem={({ item, index }) => {
                                const timeago = moment(item.timestamp_field).fromNow();
                                return (
                                    <View style={styles.container}>
                                        <View style={{ borderBottomColor: '#2B5759', borderColor: '#2B5759', backgroundColor: '#2B5759', borderWidth: 0.5, marginVertical: moderateScaleVertical(5), width: '100%', flex: 1 }} />
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <View style={{ borderRadius: moderateScale(50) }}>
                                                    <Image
                                                        source={{ uri: item?.logo }}
                                                        resizeMode='cover' style={{ height: scale(40), width: scale(40), borderRadius: moderateScale(40 / 2) }} />
                                                </View>
                                                <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: textScale(15), fontWeight: '700', color: colors.whiteColor, marginLeft: moderateScale(8), marginVertical: moderateScaleVertical(5) }}>{item.source || item.author}</Text>
                                            </View>
                                            <View>
                                                <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: textScale(12), fontWeight: '500', color: 'rgba(245, 245, 245, 0.74)' }}>{timeago}</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: moderateScaleVertical(5) }}>
                                            <TouchableOpacity onPress={() => navigation.navigate(NavigationStrings.MOVIE_FEED, { data: item })}>
                                                <Text style={[styles.heading, { fontSize: moderateScale(18) }]}>{item.Movie_name || item.movie_title}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity onPress={() => navigation.navigate(NavigationStrings.MOVIE_FEED, { data: item })} style={{ marginVertical: moderateScaleVertical(5), }}> 
                                            <AutoHeightImage source={{ uri: item.Image || item.Poster || item.poster_path }} width={scale(380)} />
                                            <Text style={[styles.descStyle, { marginTop: moderateScaleVertical(10), fontSize: scale(16), textAlign: 'justify', fontWeight: '700' }]}>{item.Heading || item.overview}</Text>
                                            <Text numberOfLines={showText} style={[styles.descStyle, { marginTop: moderateScaleVertical(8), color: 'rgba(245, 245, 245, 0.74)' },]}>{item.text || item.synopsis || item.comment}</Text>
                                            {showText === 3 && <TouchableOpacity onPress={() => navigation.navigate(NavigationStrings.MOVIE_FEED, { data: item })}>
                                                <Text style={[styles.descStyle, { color: '#FF5E3A' }]} >..View More</Text>
                                            </TouchableOpacity>}
                                        </TouchableOpacity>

                                        <View style={{ borderBottomColor: '#2B5759', borderWidth: 0.5, marginVertical: moderateScaleVertical(10) }} />
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                                <Icons name='like2' color={'#fff'} size={15} style={{}} />
                                                <Text style={{ fontSize: textScale(14), fontWeight: '400', marginLeft: moderateScale(8), color: colors.whiteColor, fontFamily: 'Montserrat-Medium' }}>{item.like_count}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                <Iconss name='comment' color={'#fff'} size={15} style={{}} />

                                                <Text style={{ fontSize: textScale(14), fontWeight: '400', marginLeft: moderateScale(8), color: colors.whiteColor, fontFamily: 'Montserrat-Medium' }}>{item.follow_count}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Icon name='share-from-square' color={'#fff'} size={14} style={{}} />

                                                <Text style={{ fontSize: textScale(14), fontWeight: '400', color: colors.whiteColor, marginLeft: moderateScale(8), fontFamily: 'Montserrat-Medium' }}>{item.follow_count}</Text>
                                            </View>
                                            <View />
                                            <View />
                                            <View />
                                            <View />
                                            <View />
                                        </View>
                                        {/* <View style={{ borderBottomColor: '#2B5759', borderWidth: 0.5, marginVertical: moderateScaleVertical(10) }} /> */}

                                    </View>
                                )
                            }}
                        />
                    </View>
                    {
                        Load && <View style={{ width: '100%', height: moderateScale(60), justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size={'large'} color={'#FF5E3A'} />
                            <Text style={{ color: '#fff', fontSize: textScale(14), fontWeight: '600', fontFamily: 'Montserrat-Medium', }}>Loading</Text>
                        </View>
                    }
                </View>
            </WrapperComponentTwo>
        </>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop:moderateScaleVertical(10),
        paddingHorizontal: moderateScale(8),
        // borderRadius:moderateScale(20)

    },
    container2: {
        // flex: 1,
        width: '100%',
        // marginVertical: moderateScaleVertical(5),
    },
    feedPage: {
        fontSize: textScale(18),
        fontWeight: '600',
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        color: colors.whiteColor,
        marginTop: moderateScaleVertical(10)
    },
    heading: {
        fontSize: textScale(17),
        fontWeight: '600',
        fontFamily: 'Montserrat-Medium',
        color: '#FF5E3A'
    },
    subheading: {
        fontSize: textScale(14),
        fontWeight: '600',
        fontFamily: 'Montserrat-Regular',
        color: colors.whiteColor,
        marginTop: moderateScaleVertical(5)
    },
    descStyle: {
        fontSize: textScale(16),
        fontWeight: '500',
        fontFamily: 'Montserrat-Medium',
        color: '#fff',
        // textAlign: 'justify'

    }

});

//make this component available to the app
export default Feed;
