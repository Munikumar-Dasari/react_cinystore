//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image,SafeAreaView } from 'react-native';
import WrapperComponentTwo from '../../Components/WrapperComponentTwo';
import { moderateScale,moderateScaleVertical,scale,textScale } from '../../Styles/responsiveSize';
import ImagePath from '../../Constants/ImagePath';
import Icon from 'react-native-vector-icons/AntDesign'
import colors from '../../Styles/colors';
import ButtonComponent from '../../Components/ButtonComponent';
import NavigationStrings from '../../Navigations/NavigationStrings';

// create a component
const GroupsPage = ({navigation}) => {
    return (
        <WrapperComponentTwo>
            <View style={{flex:1,marginTop:moderateScaleVertical(50)}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                    <Image source={ImagePath.back} resizeMode='contain' style={styles.backlogo} />
                </TouchableOpacity>
                    <Text style={styles.txt}>Groups</Text>
                    <Icon name='search1' size={25}/>
                </View>
            <View style={{ borderBottomColor: '#2B5759', borderWidth: 0.5, marginVertical: moderateScaleVertical(10) }} />
<View style={{marginVertical:moderateScale(10),backgroundColor:'#404040',padding:moderateScale(15),borderRadius:moderateScale(8)}}>
    <View style={{flexDirection:'row'}}>
        <Image source={ImagePath.Profile} style={{height:scale(50),width:scale(50)}}/>
        <View style={{marginLeft:moderateScale(20)}}>
        <Text style={[styles.txt,{color:'#ED6626'}]}>The Warriors - The Warriors</Text>
        <Text style={styles.txt}>20 Member</Text>
        </View>
    </View>
</View>
<View style={{marginVertical:moderateScale(10),backgroundColor:'#404040',padding:moderateScale(15),borderRadius:moderateScale(8)}}>
    <View style={{flexDirection:'row'}}>
        <Image source={ImagePath.Profile} style={{height:scale(50),width:scale(50)}}/>
        <View style={{marginLeft:moderateScale(20)}}>
        <Text style={[styles.txt,{color:'#ED6626'}]}>The Warriors - The Warriors</Text>
        <Text style={styles.txt}>20 Member</Text>
        </View>
    </View>
</View>
<View style={{marginVertical:moderateScale(10),backgroundColor:'#404040',padding:moderateScale(15),borderRadius:moderateScale(8)}}>
    <View style={{flexDirection:'row'}}>
        <Image source={ImagePath.Profile} style={{height:scale(50),width:scale(50)}}/>
        <View style={{marginLeft:moderateScale(20)}}>
        <Text style={[styles.txt,{color:'#ED6626'}]}>The Warriors - The Warriors</Text>
        <Text style={styles.txt}>20 Member</Text>
        </View>
    </View>
</View>
<View style={{marginVertical:moderateScale(10),backgroundColor:'#404040',padding:moderateScale(15),borderRadius:moderateScale(8)}}>
    <View style={{flexDirection:'row'}}>
        <Image source={ImagePath.Profile} style={{height:scale(50),width:scale(50)}}/>
        <View style={{marginLeft:moderateScale(20)}}>
        <Text style={[styles.txt,{color:'#ED6626'}]}>The Warriors - The Warriors</Text>
        <Text style={styles.txt}>20 Member</Text>
        </View>
    </View>
</View>
<View style={{flexDirection:'row', marginTop:moderateScaleVertical(80)}}>
    
    <View style={{flex:0.2}}/>
    <View style={{flex:0.2}}/>
    <View style={{flex:0.6}}>
    <ButtonComponent text='Create group' midrightimg={true} midrightimgpath={ImagePath.plus} style={{height:scale(45)}} onPress={()=>navigation.navigate(NavigationStrings.NEW_GROUP)}/>
    </View>
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
    txt:{
        // width: '100%',
        color: colors.whiteColor,
        fontSize: textScale(16),
        fontWeight: '500',
        // textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
    }
});

//make this component available to the app
export default GroupsPage;
