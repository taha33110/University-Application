import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
  
} from 'react-native';
import { Card } from 'react-native-paper';
import Home from './Screens/Home';
import LoginScreen from './Screens/LoginScreen';
import SignIn from './Screens/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './Screens/Products';
import Dashboard from './Screens/Dashboard';
import OrderSC from './Screens/OrderSC';
import Order from './Screens/Order';
import AddProduct from './Screens/AddProduct';
import {AuthContext} from "./Components/Context"
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  DrawerContent from './Screens/DrawerContent';

const Stack = createNativeStackNavigator();
const Drawer =createDrawerNavigator();

const App = () => {
      // const [isLoading , setIsLoading ] = React.useState(true);
      // const [userToken,setUserToken] = React.useState(null);

      const initialLoginState={
        isLoading:true,
        userName:null,
        userToken:null

      }

      const LoginReducer = (prevState, action )=>{

        switch (action.type){

          case "RETREIVE_TOKEN":
            return{
              ...prevState,
              userToken:action.token,
              isLoading:false
            }

          case "LOGIN":
            return{...prevState,
              userName:action.id,
              userToken:action.token,
              isLoading:false
            }
            
           case "LOGOUT":
             return {...prevState,
              userName:null,
              userToken:null,
              isLoading:false
            }

        }

      }

      const [loginState,dispatch]=React.useReducer(LoginReducer,initialLoginState)

    const authContext=React.useMemo(()=>({

        SignInButton: async(userName,password)=>{
          // setUserToken("taha")
          // setIsLoading(false)
          let userToken;
          userToken=null;
          if (userName == 'taha' && password == 'pass' )
          {
            userToken='qwe';
            try{
                await AsyncStorage.setItem("userToken",userToken)
            }catch(e){
              console.log(e)
            }
            
          }
            // console.log('userToken:',userToken)
          dispatch({type:'LOGIN', id:userName ,token:userToken})
        },
        SignOut: async()=>{ 
          try{
                await AsyncStorage.removeItem("userToken");
            }catch(e){
              console.log(e)
            }
        //   setUserToken("taha")
        // setIsLoading(false)
        dispatch({type:'LOGOUT'})
      }

      }),[]);



      useEffect(()=>{
          setTimeout(async()=>{
            // setIsLoading(false);
            let userToken;
            userToken=null;
            try{
             userToken= await AsyncStorage.getItem("userToken")
          }catch(e){
            console.log(e)
          } 
            // console.log('userToken:',userToken)
            dispatch({type:'RETREIVE_TOKEN' ,token:userToken })
          },1000);
      },[]);

      if (loginState.isLoading){

        return(
           <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
              <ActivityIndicator size="large" />
        </View>
        )
       
      }

  return (
      <>
      <AuthContext.Provider value={authContext}>
      <StatusBar barStyle= 'dark-content' />
      <NavigationContainer >
        {loginState.userToken != null ?(<Drawer.Navigator drawerContent={props=> <DrawerContent {...props}/>}>
          
          <Drawer.Screen component={Home} name="Home" options={{headerShown:false}} />
          <Drawer.Screen component={Products} name="Products" options={{headerShown:false}} />
          <Drawer.Screen component={Dashboard} name="Dashboard"  />
          <Drawer.Screen component={OrderSC} name="OrderSC"  options={{headerShown:false}} />
          <Drawer.Screen component={Order} name="Order"  options={{headerShown:false}} />
         
          <Drawer.Screen component={AddProduct} name="AddProduct"  options={{headerShown:false}} />

          

        </Drawer.Navigator> 
            
        
        ) :

        <Stack.Navigator>
        <Stack.Screen component={LoginScreen} name="LoginScreen"  options={{headerShown:false}} />
        <Stack.Screen component={SignIn} name="SignIn" options={{headerShown:false}} />
        </Stack.Navigator>
                


        }
        
        
         

       
      </NavigationContainer>
      
       </AuthContext.Provider>
      </>
         
  );
};



export default App;
