import * as React from 'react';
import {View,ScrollView,Text,StyleSheet,Dimensions,Image,TouchableOpacity, Platform} from 'react-native';
import { Button, Title } from 'react-native-paper';
import Header2 from '../Components/Header2';
import ProductCom from '../Components/ProductCom';



const Products = (props) => {

    return(
        <View style={{flex:1}}>
            <Header2 name="Products"/>
            <ProductCom navigation={props.navigation}/>
            
            </View>
            
        
       
    )
}


export default Products;