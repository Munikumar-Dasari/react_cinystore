//import liraries
import React,{useEffect} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import { moderateScale, moderateScaleVertical } from '../../Styles/responsiveSize';
import ImagePath from '../../Constants/ImagePath';
import NavigationStrings from '../../Navigations/NavigationStrings';

// create a component
const IntialScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate(NavigationStrings.LOGIN)
        },3000)
    },[])
    return (
        <WrapperContainer>
            <View style={styles.container}>
                <Image source={ImagePath.logo} style={styles.logoStyle} />
            </View>
        </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(20),
        justifyContent: 'center',
        alignItems: 'center',

    },
    logoStyle: {
        height:moderateScale(150),
        width:moderateScale(300)
        // height: '100%',
        // width: '100%'
    }

});

//make this component available to the app
export default IntialScreen;
