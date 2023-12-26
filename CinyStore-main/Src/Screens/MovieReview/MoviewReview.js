//import liraries
import React, { Component, useState, useEffect, useCallback } from 'react';
import ImagePath from '../../Constants/ImagePath';
import colors from '../../Styles/colors';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Pressable } from 'react-native';
import WrapperComponentTwo from '../../Components/WrapperComponentTwo';
import { moderateScale, moderateScaleVertical, scale, textScale } from '../../Styles/responsiveSize';
import moment from 'moment';
import Icons from 'react-native-vector-icons/AntDesign'
import Iconss from 'react-native-vector-icons/MaterialIcons'
import axios from 'axios';
// create a component
const MoviewReview = ({ navigation, route }) => {
    const [AllReview, setAllreview] = useState('')
    const [editIndex, setEditIndex] = useState(null);


    const data = route.params.data;

    const timeago = moment(data.timestamp_field).fromNow();
    

    useEffect(() => {
        axios.get(`https://cinystore.com/Reviews_API/${data?.Movie_name}`).
            then((data) =>{
                setAllreview(data.data.results)}).
            catch((e) => console.log(e));
    }, [])

    return (
        <WrapperComponentTwo>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: moderateScaleVertical(50) }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                        <Image source={ImagePath.back} resizeMode='contain' style={styles.backlogo} />
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: textScale(20), fontWeight: '600', color: colors.whiteColor, }}>{data.Movie_name}</Text>
                    </View>
                    <View />
                </View>
                <ScrollView>
                    
                    {
                        AllReview && AllReview.map((Data, index) => {
                            return (
                                <View key={index}>
                                    <View style={{ marginVertical: moderateScaleVertical(10) }}>
                                        <View style={{ borderBottomColor: '#2B5759', borderWidth: 0.5, marginVertical: moderateScaleVertical(10) }} />
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: moderateScaleVertical(5) }}>
                                                <Image source={ImagePath.Dp} resizeMode='contain' />
                                                <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: textScale(13), fontWeight: '600', color: colors.whiteColor, marginLeft: moderateScale(8) }}>{Data.author}</Text>
                                            </View>
                                            <View>
                                                <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: textScale(10), fontWeight: '500', color: 'rgba(245, 245, 245, 0.74);' }}>{timeago}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View>
                                        {
                                            <>
                                            {
                                            editIndex===index ? <Text style={{  color: 'rgba(245, 245, 245, 0.74)',fontSize:scale(16),fontWeight:'500',fontFamily:'Montserrat-Medium'  }}>{Data.comment}</Text>
                                            : <Text style={{ color: 'rgba(245, 245, 245, 0.74)',fontSize:scale(16),fontWeight:'500',fontFamily:'Montserrat-Medium' }}>{Data.comment.substring(0, 200)}</Text>
                                            }
                                            
                                                {
                                                    Data.comment.length >= 100 && editIndex!==index &&
                                                    <TouchableOpacity onPress={()=>setEditIndex(index)}>
                                                        <Text style={{ color: '#FF5E3A' }}>...View More</Text>
                                                    </TouchableOpacity>
                                                }
                                                
                                            </>
                                        }
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: moderateScaleVertical(10) }}>
                                        <View style={{ flexDirection: 'row', marginTop: moderateScale(8), alignItems: 'center' }}>
                                            <Icons name='like2' color='#FF5E3A' size={16} style={{ marginLeft: moderateScale(8), }} />

                                            <Text style={{ marginLeft: moderateScale(5), fontSize: textScale(13), fontWeight: '500', color: colors.whiteColor }}>{Data.like ? Data.like : 0} Likes</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: moderateScale(8), marginHorizontal: moderateScale(10), alignItems: 'center' }}>
                                            <Icons name='staro' size={16} color={'#ED6626'} style={{ marginLeft: moderateScale(8) }} />

                                            <Text style={{ marginLeft: moderateScale(5), fontSize: textScale(13), fontWeight: '500', color: colors.whiteColor }}>{Data.stars}</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', marginTop: moderateScale(8), alignItems: 'center' }}>
                                            <Iconss name='comment' size={16} color='#FF5E3A' style={{ marginLeft: moderateScale(8), }} />

                                            <Text style={{ marginLeft: moderateScale(5), fontSize: textScale(13), fontWeight: '500', color: colors.whiteColor }}>{Data.commentlist ? Data.commentlist : 0}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })

                    }
                </ScrollView>

            </View>
        </WrapperComponentTwo>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backlogo: {
        height: moderateScale(35),
        width: moderateScale(35),
        marginVertical: moderateScaleVertical(10),
        alignSelf: 'flex-start'
    },
});

//make this component available to the app
export default MoviewReview;
