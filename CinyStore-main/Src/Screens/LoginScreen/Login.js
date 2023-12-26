//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import ImagePath from '../../Constants/ImagePath';
import { moderateScale, moderateScaleVertical, textScale } from '../../Styles/responsiveSize';
import TextInputC from '../../Components/TextInputC';
import ButtonComponent from '../../Components/ButtonComponent';
import colors from '../../Styles/colors';
import NavigationStrings from '../../Navigations/NavigationStrings';

// create a component
const Login = ({navigation}) => {
    return (
        <WrapperContainer>
            <View style={styles.container}>
                <View style={{flex:.6,justifyContent:'center'}}>
                    <Image source={ImagePath.logo} style={styles.logoImagstyle} />
                    <Text style={styles.welcomeTextstyle}>Welcome</Text>
                </View>
                <View style={{flex:.6,justifyContent:'flex-start'}}>
                    <TextInputC text={'Full Name'}
                        imgsrc={ImagePath.profileInput}
                        placeholder={'Enter Your Name'}
                        keyBoardType='ascii-capable'
                        imgLeft={true}
                    />
                    <TextInputC text={'Phone Number'}
                        imgsrc={ImagePath.telephoneInput}
                        placeholder={'Enter Your Phone Number'}
                        keyBoardType='number-pad'
                        imgLeft={true}

                    />
                    <View style={{marginTop:moderateScaleVertical(25)}}>
                    <ButtonComponent
                        text='LOGIN'
                        onPress={()=>{
                            navigation.navigate(NavigationStrings.OTP_VERIFICATION)

                        }}
                    />
                    </View>
                    
                </View>
                    
            </View>
        </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(15),
        // justifyContent:'space-around'
    },
    logoImagstyle: {
        alignSelf: 'center',
        resizeMode:'contain',
        height:moderateScale(120),
        width:moderateScale(250),
        marginBottom:moderateScaleVertical(70),

    },
    welcomeTextstyle: {
        fontSize: textScale(32),
        textAlign: 'center',
        fontWeight: '500',
        color: colors.whiteColor,
        marginTop:moderateScaleVertical(20),
        fontFamily:'Montserrat-Medium'
    }
});

//make this component available to the app
export default Login;
