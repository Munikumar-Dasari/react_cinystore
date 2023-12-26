//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from '../Styles/colors';
// import fontFamily from '../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from '../Styles/responsiveSize';

// create a component
const ButtonComponent = ({
    onPress = () => {},
    text = '',
    style = {},
    leftImg = null,
    textstyle = {},
    midrightimg,
    midrightimgpath,


}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={{ ...styles.container, ...style }}>
            {
                !!leftImg ? <Image source={leftImg} /> : <View />
            }
            <Text style={{ ...styles.textstyle, ...textstyle }}>{text}</Text>
        {  midrightimg &&  <Image source={midrightimgpath} tintColor={'#fff'} style={{marginLeft:moderateScale(5)}}/>}
            <View />
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: moderateScale(52),
        backgroundColor: '#FF5E3A',
        borderRadius: moderateScale(50),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // paddingHorizontal: moderateScale(16),
        // marginVertical:moderateScaleVertical(5)
    },
    textstyle: {
        // fontFamily:fontFamily.medium,
        color: colors.whiteColor,
        fontSize: textScale(16),
        fontWeight: '700',
        fontFamily:'Montserrat-Bold',
        // textTransform:'uppercase'
    }
});

//make this component available to the app
export default ButtonComponent;
