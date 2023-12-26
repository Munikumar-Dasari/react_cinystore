//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,Linking } from 'react-native';
import { moderateScale, moderateScaleVertical, scale, textScale } from '../Styles/responsiveSize';
import ImagePath from '../Constants/ImagePath';
import colors from '../Styles/colors';
import YoutubePlayer from "react-native-youtube-iframe";

// create a component
const TrailerComp = ({item}) => {
//     const handlePress=(trailer)=>{
// Linking.openURL(trailer);

//     }
    return (
        <View style={styles.container}>
            <View style={{ borderBottomColor: '#2B5759', borderWidth: 0.5, marginVertical: moderateScaleVertical(10) }} />
            <View style={{ marginTop: moderateScaleVertical(10) }}>
                <Text style={styles.heading}>{item.Movie_name}</Text>
                <View style={{ borderRadius: moderateScale(5), }}>

                            <YoutubePlayer
        height={200}
        // play={playing}
        videoId={item.trailer}
        // onChangeState={onStateChange}
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
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        fontSize: textScale(18),
        fontWeight: '600',
        fontFamily: 'Montserrat-Medium',
        color: colors.whiteColor,
        marginBottom: moderateScaleVertical(10)
    },
    subheading: {
        fontSize: textScale(14),
        fontWeight: '600',
        fontFamily: 'Montserrat-Regular',
        color: colors.whiteColor,
        marginTop: moderateScaleVertical(5)
    },
    descStyle: {
        fontSize: textScale(14),
        fontWeight: '500',
        fontFamily: 'Montserrat-Medium',
        color: '#F5F6F885',
        // textAlign: 'justify'

    }
});

//make this component available to the app
export default TrailerComp;
