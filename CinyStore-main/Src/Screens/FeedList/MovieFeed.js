//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import WrapperComponentTwo from '../../Components/WrapperComponentTwo';
import { moderateScale, moderateScaleVertical, scale, textScale } from '../../Styles/responsiveSize'
import ImagePath from '../../Constants/ImagePath';
import colors from '../../Styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome6'
import Icons from 'react-native-vector-icons/AntDesign'
import Iconss from 'react-native-vector-icons/MaterialIcons'
import AutoHeightImage from 'react-native-auto-height-image';
import moment from 'moment';


// create a component
const MovieFeed = ({ navigation, route }) => {
    const data = route.params.data;
    console.log(data.timestamp_field,'moviefed')
    const timeago = moment(data.timestamp_field).fromNow();
    
    return (
        <WrapperComponentTwo>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: moderateScaleVertical(50) }}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                    <Image source={ImagePath.back} resizeMode='contain' style={styles.backlogo} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={{ uri: data?.logo }}
                    resizeMode='cover' style={{ height: scale(40), width: scale(40), borderRadius: moderateScale(40 / 2) }} />
                    <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: textScale(15), fontWeight: '600', color: colors.whiteColor, marginLeft: moderateScale(8) }}>{data.production_house_name||data.source|| data.author}</Text>
                </View>
                <View />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: textScale(18), fontWeight: '700', color: '#FF5E3A', marginVertical:moderateScaleVertical(10) }}>{data.Movie_name || data.movie_title}</Text>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: textScale(12), fontWeight: '500', color: 'rgba(245, 245, 245, 0.74)' }}>{timeago}</Text>
                    </View>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                
                <View>
                
                    <View>
                    <AutoHeightImage source={{ uri: data.Image || data.Poster || data.poster_path}} width={scale(380)}/>

                        {/* <Image source={{ uri: data.Image }} resizeMode='cover' style={{ alignSelf: 'center', height: scale(200), width: '100%' }} /> */}
                        <Text style={[styles.descStyle, { marginVertical: moderateScaleVertical(10), fontSize: scale(18), color: '#fff' }]}>{data.Heading || data.overview}</Text>
                        <Text style={[styles.descStyle, { marginTop: moderateScaleVertical(5), color: 'rgba(245, 245, 245, 0.74)', fontSize: scale(14),fontWeight:'500' }]}>{data.text || data.synopsis || data.comment}</Text>
                        <View style={{ borderBottomColor: '#2B5759', borderWidth: 0.5, marginVertical: moderateScaleVertical(10) }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: moderateScaleVertical(16) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <Icons name='like2' color={'#fff'} size={15} style={{ }} />
                            <Text style={{ fontSize: textScale(14), fontWeight: '400',marginLeft: moderateScale(8),  color: colors.whiteColor, fontFamily: 'Montserrat-Medium' }}>{data.like_count}</Text>

                                {/* <Image source={ImagePath.Like} tintColor={colors.whiteColorOpacity70} resizeMode='contain' style={{ marginLeft: moderateScale(10) }} /> */}
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Iconss name='comment' color={'#fff'} size={15} style={{}} />
                                            
                                            <Text style={{ fontSize: textScale(14), fontWeight: '400',  marginLeft: moderateScale(8), color: colors.whiteColor, fontFamily: 'Montserrat-Medium' }}>{data.follow_count}</Text>
                                {/* <Image source={ImagePath.comment} tintColor={colors.whiteColorOpacity70} resizeMode='contain' style={{ marginLeft: moderateScale(10) }} /> */}
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name='share-from-square' color={'#fff'} size={14} style={{ }} />
                                            
                                            <Text style={{ fontSize: textScale(14), fontWeight: '400', color: colors.whiteColor, marginLeft: moderateScale(8), fontFamily: 'Montserrat-Medium' }}>{data.follow_count}</Text>
                                {/* <Image source={ImagePath.share} tintColor={colors.whiteColorOpacity70} resizeMode='contain' style={{ marginLeft: moderateScale(10) }} /> */}
                            </View>
                            <View />
                            <View />
                            <View />
                            <View />
                            <View />
                        </View>
                    </View>
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
        height: moderateScale(30),
        width: moderateScale(30),
        marginVertical: moderateScaleVertical(10),
        alignSelf: 'flex-start'
    },
    descStyle: {
        fontSize: textScale(14),
        fontWeight: '700',
        fontFamily: 'Montserrat-Medium',
        // color: '#F5F6F885',
    }
});

//make this component available to the app
export default MovieFeed;
