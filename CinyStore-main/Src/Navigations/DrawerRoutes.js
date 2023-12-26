import 'react-native-gesture-handler';
import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../Screens';
import NavigationStrings from './NavigationStrings';
import CustomComp from '../Components/CustomComp';
import TabRoutes from './TabRoutes';


const Drawer = createDrawerNavigator();

const DrawerRoutes = ({ navigation }) => {

    return (
        <Drawer.Navigator  drawerContent={(props) => <CustomComp {...props} />}>
            <Drawer.Screen name={NavigationStrings.TAB_ROUTES} component={TabRoutes}
                options={{headerShown:false,}} />
        </Drawer.Navigator>
    );
}
export default DrawerRoutes;