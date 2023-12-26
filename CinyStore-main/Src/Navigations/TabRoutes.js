import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import colors from '../Styles/colors';
import { Image, StyleSheet } from 'react-native';
import * as Screens from '../Screens'
import ImagePath from '../Constants/ImagePath';
import navigationStrings from './NavigationStrings';
import { height, moderateScale, textScale } from '../Styles/responsiveSize';
import { useIsFocused } from '@react-navigation/native';
import DrawerRoutes from './DrawerRoutes';
import NavigationStrings from './NavigationStrings';
import MovieList from '../Components/MovieList';
const BottomTab = createBottomTabNavigator();

const TabRoutes = (props) => {
    const isFocused=useIsFocused();
    return (
        <BottomTab.Navigator
            tabBar={(tabsProps) => (
                <>
                    <BottomTabBar {...tabsProps} />
                </>
            )}
            // initialRouteName={navigationStrings.HOME}
            
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.redColor,
                tabBarInactiveTintColor: colors.grayColor,
                tabBarStyle:{padding:moderateScale(10),height:moderateScale(70)},
                tabBarLabelStyle:{fontSize:textScale(15),fontWeight:'500',},
                
                
                // tabBarStyle:{backgroundColor:colors.whiteColor},
                // tabBarShowLabel:true,
                // tabBarShowLabel: false,
                // tabBarLabelStyle:{color:isFocused?colors.redColor:colors.blackColor}
            }}

        >
            <BottomTab.Screen
                name={navigationStrings.HOME}
                component={Screens.Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            // focused ?
                            //     <Image source={imagePath.firstActiveIcon} />
                            //     : <Image source={imagePath.firstInActiveIcon} />
                            <Image style={{tintColor:focused?colors.redColor:colors.blackColor}} 
                            source={ImagePath.tabHome} resizeMode='contain' />
                            
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.FEED}
                component={Screens.Feed}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{tintColor:focused?colors.redColor:colors.blackColor}} 
                            source={ImagePath.tabFeed} resizeMode='contain' />
                           
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.BROWSE}
                component={Screens.Browse}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{tintColor:focused?colors.redColor:colors.blackColor,height:moderateScale(25)}}
                             source={ImagePath.tabBrowse} resizeMode='contain' />
                            
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.TRAILER}
                component={Screens.Trailer}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{tintColor:focused?colors.redColor:colors.blackColor,height:moderateScale(25)}} 
                            source={ImagePath.tabTrailer} resizeMode='contain' />
                          
                        );
                    },
                }}
            />
            <BottomTab.Screen 
                name={navigationStrings.REVIEWS}
                component={Screens.Reviews}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{tintColor:focused?colors.redColor:colors.blackColor,height:moderateScale(25)}}
                             source={ImagePath.tabReview} resizeMode='contain' />
                          
                        );
                    },
                }}
            />

        </BottomTab.Navigator>
    );
};

const styles = StyleSheet.create({
    customBottomtabsStyle: {
        height: moderateScale(70),
        padding:moderateScale(20)
        // backgroundColor:colors.whiteColor
    },

});

export default TabRoutes