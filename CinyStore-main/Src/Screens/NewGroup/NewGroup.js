//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput,SafeAreaView } from 'react-native';
import WrapperComponentTwo from '../../Components/WrapperComponentTwo';
import { moderateScale, moderateScaleVertical, scale, textScale } from '../../Styles/responsiveSize';
import ImagePath from '../../Constants/ImagePath';
import Icon from 'react-native-vector-icons/AntDesign'
import colors from '../../Styles/colors';
import ButtonComponent from '../../Components/ButtonComponent';
import NavigationStrings from '../../Navigations/NavigationStrings';

// create a component
const NewGroup = ({ navigation }) => {
    
    return (
        <WrapperComponentTwo>
            <View style={{ marginTop: moderateScaleVertical(50) }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                        <Image source={ImagePath.back} resizeMode='contain' style={styles.backlogo} />
                    </TouchableOpacity>
                    <Text style={styles.txt}>Create a new group</Text>
                    <Icon name='search1' size={25} />
                </View>
                <View style={{ borderBottomColor: '#2B5759', borderWidth: 0.5, marginVertical: moderateScaleVertical(10), }} />

                <View style={[styles.imginput, { height: moderateScale(55), backgroundColor: '#263238', }]}>
                    <TextInput
                        placeholder={'Enter the name of group'}
                        placeholderTextColor={'#A3ADAF'}
                        color='#fff'
                    />
                    <Text style={{ position: 'absolute', paddingLeft: 10, paddingRight: 10, left: 5, top: -10, color: '#fff', fontSize: scale(12) }}>Group Name</Text>
                </View>
                <View style={[styles.imginput, { height: moderateScale(170), backgroundColor: '#263238', }]}>
                    <TextInput
                        placeholder={'Enter description text'}
                        placeholderTextColor={'#A3ADAF'}
                        multiline={true}
                        color='#fff'
                    />
                    <Text style={{ position: 'absolute', paddingLeft: 10, paddingRight: 10, left: 5, top: -10, color: '#fff', fontSize: scale(12) }}>Description
                    </Text>
                </View>
                <View style={{ backgroundColor: '#263238', justifyContent: 'center', alignItems: 'center',height:scale(70),width:scale(70),borderRadius:moderateScale(70/2),alignSelf:'center',marginVertical:moderateScaleVertical(20) }}>
                    <Image source={ImagePath.upload} />
                    <Image source={ImagePath.Camera} style={{position:'absolute',bottom:0,right:0}}/>
                </View>
                <Text style={{color:'#A3ADAF',fontSize:scale(16),fontWeight:'400',fontFamily:'Inter',textAlign:'center',}}>Upload group icon/photo</Text>
                <View style={{marginTop:moderateScale(50)}}>
                    <ButtonComponent text='CREATE GROUP' midrightimg={true} midrightimgpath={ImagePath.people} onPress={()=>navigation.navigate(NavigationStrings.WARRIORS)} />
                </View>
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
export default NewGroup;
