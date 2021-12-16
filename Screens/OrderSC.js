import * as React from 'react';
import {View,ScrollView,Text,StyleSheet,Dimensions,Image,TouchableOpacity, Platform} from 'react-native';
import Card from '../Components/Card';
import Header from '../Components/Header';
import Header2 from '../Components/Header2'
const OrderSC = (props) => {

    return(
        <View>
            <Header2 name="Order List"/>
            <View style={{marginTop:10}}>
                <Card 
                navigation={props.navigation}
                />
            </View>
             
        </View>
       
    )
}


export default OrderSC;