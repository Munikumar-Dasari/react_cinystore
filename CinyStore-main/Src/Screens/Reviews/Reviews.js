//import liraries
import React, { Component,useState,useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView,ActivityIndicator, FlatList, Image, StatusBar, TouchableOpacity } from 'react-native';
import WrapperComponentTwo from '../../Components/WrapperComponentTwo';
import Header from '../../Components/Header';
import { moderateScale, moderateScaleVertical, scale, textScale } from '../../Styles/responsiveSize';
import colors from '../../Styles/colors';
import ImagePath from '../../Constants/ImagePath';
import ReviewsComp from '../../Components/ReviewsComp';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import NavigationStrings from '../../Navigations/NavigationStrings';
import Icons from 'react-native-vector-icons/AntDesign'
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

// create a component
const Reviews = ({ navigation }) => {
    const [Page, setPage] = useState('');
    const [Load, setLoad] = useState(false)
    const [feedList,setfeedList]=useState([])
    let flatListRef;
    const isFocused = useIsFocused();
    
    useEffect(()=>{
        getFeedData();
    flatListRef.scrollToOffset({animation: true,offset:0});

    },[ Page,isFocused])
    
    const getFeedData=async()=>{
        
        setLoad(true)
        const res = await fetch(`https://cinystore.com/AllReview_API?cursor=${Page}`);
        const json=await res?.json();
            const Json_Result=json?.results?.filter( (ele, ind) => ind === json?.results?.findIndex( elem => elem.Movie_name === ele.Movie_name))
            setfeedList([...feedList,...Json_Result])
            if(json.next_url !==null){
                const nextUrl = json.next_url;
                const Newpage = nextUrl.split('=')[1] + "";
                setPage(Newpage);
                setLoad(false);
            }
        
    }
    const handleLoadMore = async () => {
        
        if (!Load) {
            
            try {
                getFeedData();

            } catch (e) {
                console.log(e,'error');
            }
        }
    }




    return (
        <>
            <Header onPressleft={() => navigation.openDrawer()} placeholder={'Search Review'} />
            <LinearGradient colors={['#040607', '#152627', '#040607',]} style={{}}>
                <View>
                    <FlatList
                        data={feedList}
                        onEndReached={handleLoadMore}
                        onEndReachedThreshold={16}
                        ListEmptyComponent={<Text style={{ color: '#fff', fontFamily: 'Montserrat-SemiBold', fontWeight: '600' }}>No Data</Text>}
                        ref={(ref)=>{
                            flatListRef=ref
                        }}
                        renderItem={({ item, index }) => {
                            return (
                                <View key={index}>
                                    <View style={{ borderBottomColor: '#2B5759', borderWidth: 0.5, marginVertical: moderateScaleVertical(10) }} />
                                    <View style={{ marginBottom: moderateScaleVertical(5) }}>
                                        <Text style={styles.Heading}>{item.Movie_name}</Text>
                                        <Text style={styles.subHeading}>{item.comment.length > 50 ? item.comment.substring(0, 100) + ('...') : item.comment}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: moderateScaleVertical(15), }}>
                                            <View style={{ flexDirection: 'row', marginTop: moderateScale(8), alignItems: 'center', flex: 0.5, justifyContent: 'flex-end', marginRight: scale(10) }}>
                                                {/* <Image source={ImagePath.Like} resizeMode='contain' style={{ width: '20%' }} /> */}
                                        <Icons name='like2' size={16} color={'#ED6626'} style={{ marginLeft: moderateScale(8) }} />
                                                
                                                <Text style={{ fontSize: textScale(13), fontWeight: '500', color: colors.whiteColor,marginLeft: moderateScale(5)  }}>{item.LikeTxt ? item.LikeTxt : 0}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', marginTop: moderateScale(8), alignItems: 'center', flex: 0.5, justifyContent: 'flex-start', marginLeft: scale(10) }}>
                                                {/* <Image source={ImagePath.star} resizeMode='contain' style={{ width: '20%' }} /> */}
                                        <Icons name='staro' size={16} color={'#ED6626'} style={{ marginLeft: moderateScale(8) }} />
                                                
                                                <Text style={{ fontSize: textScale(13), fontWeight: '500', color: colors.whiteColor,marginLeft: moderateScale(5)  }}>{item.stars}</Text>
                                            </View>
                                        </View>
                                        <View style={{ alignSelf: 'center', width: '40%', marginTop: moderateScaleVertical(10) }}>
                                            <TouchableOpacity
                                                onPress={() => navigation.navigate(NavigationStrings.MOVIE_REVIEW,{data:item})}
                                                style={{ backgroundColor: '#FF5E3A', borderRadius: moderateScale(15), padding: moderateScale(10), justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: textScale(12), fontWeight: '500', color: colors.whiteColor }}>View all reviews</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                    />
                {
                        Load && <View style={{width:'100%',height:moderateScale(60),justifyContent:'center',alignItems:'center'}}>
                        <ActivityIndicator size={'large'} color={'#FF5E3A'}/>
                        <Text style={{color:'#fff',fontSize: textScale(14),fontWeight: '600',fontFamily: 'Montserrat-Medium',}}>Loading</Text>
                    </View>
                    }
                </View>
            </LinearGradient>
        </>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    feedPage: {
        fontSize: textScale(18),
        fontWeight: '600',
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        color: colors.whiteColor,
        marginTop: moderateScaleVertical(10)
    },
    Heading: {
        color: '#FF5E3A',
        fontSize: textScale(22),
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: moderateScaleVertical(10),
        fontFamily: 'Montserrat-Medium'

    },
    subHeading: {
        color: colors.whiteColor,
        fontSize: textScale(16),
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium'


    }
});

//make this component available to the app
export default Reviews;
