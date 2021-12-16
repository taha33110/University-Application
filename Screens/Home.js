import * as React from 'react';
import {View,ScrollView} from 'react-native';
import { Appbar, Colors ,Title} from 'react-native-paper';
import Header from '../Components/Header';
import Profile from '../Components/Profile';

import Card from '../Components/Card';
import HomeSC from '../Components/HomeSC';
import { useLinkProps } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './Products';
const Stack = createNativeStackNavigator();

const Home = (props) => {
  
  

  return (
    
    <>
      <Header 
      name={" Home" }
      navigation={props.navigation}
      />
      
      {/* <Card /> */}
      <HomeSC 
      navigation={props.navigation}
      />
      
      
      {/* <Profile /> */}
        {/* <Cards/>
          <Cards/> */}
      
      
      
      
    </>
    
  );
};

export default Home;