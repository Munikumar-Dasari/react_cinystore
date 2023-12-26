//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import colors from '../Styles/colors';
import { moderateScale, moderateScaleVertical, textScale } from '../Styles/responsiveSize';


// create a component
const TextInputC = ({
    // value='',
    text,
    placeholder,
    imgsrc,
    imgLeft,
    imgright,
    style={},
    keyBoardType,
    // onChangeText,
    onhandleChange = () => { }
}) => {
    return (
        <View style={{...styles.container,...style}}>
            <Text style={styles.textStyling}>{text}</Text>
            <View style={[styles.imginput, { height: moderateScale(40), alignItems: 'center',justifyContent:imgright?'space-between':null, flexDirection: 'row', backgroundColor: colors.whiteColor }]}>
            {imgLeft && <Image source={imgsrc} style={[styles.imgstyling,{marginLeft:moderateScale(5)}]}  resizeMode='contain'/>}
                <TextInput placeholder={placeholder} placeholderTextColor={colors.gray3}
                    style={{ ...style,flex:1,marginLeft: moderateScale(10),color:colors.blackColor,fontFamily:'Montserrat-SemiBold',fontSize:textScale(16), }}
                    onhandleChange={onhandleChange}
                    keyboardType={keyBoardType}
                />
            {imgright &&  <Image source={imgsrc} style={[styles.imgstyling,{marginRight:moderateScale(10)}]}  resizeMode='contain'/>}

            </View>
            </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container:{
            // marginVertical:moderateScaleVertical(10)
            marginBottom:moderateScaleVertical(50)

    },

    imginput: {
        paddingHorizontal: moderateScale(10),
        borderRadius: moderateScale(50),
    },
    imgstyling: {
        // height: moderateScale(0),
        // width: moderateScale(40),
        // // borderRadius: 20,
    
    },
    textStyling:{
        color:colors.whiteColor,
        fontSize:textScale(15),
        // marginVertical:moderateScaleVertical(8),
        fontFamily:'Montserrat-Regular',
        fontWeight:'400'


    }
});

//make this component available to the app
export default TextInputC;
