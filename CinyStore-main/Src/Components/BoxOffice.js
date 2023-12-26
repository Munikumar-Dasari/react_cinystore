//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,FlatList } from 'react-native';
import { moderateScale, moderateScaleVertical, textScale } from '../Styles/responsiveSize';
import colors from '../Styles/colors';
import ImagePath from '../Constants/ImagePath';

// create a component
const BoxOffice = () => {
    const Data = [
        {
            id: 1,
            Heading: 'RRR',
            SubHeading: '334 CR',
        },
        {
            id: 2,
            Heading: 'Pathaan',
            SubHeading: '1144 CR',
        },
        {
            id: 3,
            Heading: 'Varisu',
            SubHeading: '234 CR',
        },
        {
            id: 4,
            Heading: 'RRR',
            SubHeading: '334 CR',
        },
        {
            id: 5,
            Heading: 'Pathaan',
            SubHeading: '1144 CR',
        },
        {
            id: 6,
            Heading: 'Varisu',
            SubHeading: '234 CR',
        },
    
    ]
    const HanldePressBoxOfice=(index)=>{
        console.log(index)

    }
    return (
        <View style={styles.container}>
            <Text style={styles.browsetxt}>Box Office</Text>
            <View style={{ borderBottomColor: '#2B5759', borderWidth: 0.5, marginVertical: moderateScaleVertical(10) }} />
            <View>
            <FlatList
            // contentContainerStyle={{backgroundColor:'red'}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={Data}
                renderItem={({ item,index }) => {
                    return (
                        <TouchableOpacity activeOpacity={0.7} onPress={()=>HanldePressBoxOfice(index)}  style={{marginHorizontal:moderateScale(8)}}>
                            <View style={styles.boxOfice}>
                                <Text style={styles.Heading}>{item.Heading}</Text>
                                <Text style={styles.subHeading}>{item.SubHeading}</Text>
                            </View>
                        
                        </TouchableOpacity>
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
        color: colors.whiteColor,
        fontSize: textScale(15),
        fontWeight: '400',
        textAlign:'center',
        marginVertical:moderateScaleVertical(5),
        fontFamily:'Montserrat-Medium',
        

    },
    subHeading:{
        color: colors.whiteColor,
        fontSize: textScale(12),
        // fontWeight: '400',
        textAlign:'center',
        marginVertical:moderateScaleVertical(10),
        fontFamily:'Montserrat-Medium'

    },
    boxOfice:{
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:colors.whiteColor,
        height:moderateScale(80),
        width:moderateScale(100)
        // padding:moderateScale(16)   

     }
});

//make this component available to the app
export default BoxOffice;
