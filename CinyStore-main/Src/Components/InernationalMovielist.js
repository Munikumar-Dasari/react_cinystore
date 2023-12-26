//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import WrapperComponentTwo from './WrapperComponentTwo';
import { moderateScale, moderateScaleVertical, scale, textScale } from '../Styles/responsiveSize';
import ImagePath from '../Constants/ImagePath';
import colors from '../Styles/colors';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome6'
import Icons from 'react-native-vector-icons/AntDesign'
import Iconss from 'react-native-vector-icons/MaterialIcons'

// create a component
const InernationalMovielist = ({ navigation, route }) => {
    const [showDetals, setshowDetails] = useState(false);
    const [MovieFeed, setMovieFeed] = useState(false);
    const Data = route.params.item;
    console.log(Data,'hehe')
    const image=route.params.image
    // console.log(Data,'inter....');

    
    return (
        <WrapperComponentTwo>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: moderateScaleVertical(50) }}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                    <Image source={ImagePath.back} resizeMode='contain' style={styles.backlogo} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.8,justifyContent:'center' }}>
                {/* <Icon name="circle-user" size={20} color={'#fff'} /> */}
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: textScale(18), fontWeight: '700', color: colors.whiteColor, }}>{Data.movie_title}</Text>
                </View>
                <View />
            </View> 
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: moderateScaleVertical(15) }}>
                    <Image source={{ uri: `https://image.tmdb.org/t/p/w500/` + image[3] }} resizeMode='cover' style={{ height: scale(500), width: '100%' }} />

                    <View style={{
                        backgroundColor: colors.whiteColor, borderRadius: moderateScale(10), padding: moderateScale(20),
                        width: '100%', alignSelf: 'center', marginTop: moderateScaleVertical(10),
                    }}>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => setshowDetails(!showDetals)} style={{ flexDirection: 'row', width: '100%', height: moderateScaleVertical(20), justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{
                                color: colors.blackColor, fontSize: textScale(16),
                                fontWeight: '700'
                            }}>
                                Details</Text>
                            <Image source={showDetals ? ImagePath.up : ImagePath.down} style={{ height: scale(16), width: scale(16), marginRight: moderateScale(10) }} />
                        </TouchableOpacity>
                        {
                            showDetals &&
                            <View>
                                <View style={{ borderBottomColor: colors.blackOpacity10, borderWidth: 0.5, marginVertical: moderateScaleVertical(25) }} />
                                <View style={{ flexDirection: 'row', marginVertical: moderateScaleVertical(8), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{flex:0.3}}>
                                        <Text style={{ color: colors.blackColor, fontSize: textScale(12), fontWeight: '400', }}>Directed By</Text>
                                    </View>
                                    <View style={{flex:0.7,alignItems:'center'}}>
                                        <Text style={{ color: colors.blackColor, fontSize: textScale(12), fontWeight: '400', }}>{Data.director ? Data.director : 'NA'}</Text>
                                    </View>
                                    <View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginVertical: moderateScaleVertical(8), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{flex:0.3}}>
                                        <Text style={{ color: colors.blackColor, fontSize: textScale(12), fontWeight: '400' }}>Produced By</Text>
                                    </View>
                                    <View style={{flex:0.7,alignItems:'center'}}>
                                        <Text style={{ color: colors.blackColor, fontSize: textScale(12), fontWeight: '400' }}>{Data.producer ? Data.producer : 'NA'}</Text>
                                    </View>
                                    <View>
                                    </View>
                                </View>
                                {/* <View style={{ flexDirection: 'row', marginVertical: moderateScaleVertical(8), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{flex:0.3}}>
                                        <Text style={{ color: colors.blackColor, fontSize: textScale(12), fontWeight: '400' }}>Production House</Text>
                                    </View>
                                    <View style={{flex:0.7,alignItems:'center'}}>
                                        <Text style={{ color: colors.blackColor, fontSize: textScale(12), fontWeight: '400' }}>{Data.Production_house ? Data.Production_house : 'NA'}</Text>
                                    </View>
                                    <View>
                                    </View>
                                </View> */}
                                {/* <View style={{ flexDirection: 'row', marginVertical: moderateScaleVertical(8), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{flex:0.3}}>
                                        <Text style={{ color: colors.blackColor, fontSize: textScale(12), fontWeight: '400' }}>Recording Studio</Text>
                                    </View>
                                    <View style={{flex:0.7,alignItems:'center'}}>
                                        <Text style={{ color: colors.blackColor, fontSize: textScale(12), fontWeight: '400' }}>{Data.Recording_studio ? Data.Recording_studio : 'NA'}</Text>
                                    </View>
                                    <View>
                                    </View>
                                </View> */}
                                {/* <View style={{ flexDirection: 'row', marginVertical: moderateScaleVertical(8), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{flex:0.3}}>
                                        <Text style={{ color: colors.blackColor, fontSize: textScale(12), fontWeight: '400' }}>Script  Writer</Text>
                                    </View>
                                    <View style={{flex:0.7,alignItems:'center'}}>
                                        <Text style={{ color: colors.blackColor, fontSize: textScale(12), fontWeight: '400' }}>{Data.Script_writer ? Data.Script_writer : 'NA'}</Text>
                                    </View>
                                    <View>
                                    </View>
                                </View> */}
                                {/* <View style={{ flexDirection: 'row', marginVertical: moderateScaleVertical(8), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{flex:0.3}}>
                                        <Text style={{ color: colors.blackColor, fontSize: textScale(12), fontWeight: '400' }}>Choreographer</Text>
                                    </View>
                                    <View style={{flex:0.7,alignItems:'center'}}>
                                        <Text style={{ color: colors.blackColor, fontSize: textScale(12), fontWeight: '400' }}>{Data.choreographer ? Data.choreographer : 'NA'}</Text>
                                    </View>
                                    <View>
                                    </View>
                                </View> */}
                                {/* <View style={{ flexDirection: 'row', marginVertical: moderateScaleVertical(8), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{flex:0.3}}>
                                        <Text style={{ color: colors.blackColor, fontSize: textScale(12), fontWeight: '400' }}>Distribution</Text>
                                    </View>
                                    <View style={{flex:0.7,alignItems:'center'}}>
                                        <Text style={{ color: colors.blackColor, fontSize: textScale(12), fontWeight: '400' }}>{Data.Distribution ? Data.Distribution : 'NA'}</Text>
                                    </View>
                                    <View>
                                    </View>
                                </View> */}
                                <View style={{ flexDirection: 'row', marginVertical: moderateScaleVertical(8), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{flex:0.3}}>
                                        <Text style={{ color: colors.blackColor, fontSize: textScale(12), fontWeight: '400' }}>Genre</Text>
                                    </View>
                                    <View style={{flex:0.7,alignItems:'center'}}>
                                        <Text style={{ color: colors.blackColor, fontSize: textScale(12), fontWeight: '400' }}>{Data.genre ? Data.genre : 'NA'}</Text>
                                    </View>
                                    <View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginVertical: moderateScaleVertical(8), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{flex:0.3}}>
                                        <Text style={{ color: colors.blackColor, fontSize: textScale(12), fontWeight: '400' }}>Music Director</Text>
                                    </View>
                                    <View style={{flex:0.7,alignItems:'center'}}>
                                        <Text style={{ color: colors.blackColor, fontSize: textScale(12), fontWeight: '400' }}>{Data.music_directo ? Data.music_directo : 'NA'}</Text>
                                    </View>
                                    <View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginVertical: moderateScaleVertical(8), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <TouchableOpacity style={{ backgroundColor: '#FF5E3A', borderRadius: moderateScale(50), padding: moderateScale(10), }}>
                                        <Text style={{ color: colors.whiteColor, fontSize: textScale(12), fontWeight: '600', fontFamily: 'Montserrat-Medium' }}>Releasing On {Data.release_date ? Data.release_date : 'NA'}</Text>
                                    </TouchableOpacity>

                                    <View>
                                    </View>
                                </View>
                            </View>
                        }

                    </View>
                    
                    <View style={{ marginVertical: moderateScaleVertical(10) }}>
                        <Text style={{ color: '#ED6626', fontSize: textScale(16), fontWeight: '700' }}>About the Movie</Text>
                        <View style={{ borderBottomColor: '#ED6626', borderWidth: 0.5, marginVertical: moderateScaleVertical(18) }} />
                        <Text style={{ fontFamily: 'Montserra-Medium', fontSize: textScale(16), fontWeight: '500', color: 'rgba(245, 245, 245, 0.74)', textAlign: 'justify', }}>{Data.overview}</Text>
                        <View style={{ borderBottomColor: '#ED6626', borderWidth: 0.5, marginVertical: moderateScaleVertical(10) }} />
                    </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <Icons name='like2' color={'#fff'} size={15} style={{ }} />
                            <Text style={{ fontSize: textScale(14), fontWeight: '400',marginLeft: moderateScale(8),  color: colors.whiteColor, fontFamily: 'Montserrat-Medium' }}>{Data.like_count}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Iconss name='comment' color={'#fff'} size={15} style={{}} />
                                            
                                            <Text style={{ fontSize: textScale(14), fontWeight: '400',  marginLeft: moderateScale(8), color: colors.whiteColor, fontFamily: 'Montserrat-Medium' }}>{Data.follow_count}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name='share-from-square' color={'#fff'} size={14} style={{ }} />
                                            
                                            <Text style={{ fontSize: textScale(14), fontWeight: '400', color: colors.whiteColor, marginLeft: moderateScale(8), fontFamily: 'Montserrat-Medium' }}>{Data.follow_count}</Text>
                            </View>
                            <View />
                            <View />
                            <View />
                            <View />
                            <View />
                        </View>
                
                    {/* <View>
                        {
                            MovieFeed && MovieFeed.map((item, index) => {
                                return (
                                    <View style={{ marginVertical: moderateScaleVertical(10) }} key={index}>
                                        <View style={{ borderBottomColor: '#2B5759', borderWidth: 0.5, marginVertical: moderateScaleVertical(10) }} />

                                        <Text style={{ color: '#ED6626', fontSize: textScale(14), fontWeight: '700' }}>{item.Heading ? item.Heading : 'NA'}</Text>
                                        <Image source={{ uri: item.Image }} resizeMode='contain' style={{ marginVertical: moderateScaleVertical(5), width: '100%', height: scale(200) }} />


                                        <Text style={[styles.descStyle, { marginTop: moderateScaleVertical(5) }]}>{item.text}</Text>

                                    </View>

                                )
                            })
                        }

                        
                    </View> */}
                </View>
            </ScrollView> 

        </WrapperComponentTwo>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    backlogo: {
        height: moderateScale(35),
        width: moderateScale(35),
        marginVertical: moderateScaleVertical(10),
        alignSelf: 'flex-start'
    },
    descStyle: {
        fontSize: textScale(14),
        fontWeight: '500',
        fontFamily: 'Montserrat-Medium',
        color: '#F5F6F885',
    }
});

//make this component available to the app
export default InernationalMovielist;
