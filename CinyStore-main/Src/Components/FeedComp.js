//import liraries
import React, { Component, useEffect, useState } from 'react';
import ImageLoad from 'react-native-image-placeholder';
import { View, Text, StyleSheet, Image } from 'react-native';
import { moderateScale, moderateScaleVertical, scale, textScale } from '../Styles/responsiveSize';
import ImagePath from '../Constants/ImagePath';
import colors from '../Styles/colors';
import NavigationStrings from '../Navigations/NavigationStrings';
import moment from 'moment';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome6'
import Icons from 'react-native-vector-icons/AntDesign'
import Iconss from 'react-native-vector-icons/MaterialIcons'
// create a component
const FeedComp = ({ item, navigation }) => {
    const [showText, setShowText] = useState(3);
    const [Data, setData] = useState('')
    const timeago = moment(item.timestamp_field).fromNow();
    useEffect(() => {
        axios.get('https://cinystore.com/ProducerInfo_API/').then((data) => setData(data.data)).catch((e) => console.log(e));
    }, [])
    const newData = Data && Data.filter((newitem, index) => newitem.production_house === item.production_house_name);
    // console.log(newData[0], 'herenew')
    // console.log(newData[0].production_house_image, 'image')
    
    // const date = item.timestamp_field.split('T');
    // const newDate = date[0].split('-')
    // const Date = newDate[2] + '/' + newDate[1] + '/' + newDate[0];
    // const time = date[1].split('+');
    // function tConvert(time) {
    //     // Check correct time format and split into components
    //     time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    //     if (time.length > 1) { // If time format correct
    //         time = time.slice(1);  // Remove full string match value
    //         time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
    //         time[0] = +time[0] % 12 || 12; // Adjust hours
    //     }
    //     return time.join(''); // return adjusted time or original string
    // }
    // const newtime = tConvert(time[0]);
    return (
        <View style={styles.container}>
            <View style={{ borderBottomColor: '#2B5759', borderWidth: 0.5, marginVertical: moderateScaleVertical(10) }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* <Image source={ImagePath.Dp} resizeMode='contain' /> */}
                    { 

                      item?.production_house_name === newData[0]?.production_house ?
                            <View style={{borderRadius:moderateScale(50)}}>
                                <Image 
                                source={{ uri:newData[0].production_house_image}}
                                 resizeMode='cover' style={{height:scale(40),width:scale(40)}} />
                                
                                </View>
                            :
                            <Icon name="circle-user" size={20} color={'#fff'} />
                    }
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: textScale(15), fontWeight: '700', color: colors.whiteColor, marginLeft: moderateScale(8), marginVertical: moderateScaleVertical(5) }}>{item.production_house_name}</Text>
                </View>
                <View>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: textScale(12), fontWeight: '500', color: 'rgba(245, 245, 245, 0.74);' }}>{timeago}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: moderateScaleVertical(5) }}>
                <Text style={[styles.heading,{fontSize:moderateScale(20)}]}>{item.Movie_name}</Text>
            </View>
            <View style={{ marginVertical: moderateScaleVertical(5), }}>
                <ImageLoad source={{ uri: item.Image }} style={{ borderRadius: moderateScale(10), alignSelf: 'center', height: scale(400), width: '100%', resizeMode: 'contain' }} />
                <Text style={[styles.descStyle, { marginTop: moderateScaleVertical(10), fontSize: scale(18), textAlign: 'justify' }]}>{item.Heading}</Text>
                <Text numberOfLines={showText} style={[styles.descStyle, { marginTop: moderateScaleVertical(8), color: 'rgba(245, 245, 245, 0.74)' },]}>{item.text}</Text>
                {showText === 3 && <TouchableOpacity onPress={() => navigation.navigate(NavigationStrings.MOVIE_FEED, { data: item })}><Text style={[styles.descStyle, { color: '#FF5E3A' }]} >..View More</Text></TouchableOpacity>}
            </View>
            <View style={{ borderBottomColor: '#2B5759', borderWidth: 0.5, marginVertical: moderateScaleVertical(10) }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: textScale(14), fontWeight: '400', color: colors.whiteColor, fontFamily: 'Montserrat-Medium' }}>Like</Text>
                    <Icons name='like2' size={15} style={{ marginLeft: moderateScale(8), }} />
                    {/* <Image source={ImagePath.Like} tintColor={colors.whiteColor} resizeMode='contain' style={{ marginLeft: moderateScale(8), width: '12%' }} /> */}
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={{ fontSize: textScale(14), fontWeight: '400', color: colors.whiteColor, fontFamily: 'Montserrat-Medium' }}>Comment</Text>
                    <Iconss name='comment' size={15} style={{ marginLeft: moderateScale(8), }} />

                    {/* <Image source={ImagePath.comment} tintColor={colors.whiteColor} resizeMode='contain' style={{ marginLeft: moderateScale(8), width: '12%' }} /> */}
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: textScale(14), fontWeight: '400', color: colors.whiteColor, fontFamily: 'Montserrat-Medium' }}>Share</Text>
                    <Icon name='share-from-square' size={14} style={{ marginLeft: moderateScale(8), }} />
                    {/* <Image source={ImagePath.share} tintColor={colors.whiteColor} resizeMode='contain' style={{ marginLeft: moderateScale(8), width: '12%' }} /> */}
                </View>
                <View />
                <View />
                <View />
                <View />
                <View />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '100%',
        marginVertical: moderateScaleVertical(5),
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
        fontWeight: '700',
        fontFamily: 'Montserrat-Medium',
        color: '#fff',
        // textAlign: 'justify'

    }
});

//make this component available to the app
export default FeedComp;
