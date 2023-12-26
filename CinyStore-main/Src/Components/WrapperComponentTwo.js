//import liraries
import React, { Children, Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, StatusBar } from 'react-native';
// import colors from '../styles/colors';
import ImagePath from '../Constants/ImagePath';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale } from '../Styles/responsiveSize';

// create a component
const WrapperComponentTwo = ({
    isPadding,
    style = {},
    children,
    header,
}
) => {
    return (
        <LinearGradient style={{
            flex: 1,
        paddingHorizontal:isPadding ? moderateScale(0) : moderateScale(8)
        ,...style}}
            colors={['#040607', '#152627', '#040607',]}

        >

            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar translucent backgroundColor='transparent' />
                {children}
            </SafeAreaView>

        </LinearGradient>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        

        // backgroundColor: colors.themeColor,

    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        // or 'stretch',
        // justifyContent: 'center',

    },
});

//make this component available to the app
export default WrapperComponentTwo;
