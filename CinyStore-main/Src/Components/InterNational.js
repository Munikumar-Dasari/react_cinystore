//import liraries
import React, { Component,useState,useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,FlatList,ActivityIndicator } from 'react-native';
import { moderateScale, moderateScaleVertical, textScale } from '../Styles/responsiveSize';
import colors from '../Styles/colors';
import { useSelector } from 'react-redux';
import { scale } from '../Styles/responsiveSize';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../Navigations/NavigationStrings';
import Icons from 'react-native-vector-icons/AntDesign'



// create a component
const InterNational = () => {
    const [Page2, setPage2] = useState('');
    const [Load2, setLoad2] = useState(false)
    const [feedList2,setfeedList2]=useState([])

    const navigation = useNavigation();
    useEffect(()=>{
        getFeedData2();
    
    },[])
    const getFeedData2=async()=>{
        setLoad2(true)
        const res = await fetch(`https://www.cinystore.com/TmdbMovies_API?cursor==${Page2}`);
        const json=await res?.json();
        setfeedList2([...feedList2,...json.results])
        if (json.next_url !== null) {
        const nextUrl = json.next_url;
        const Newpage = nextUrl.split('=')[1] + "";
        setPage2(Newpage);
        setLoad2(false);
        }
    
    }
    
    const handleLoadMore2 = async () => {
            
        console.log('Load More')
        if (!Load2) {
            
            try {
                getFeedData2();
    
            } catch (e) {
                console.log(e,'error');
            }
        }
    }

    return (
        <View style={styles.container}>
                <Text style={[styles.browsetxt,{color:'#ED6626',marginBottom:moderateScaleVertical(10)}]}>International Movies</Text>
            <View>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={feedList2}
                    ListEmptyComponent={<Text style={{ color: '#fff', fontFamily: 'Montserrat-SemiBold', fontWeight: '600' }}>No Data</Text>}
                    onEndReached={handleLoadMore2}
                    onEndReachedThreshold={16}
                    renderItem={({ item, index }) => {
                        const image=item?.poster_path.split('/');
                        return (
                            <View style={{ flex: 1, }}>
                                {
                                    feedList2 && (
                                        <>
                                            <TouchableOpacity activeOpacity={0.7} key={index} style={{ marginRight: moderateScale(10) }} onPress={() => navigation.navigate(NavigationStrings.INTERNATIONAL_MOVIELIST,{item,image})}>
                                                <Image source={{ uri:`https://image.tmdb.org/t/p/w500/`+ image[3]}} resizeMode='stretch' style={{ height: scale(150), width: scale(100) }} />
                                                <Text style={styles.Heading}>{item.movie_title.length >= 10 ? item.movie_title.substring(0, 10) + '...' : item.movie_title}</Text>
                                                <View style={{ flexDirection: 'row', marginTop: moderateScale(8), alignItems: 'center' }}>
                                                    <Icons name='like2' color='#ED6626' size={16} style={{}} />
                                                    <Text style={{ marginLeft: moderateScale(5), fontSize: textScale(16), fontWeight: '500', color: colors.whiteColorOpacity50 }}>{item.like_count ? item.like_count : '0'}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </>
                                    )
                                }

                            </View>
                        )
                    }
                    }

                />
                {
                        Load2 && <View style={{width:'100%',height:moderateScale(60),justifyContent:'center',alignItems:'center'}}>
                        <ActivityIndicator size={'large'} color={'#FF5E3A'}/>
                        <Text style={{color:'#fff',fontSize: textScale(14),fontWeight: '600',fontFamily: 'Montserrat-Medium',}}>Loading</Text>
                    </View>
                    }
            </View>


        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginVertical: moderateScaleVertical(16),

    },
    browsetxt: {
        color: colors.whiteColor,
        fontSize: textScale(18),
        fontWeight: '600',
        fontFamily: 'Montserrat-SemiBold',
        // padding: moderateScale(16)

    },
    Heading: {
        color: colors.whiteColor,
        fontSize: textScale(12),
        fontWeight: '500',
        fontFamily: 'Montserrat-Medium',
        marginTop: moderateScaleVertical(5)
    }
});

//make this component available to the app
export default InterNational;
