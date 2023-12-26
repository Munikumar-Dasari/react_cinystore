//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { moderateScale, moderateScaleVertical, textScale } from '../Styles/responsiveSize';
import colors from '../Styles/colors';
import { scale } from '../Styles/responsiveSize';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../Navigations/NavigationStrings';
import Icons from 'react-native-vector-icons/AntDesign'



// create a component
const BrowseComp = () => {
    const [Page, setPage] = useState('');
    const [Load, setLoad] = useState(false);
    const [feedList, setfeedList] = useState([])



    const navigation = useNavigation();
    // const DATA = useSelector((state) => state.Broswe.data);
    useEffect(() => {
        getFeedData();
        // getFeedData2();

    }, [])
    const getFeedData = async () => {
        setLoad(true)
        const res = await fetch(`https://www.cinystore.com/CreateLabelGet_API?cursor=${Page}`);
        const json = await res?.json();
        setfeedList([...feedList, ...json.results])
        if (json.next_url !== null) {
            const nextUrl = json.next_url;
            const Newpage = nextUrl.split('=')[1] + "";
            setPage(Newpage);
            setLoad(false);
        }
    }

    const handleLoadMore = async () => {

        console.log('Load More')
        if (!Load) {

            try {
                getFeedData();

            } catch (e) {
                console.log(e, 'error');
            }
        }
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate(NavigationStrings.BROWSE)}><Text style={[styles.browsetxt]}>Movies</Text></TouchableOpacity>
            <View style={{ borderBottomColor: '#2B5759', borderWidth: 0.5, marginVertical: moderateScaleVertical(10) }} />
            <TouchableOpacity><Text style={[styles.browsetxt, { color: '#ED6626', marginVertical: moderateScaleVertical(5) }]}>Indian Movies</Text></TouchableOpacity>
            <View>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={feedList}
                    onEndReached={handleLoadMore}
                    onEndReachedThreshold={16}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ flex: 1, }}>
                                {
                                    feedList && (
                                        <>
                                            <TouchableOpacity activeOpacity={0.7} key={index} style={{ marginRight: moderateScale(10) }} onPress={() => navigation.navigate(NavigationStrings.MOVIES_LIST, { item })}>
                                                <Image source={{ uri: item?.Poster }} resizeMode='stretch' style={{ height: scale(150), width: scale(100) }} />
                                                <Text style={styles.Heading}>{item.Movie_name.length >= 10 ? item.Movie_name.substring(0, 10) + '...' : item.Movie_name}</Text>
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
                    Load && <View style={{ width: '100%', height: moderateScale(60), justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size={'large'} color={'#FF5E3A'} />
                        <Text style={{ color: '#fff', fontSize: textScale(14), fontWeight: '600', fontFamily: 'Montserrat-Medium', }}>Loading</Text>
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
export default BrowseComp;
