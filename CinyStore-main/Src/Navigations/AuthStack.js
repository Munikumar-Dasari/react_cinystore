import NavigationStrings from "./NavigationStrings";
import * as Screens from '../Screens'
import DrawerRoutes from "./DrawerRoutes";
import MovieList from "../Components/MovieList";
import MoviewReview from "../Screens/MovieReview/MoviewReview";
import MovieFeed from "../Screens/FeedList/MovieFeed";
import InernationalMovielist from "../Components/InernationalMovielist";


export default function (Stack){
    return(
        <>
        <Stack.Screen
        name={NavigationStrings.INITIAL_SCREEN}
        component={Screens.InitialScreen}
        options={{headerShown:false}}
        />
         <Stack.Screen
        name={NavigationStrings.LOGIN}
        component={Screens.Login}
        options={{headerShown:false}}
        />
          <Stack.Screen
         name={NavigationStrings.OTP_VERIFICATION}
         component={Screens.OtpVerifcation}
         options={{headerShown:false}}
         />
        <Stack.Screen
        name={NavigationStrings.MOVIES_LIST}
        component={MovieList}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name={NavigationStrings.MOVIE_FEED}
        component={MovieFeed}
        options={{headerShown:false}}
        />
        
         <Stack.Screen
        name={NavigationStrings.DRAWER_ROUTES}
        component={DrawerRoutes}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name={NavigationStrings.MOVIE_REVIEW}
        component={MoviewReview}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name={NavigationStrings.GROUP_PAGE}
        component={Screens.GroupsPage}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name={NavigationStrings.INTERNATIONAL_MOVIELIST}
        component={InernationalMovielist}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name={NavigationStrings.NEW_GROUP}
        component={Screens.NewGroup}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name={NavigationStrings.WARRIORS}
        component={Screens.Warriors}
        options={{headerShown:false}}
        />
        </>
    )
   

}