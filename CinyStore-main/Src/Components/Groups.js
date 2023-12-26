//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,FlatList } from 'react-native';
import { moderateScale, moderateScaleVertical, textScale } from '../Styles/responsiveSize';
import colors from '../Styles/colors';
import ImagePath from '../Constants/ImagePath';
import NavigationStrings from '../Navigations/NavigationStrings';
import { useNavigation } from '@react-navigation/native';

// create a component
const Groups = () => {
    const navigation=useNavigation();
    const Data = [
        {
            id: 1,
            Aimg: ImagePath.El1,
            Heading: 'Group Name',
            SubHeading: '20 Members',
            grpImg: ImagePath.group,
        },
        {
            id: 2,
            Aimg: ImagePath.El2,
            Heading: 'Group Name',
            SubHeading: '20 Members',
            grpImg: ImagePath.group,
        },
        {
            id: 3,
            Aimg: ImagePath.El3,
            Heading: 'Group Name',
            SubHeading: '20 Members',
            grpImg: ImagePath.group,
        },
        {
            id: 4,
            Aimg: ImagePath.El4,
            Heading: 'Group Name',
            SubHeading: '20 Members',
            grpImg: ImagePath.group,
        },
        {
            id: 5,
            Aimg: ImagePath.El1,
            Heading: 'Group Name',
            SubHeading: '20 Members',
            grpImg: ImagePath.group,
        },
        {
            id: 6,
            Aimg: ImagePath.El2,
            Heading: 'Group Name',
            SubHeading: '20 Members',
            grpImg: ImagePath.group,
        },
        {
            id: 7,
            Aimg: ImagePath.El3,
            Heading: 'Group Name',
            SubHeading: '20 Members',
            grpImg: ImagePath.group,
        },
        {
            id: 8,
            Aimg: ImagePath.El4,
            Heading: 'Group Name',
            SubHeading: '20 Members',
            grpImg: ImagePath.group,
        },
    ]
    return (
        <View style={styles.container}>
            <Text style={styles.browsetxt}>Groups</Text>
            <View style={{ borderBottomColor: '#2B5759', borderWidth: 0.5, marginVertical: moderateScaleVertical(10) }} />
            <View>
            <FlatList
            // contentContainerStyle={{backgroundColor:'red'}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={Data}
                renderItem={({ item }) => {
                    return (
                        <View  style={{marginHorizontal:moderateScale(8)}}>
                            <View>
                                <Image source={item.Aimg} resizeMode='cover' style={{ borderRadius: moderateScale(10) }} />
                                <Text style={styles.Heading}>{item.Heading}</Text>
                                <Text style={styles.subHeading}>{item.SubHeading}</Text>
                                <Image source={item.grpImg} resizeMode='cover' style={{ borderRadius: moderateScale(10),alignSelf:'center',marginVertical:moderateScaleVertical(10) }} />
                                <TouchableOpacity onPress={()=>navigation.navigate(NavigationStrings.GROUP_PAGE)} style={{backgroundColor:'#FF5E3A',borderRadius:moderateScale(50),padding:moderateScale(5),justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{color:colors.whiteColor,fontSize:textScale(14),fontWeight:'700',fontFamily:'Montserrat-Bold'}}>Join</Text>
                                </TouchableOpacity>
                            </View>
                        
                        </View>
                    )
                }}
            />
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginVertical:moderateScaleVertical(20)
    },
    browsetxt: {
        color: colors.whiteColor,
        fontSize: textScale(18),
        fontWeight: '600',
        fontFamily:'Montserrat-SemiBold'

    },
    Heading: {
        color: '#FF5E3A',
        fontSize: textScale(15),
        fontWeight: '400',
        textAlign:'center',
        marginVertical:moderateScaleVertical(5),
        fontFamily:'Montserrat-Medium'

    },
    subHeading:{
        color: colors.whiteColor,
        fontSize: textScale(12),
        // fontWeight: '400',
        textAlign:'center',
        fontFamily:'Montserrat-Medium'

    }
});

//make this component available to the app
export default Groups;
