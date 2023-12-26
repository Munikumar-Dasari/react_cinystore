//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput,SafeAreaView } from 'react-native';
import WrapperComponentTwo from '../../Components/WrapperComponentTwo';
import { moderateScale, moderateScaleVertical, scale, textScale } from '../../Styles/responsiveSize';
import ImagePath from '../../Constants/ImagePath';
import Icon from 'react-native-vector-icons/AntDesign'
import colors from '../../Styles/colors';


// create a component
const Warriors = ({ navigation }) => {
    const [isFocused, setisFocused] = useState(false)
    const [placeholder, setplaceholder] = useState('Enter Password')
    return (
        <WrapperComponentTwo>
            <View style={{ marginTop: moderateScaleVertical(50) }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                        <Image source={ImagePath.back} resizeMode='contain' style={styles.backlogo} />
                    </TouchableOpacity>
                    <Image source={ImagePath.dotted}/>
                </View>
<View style={{justifyContent:'center',alignItems:'center'}}>
    <Image source={ImagePath.BigFrame}/>
</View>
                
                <Text style={{fontSize:scale(20),fontWeight:'500',fontFamily:'Montserrat',textAlign:'center',color:'#FF5E3A',marginVertical:moderateScaleVertical(10)}}>The Warriors – The Warriors</Text>
                <Text style={{fontSize:scale(14),fontWeight:'400',fontFamily:'Montserrat',textAlign:'center',color:'#FF5E3A',marginVertical:moderateScaleVertical(10)}}>200K Member</Text>
                <Text style={{fontSize:scale(15),fontWeight:'500',fontFamily:'Montserrat',textAlign:'center',color:'#fff',marginVertical:moderateScaleVertical(10)}}>A street gang known as The Warriors must fight their way from the Bronx to their home turf on Coney Island</Text>
                <View style={{ borderBottomColor: '#2B5759', borderWidth: 0.5, marginVertical: moderateScaleVertical(10), }} />
                <Text style={{fontSize:scale(17),fontWeight:'500',fontFamily:'Montserrat',textAlign:'center',color:'#A3ADAF',marginVertical:moderateScaleVertical(10)}}>Group admin : Anuj Sahukar </Text>
                <Text style={{fontSize:scale(17),fontWeight:'500',fontFamily:'Montserrat',textAlign:'center',color:'#A3ADAF',}}>Created on : 19/10/2023</Text>
            </View>
        </WrapperComponentTwo>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // padding:moderateScale(20)

    },
    backlogo: {
        height: moderateScale(35),
        width: moderateScale(35),
        marginVertical: moderateScaleVertical(10),
        alignSelf: 'flex-start'
    },
    txt: {
        // width: '100%',
        color: colors.whiteColor,
        fontSize: textScale(16),
        fontWeight: '500',
        // textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
    },
    imginput: {
        // width: '90%',
        marginTop: moderateScaleVertical(30),
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 8,


    }
});

//make this component available to the app
export default Warriors;
