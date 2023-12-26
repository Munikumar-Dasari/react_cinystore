import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStack from './AuthStack'
import MainStack from './MainStack'

// import { useSelector } from 'react-redux'

const Stack=createNativeStackNavigator();
const Routes=()=>{
    // const userData=useSelector((state)=>state.auth.userData);
    // console.log(userData);
    return(
        <NavigationContainer>
            <Stack.Navigator>
                {
                    AuthStack(Stack)
                }
                {
                    MainStack(Stack)
                }
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes;