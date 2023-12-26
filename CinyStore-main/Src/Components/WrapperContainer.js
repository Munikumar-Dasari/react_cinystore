//import liraries
import React, { Children, Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, StatusBar } from 'react-native';
// import colors from '../styles/colors';
import ImagePath from '../Constants/ImagePath';

// create a component
const WrapperContainer = ({
    style = {},
    children,
}
) => {
    return (
        <View style={{
            ...styles.container,
            ...style,
        }}>

            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar translucent backgroundColor='transparent' />
                <ImageBackground source={ImagePath.Splash} style={styles.backgroundImage} >
                    {children}
                </ImageBackground>
            </SafeAreaView>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

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
export default WrapperContainer;
