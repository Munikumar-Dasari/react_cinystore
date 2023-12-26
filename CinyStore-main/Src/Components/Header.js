//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { moderateScale, moderateScaleVertical, scale } from '../Styles/responsiveSize';
import ImagePath from '../Constants/ImagePath';
import TextInputC from './TextInputC';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/FontAwesome'

// create a component
const Header = ({
    onPressleft = () => { },
    onPressright = () => { },
    isPadding,
    placeholder,
}) => {
    return (
        <LinearGradient colors={['#040607', '#040607',]}>
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.7} onPress={onPressleft} >
                <Icons name='user-circle' size={30} color={'#fff'}  />

                    {/* <Image source={ImagePath.Dp} resizeMode='contain' /> */}
                </TouchableOpacity>
                <View style={{flex:1,marginHorizontal:moderateScale(10)}}>
                <TextInputC
                    placeholder={placeholder}
                    imgright={true}
                    imgsrc={ImagePath.search}
                />
                </View>
                <TouchableOpacity activeOpacity={0.7} onPress={onPressright} >
                    <Image source={ImagePath.Notification} resizeMode='contain' />
                </TouchableOpacity>
            </View>
            {/* <View style={{ paddingHorizontal: moderateScale(5) }}>
                <TextInputC style={{ marginTop: 0, }}
                    placeholder={'Enter Keyword'}
                    imgright={true}
                    imgsrc={ImagePath.search}
                />
            </View> */}
        </LinearGradient>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: moderateScale(50),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: moderateScale(55),
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScaleVertical(10)

    },
});

//make this component available to the app
export default Header;
