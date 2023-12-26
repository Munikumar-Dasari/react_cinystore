//import liraries
import React, { Component,useState,useEffect } from 'react';
import ImageLoad from 'react-native-image-placeholder';
import { View, Text, StyleSheet, FlatList,ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import WrapperComponentTwo from '../../Components/WrapperComponentTwo';
import Header from '../../Components/Header';
import colors from '../../Styles/colors';
import { textScale, moderateScale, moderateScaleVertical, scale } from '../../Styles/responsiveSize';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import NavigationStrings from '../../Navigations/NavigationStrings';
import Icons from 'react-native-vector-icons/AntDesign'
import InernationalMovielist from '../../Components/InernationalMovielist';

// create a component
const Browse = () => {
    const [Page, setPage] = useState('');
    const [Page2, setPage2] = useState('');
    const [Load, setLoad] = useState(false)
    const [Load2, setLoad2] = useState(false)
    const [feedList,setfeedList]=useState([])
    const [feedList2,setfeedList2]=useState([])
    const navigation = useNavigation();

    // const DATA = useSelector((state) => state.Broswe.data);

useEffect(()=>{
    getFeedData();
    getFeedData2();

},[])

const getFeedData2=async()=>{
    setLoad2(true)
    const res = await fetch(`https://www.cinystore.com/TmdbMovies_API?cursor==${Page2}`);
    const json=await res?.json();
    // console.log(json,'json')
    setfeedList2([...feedList2,...json.results])
    if(json.next_url !==null){
        const nextUrl = json.next_url;
        const Newpage = nextUrl.split('=')[1] + "";
        // console.log(Newpage)
        setPage2(Newpage);
        setLoad2(false);
    }
    

}
const getFeedData=async()=>{
    setLoad(true)
    const res = await fetch(`https://www.cinystore.com/CreateLabelGet_API?cursor=${Page}`);
    const json=await res?.json();
    // console.log(json,'json')
    setfeedList([...feedList,...json.results])
    if(json.next_url !==null){
        const nextUrl = json.next_url;
        const Newpage = nextUrl.split('=')[1] + "";
        // console.log(Newpage)
        setPage(Newpage);
        setLoad(false);
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
const handleLoadMore = async () => {
        
    console.log('Load More')
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
            <Header onPressleft={() => navigation.openDrawer()} placeholder={'Search Movie'} />
            <WrapperComponentTwo>
            {/* <Text style={styles.feedPage}>Movies</Text> */}
                <View style={{ marginTop: moderateScaleVertical(10) }}>
                <Text style={[styles.browsetxt,{color:'#ED6626',marginVertical:moderateScaleVertical(5)}]}>International Movies</Text>
                    <View>
                    <FlatList
                    showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={feedList2}
                        ListEmptyComponent={<Text style={{ color: '#fff', fontFamily: 'Montserrat-SemiBold', fontWeight: '600' }}>Data Not Found...</Text>}
                        onEndReached={handleLoadMore2}
                        onEndReachedThreshold={16}
                        renderItem={({ item, index }) => {
                            const image = item?.poster_path.split('/');
                            return (
                                <TouchableOpacity activeOpacity={0.7}
                                    onPress={() => navigation.navigate(NavigationStrings.INTERNATIONAL_MOVIELIST,{item,image})}
                                    style={{ marginRight:moderateScale(10)
                                    }}>
                                                        <Image source={{ uri: `https://image.tmdb.org/t/p/w500/` + image[3] }} resizeMode='cover' style={{ height: scale(150), width: scale(100) }} />
                                                        <Text style={styles.Heading}>{item.movie_title.length >= 10 ? item.movie_title.substring(0, 10) + '...' : item.movie_title}</Text>
                                                        <View style={{ flexDirection: 'row', marginTop: moderateScale(8), alignItems: 'center' }}>
                                                            <Icons name='like2' color='#ED6626' size={15} style={{}} />
                                                            <Text style={{ marginLeft: moderateScale(5), fontSize: textScale(10), fontWeight: '500', color: colors.whiteColor }}>{item.like_count ? item.like_count : '0'}</Text>
                                                        </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                    {
                        Load2 && <View style={{width:'100%',height:moderateScale(60),justifyContent:'center',alignItems:'center'}}>
                        <ActivityIndicator size={'small'} color={'#FF5E3A'}/>
                        <Text style={{color:'#fff',fontSize: textScale(14),fontWeight: '600',fontFamily: 'Montserrat-Medium',}}>Loading</Text>
                    </View>
                    }
                    </View>
                </View>
                <View style={{ marginTop: moderateScaleVertical(20) }}>
                <Text style={[styles.browsetxt,{color:'#ED6626',marginVertical:moderateScaleVertical(5)}]}>Indian Movies</Text>
                    <View>
                    <FlatList
                        numColumns={3}
                        data={feedList}
                        onEndReached={handleLoadMore}
                        onEndReachedThreshold={16}
                        renderItem={({ item, index }) => {
                        
                            return (
                                <TouchableOpacity activeOpacity={0.7}
                                    onPress={() => navigation.navigate(NavigationStrings.MOVIES_LIST, { item })}
                                    style={{
                                        width: '33%', alignItems: 'center',
                                        marginBottom: feedList.length - 1 === index ? moderateScaleVertical(400) : 0
                                    }}>
                                    <View style={{ width: '90%' }}>
                                        <ImageLoad source={{ uri: item.Poster }} resizeMode='cover' style={{
                                            borderRadius: moderateScale(10), height: scale(120), width: '100%'
                                        }} />
                                        <Text style={[styles.Heading, { marginVertical: moderateScaleVertical(5) }]}>{item.Movie_name.length > 10 ? item.Movie_name.substring(0, 5) + "..." : item.Movie_name}</Text>
                                        <View style={{ flexDirection: 'row', marginVertical: moderateScaleVertical(4), alignItems: 'center', justifyContent: 'flex-start' }}>
                                            <Icons name='like2' size={15} color={'#ED6626'} style={{ marginLeft: moderateScale(8) }} />
                                            <Text style={{ marginLeft: moderateScale(5), fontSize: textScale(10), fontWeight: '500', color: colors.whiteColor }}>{item.like_count ? item.like_count : 0}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                        {
                        Load && <View style={{width:'100%',height:moderateScale(60),justifyContent:'center',alignItems:'center'}}>
                        <ActivityIndicator size={'small'} color={'#FF5E3A'}/>
                        <Text style={{color:'#fff',fontSize: textScale(14),fontWeight: '600',fontFamily: 'Montserrat-Medium',}}>Loading</Text>
                    </View>
                    }
                    </View>
                </View>
            </WrapperComponentTwo>
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
    Heading: {
        color: colors.whiteColor,
        fontSize: textScale(15),
        fontWeight: '500',
        fontFamily: 'Montserrat-Medium'
    },
    browsetxt: {
        color: colors.whiteColor,
        fontSize: textScale(18),
        fontWeight: '600',
        fontFamily: 'Montserrat-SemiBold',
        // padding: moderateScale(16)

    },
    feedPage: {
        fontSize: textScale(18),
        fontWeight: '600',
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        color: colors.whiteColor,
        marginTop: moderateScaleVertical(10)
    },
});

//make this component available to the app
export default Browse;
