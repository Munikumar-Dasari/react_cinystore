//import liraries
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IntialScreen from './Src/Screens/IntialScreen/IntialScreen';
import Routes from './Src/Navigations/Routes';
import { Home } from './Src/Screens';
import DrawerRoutes from './Src/Navigations/DrawerRoutes';
import { Provider } from 'react-redux';
import { store } from './Src/Redux/store';

// create a component
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>

    </>

  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
