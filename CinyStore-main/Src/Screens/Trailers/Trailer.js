//import liraries
import React, { Component, useState, useEffect, useCallback } from 'react';
import WrapperComponentTwo from '../../Components/WrapperComponentTwo';
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import Header from '../../Components/Header';
import { moderateScaleVertical, textScale, moderateScale } from '../../Styles/responsiveSize';
import ImagePath from '../../Constants/ImagePath';
import colors from '../../Styles/colors';
import YoutubePlayer from "react-native-youtube-iframe";
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


// create a component
const Trailer = ({ navigation }) => {
    const [ID, setID] = useState('');
    const [Load, setLoad] = useState(false)
    const [feedList, setfeedList] = useState([])
    const [playing, setPlaying] = useState(false);

    let flatListRef;
    const isFocused = useIsFocused();
    useEffect(() => {
        getFeedData();
    flatListRef.scrollToOffset({animation: true,offset:0});


    }, [isFocused])
    const getFeedData = async () => {
        setLoad(true)
        const res = await fetch(`https://www.cinystore.com/Trailers_API/?cursor=${ID}`);
        const json = await res?.json();
        setfeedList([...feedList, ...json.results])
        if (json.next_url !== null) {
            const nextUrl = json.next_url;
        console.log(json,'trailerJson')

            console.log(nextUrl, 'nexturl')
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
        <>
            <Header onPressleft={() => navigation.openDrawer()} placeholder={'Search Trailer'} />
            <WrapperComponentTwo>
                <View style={styles.container}>
                    {/* <Text style={styles.feedPage}>Trailers</Text> */}
                    <View>
                        <FlatList
                            data={feedList}
                            ref={(ref)=>{
                                flatListRef=ref
                            }}
                            onEndReached={handleLoadMore}
                            onEndReachedThreshold={16}
                            ListEmptyComponent={<Text style={{ color: '#fff', fontFamily: 'Montserrat-SemiBold', fontWeight: '600' }}>Data Not Found...</Text>}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={styles.container}>
                                        <View style={{ borderBottomColor: '#2B5759', borderWidth: 0.5, marginVertical: moderateScaleVertical(10) }} />
                                        <View style={{ marginTop: moderateScaleVertical(10) }}>
                                            <Text style={[styles.Heading, { marginBottom: moderateScaleVertical(10),color:'#FF5E3A' }]}>{item.Movie_name}</Text>
                                            <View style={{ borderRadius: moderateScale(5), }}>

                                                <YoutubePlayer
                                                    height={200}
                                                    // play={playing}
                                                    videoId={item.trailer}
                                                // onChangeState={onStateChange}
                                                forceAndroidAutoplay={false}
                                                />
                                            </View>
                                        </View>
                                        <View style={{ borderBottomColor: '#2B5759', borderWidth: 0.5, marginVertical: moderateScaleVertical(10) }} />
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                                <Text style={{ fontSize: textScale(14), fontWeight: '400', color: colors.whiteColor, fontFamily: 'Montserrat-Medium' }}>Like</Text>
                                                <Image source={ImagePath.Like} tintColor={colors.whiteColor} resizeMode='contain' style={{ marginLeft: moderateScale(10), width: '14%' }} />
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                <Text style={{ fontSize: textScale(14), fontWeight: '400', color: colors.whiteColor, fontFamily: 'Montserrat-Medium' }}>Comment</Text>
                                                <Image source={ImagePath.comment} tintColor={colors.whiteColor} resizeMode='contain' style={{ marginLeft: moderateScale(10), width: '12%' }} />
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={{ fontSize: textScale(14), fontWeight: '400', color: colors.whiteColor, fontFamily: 'Montserrat-Medium' }}>Share</Text>
                                                <Image source={ImagePath.share} tintColor={colors.whiteColor} resizeMode='contain' style={{ marginLeft: moderateScale(10), width: '14%' }} />
                                            </View>
                                            <View />
                                            <View />
                                            <View />
                                            <View />
                                            <View />
                                        </View>
                                    </View>
                                )
                            }}
                        />
                        {
                            Load && <View style={{ width: '100%', height: moderateScale(60), justifyContent: 'center', alignItems: 'center' }}>
                                <ActivityIndicator size={'large'} color={'#FF5E3A'} />
                                <Text style={{ color: '#fff', fontSize: textScale(14), fontWeight: '600', fontFamily: 'Montserrat-Medium', }}>Loading</Text>
                            </View>
                        }
                    </View>
                </View>
            </WrapperComponentTwo>
        </>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    feedPage: {
        fontSize: textScale(18),
        fontWeight: '600',
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        color: colors.whiteColor,
        marginTop: moderateScaleVertical(10)
    },
    browsetxt: {
        color: colors.whiteColor,
        fontSize: textScale(18),
        fontWeight: '600',
        fontFamily: 'Montserrat-SemiBold',

    },
    Heading: {
        color: colors.whiteColor,
        fontSize: textScale(18),
        fontWeight: '700',
        fontFamily: 'Montserrat-Medium'

    }
});

//make this component available to the app
export default Trailer;
