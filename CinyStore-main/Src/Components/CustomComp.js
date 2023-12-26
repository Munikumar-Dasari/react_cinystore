//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Alert,TouchableOpacity } from 'react-native';
import colors from '../Styles/colors';
import { moderateScale, moderateScaleVertical, scale, textScale } from '../Styles/responsiveSize';
import ImagePath from '../Constants/ImagePath';

// create a component
const CustomComp = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.4 }}>
                <TouchableOpacity  onPress={() => navigation.closeDrawer()} style={{marginTop:moderateScale(30), alignSelf: 'flex-end' }}>
                    <Image source={ImagePath.close} style={{ tintColor: '#A2A2A7', }} resizeMode='contain' />
                </TouchableOpacity>
                <View style={{ marginTop: moderateScale(25) }}>
                    <Image source={{uri:'https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg'}} resizeMode='contain' style={{height:scale(100),width:scale(100)}} />
                    <Text style={{ fontSize: textScale(20), fontWeight: '700', color: colors.blackColor }}>User_Name</Text>
                    <View style={{ flexDirection: 'row',marginVertical:moderateScaleVertical(5) }}>
                        <Image source={ImagePath.Email} resizeMode='contain'/>
                        <Text style={{fontSize: textScale(16), fontWeight: '500', color: colors.blackColor, marginHorizontal: moderateScale(10) }}>user_email@gmail.com</Text>
                    </View>
                    <View style={{ borderBottomColor: '#A3ADAF', borderWidth: 0.5, marginVertical: moderateScaleVertical(10) }} />
                </View>
            </View>
            <View style={{ flex: 0.6 }} />
            <View style={{ flex: 0.2, justifyContent: 'flex-end' }}>
                <View style={{borderBottomColor: '#A3ADAF', borderWidth: 0.5, marginVertical: moderateScaleVertical(10) }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginVertical:moderateScaleVertical(5) }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image resizeMode='contain' source={ImagePath.logout} />
                        <Text style={{ color: colors.blackColor, fontSize: textScale(16), fontWeight: '600', marginLeft: moderateScale(10) }}>Logout</Text>
                    </View>
                    <Image source={ImagePath.arrow} resizeMode='contain' />
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(16),
        backgroundColor: colors.whiteColor
        // justifyContent:'center',
        // alignItems:'flex-end'
    },
});

//make this component available to the app
export default CustomComp;
