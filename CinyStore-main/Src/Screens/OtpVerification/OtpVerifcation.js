//import liraries
import React, { Component, useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import ImagePath from '../../Constants/ImagePath';
import { moderateScale, moderateScaleVertical, textScale } from '../../Styles/responsiveSize';
import colors from '../../Styles/colors';
import ButtonComponent from '../../Components/ButtonComponent';
import NavigationStrings from '../../Navigations/NavigationStrings';

// create a component
const OtpVerification = ({ navigation }) => {
    const [Count, setCount] = useState(0)
    const [Otp1, setOtp1] = useState('');
    const [Otp2, setOtp2] = useState('');
    const [Otp3, setOtp3] = useState('');
    const [Otp4, setOtp4] = useState('');
    const et1 = useRef();
    const et2 = useRef();
    const et3 = useRef();
    const et4 = useRef();
    useEffect(() => {
        const Interval = setInterval(() => {
            if (Count === 0) {
                clearInterval(Interval);
            } else {
                setCount(Count - 1)
            }
        }, 1000);
        return () => {
            clearInterval(Interval);
        }
    }, [Count])
    const OTPValidate = () => {
        let otp = '1234'
        let enteredOtp = Otp1 + Otp2 + Otp3 + Otp4;
        if (enteredOtp === otp) {
            Alert.alert('OTP matched')
        } else {
            Alert.alert('OTP Wrong')
        }
    }
    return (
        <WrapperContainer>
            <View style={styles.container}>
                <View style={{ flex: 0.1, }} />
                <View style={{ justifyContent: 'center', alignItems: 'flex-start', padding: moderateScale(15), }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                        <Image source={ImagePath.back} resizeMode='contain' style={styles.backlogo} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.8, justifyContent: 'space-around', marginTop: moderateScaleVertical(60) }}>
                    <View>
                        <Text style={styles.otpverficationtext}>OTP Verification</Text>
                        <Text style={styles.verficationtext}>Enter 4 Digit Verification Code Sent On Your {'\n'} Registered Mobile Number 8826471808</Text>
                    </View>
                    <View style={styles.otpView}>
                        <TextInput ref={et1} style={[styles.inputView, { borderColor: Otp1.length >= 1 ? 'red' : '#000' }]} keyboardType='number-pad' maxLength={1}
                            value={Otp1}
                            onChangeText={(txt) => {
                                setOtp1(txt);
                                if (txt.length >= 1) {
                                    et2.current.focus();
                                }
                            }}
                        />
                        <TextInput ref={et2} style={[styles.inputView, { borderColor: Otp2.length >= 1 ? 'red' : '#000' }]} keyboardType='number-pad' maxLength={1}
                            value={Otp2}
                            onChangeText={(txt) => {
                                setOtp2(txt)
                                if (txt.length >= 1) {
                                    et3.current.focus();
                                } else if (txt.length < 1) {
                                    et1.current.focus();
                                }
                            }}
                        />
                        <TextInput ref={et3} style={[styles.inputView, { borderColor: Otp3.length >= 1 ? 'red' : '#000' }]} keyboardType='number-pad' maxLength={1}
                            value={Otp3}
                            onChangeText={(txt) => {
                                setOtp3(txt);
                                if (txt.length >= 1) {
                                    et4.current.focus();
                                } else if (txt.length < 1) {
                                    et2.current.focus();
                                }
                            }}
                        />
                        <TextInput ref={et4} style={[styles.inputView, { borderColor: Otp4.length >= 1 ? 'red' : '#000' }]} keyboardType='number-pad' maxLength={1}
                            value={Otp4}
                            onChangeText={(txt) => {
                                setOtp4(txt);
                                if (txt.length >= 1) {
                                    et4.current.focus();
                                } else if (txt.length < 1) {
                                    et3.current.focus();
                                }
                            }}
                        />
                    </View>
                    <View>
                        <ButtonComponent
                            text='VERIFY'
                            onPress={() => {
                                navigation.navigate(NavigationStrings.DRAWER_ROUTES)
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.resendOtptxt}>Didn’t received OTP? <Text onPress={() => {
                            setCount(10)
                        }} style={[styles.resendOtptxt, { color: Count === 0 ? '#fff' : 'gray' }]}> Resend</Text></Text>
                        {Count !== 0 &&
                            <Text style={styles.resendOtptxt}>{Count + 'seconds'}</Text>
                        }
                    </View>
                </View>
                <View style={{ flex: 0.3 }} />
            </View>



        </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(15),
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    otpverficationtext: {
        fontSize: textScale(32),
        fontWeight: '500',
        color: colors.whiteColor,
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium'
    },
    verficationtext: {
        fontSize: textScale(16),
        fontWeight: '500',
        color: colors.whiteColor,
        textAlign: 'center',
        marginTop: moderateScaleVertical(15),
        fontFamily: 'Montserrat-Medium'

    },
    inputView: {
        height: moderateScale(50),
        width: moderateScale(50),
        borderRadius: moderateScale(5),
        marginLeft: moderateScale(10),
        color: 'black',
        textAlign: 'center',
        fontSize: textScale(18),
        fontWeight: '700',
        backgroundColor: colors.whiteColor
    },
    otpView: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    resendOtptxt: {
        color: colors.whiteColor,
        textAlign: 'center',
        fontSize: textScale(16),
        fontWeight: '500',
        fontFamily: 'Montserrat-Medium'

    },
    countText: {
        color: '#000',
        fontSize: textScale(16),
        fontWeight: '800',

    },
    backlogo: {
        height: moderateScale(40),
        width: moderateScale(50),
        marginVertical: moderateScaleVertical(10)
    }
});

//make this component available to the app
export default OtpVerification;
