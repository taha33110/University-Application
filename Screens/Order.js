import * as React from 'react';
import {View,ScrollView,Text,StyleSheet,Dimensions,Image,TouchableOpacity, Platform} from 'react-native';
import { Button, Title } from 'react-native-paper';
import Card from '../Components/Card';
import Header from '../Components/Header';
import Header2 from '../Components/Header2';
const Order = (props) => {

    return(
        <View style={styles.container}>
            <Header2 name="Order"/>
            <View style={styles.orderCard}>
                    <View style={{flexDirection:"row", justifyContent:"center"}}>

                    
                    <Image style={styles.image} source={{uri: 'https://picsum.photos/400'}}/>
                         </View>
                         <View>
                             <Title style={styles.text}>
                                 Name:
                             </Title >
                             <Title style={styles.text}>
                                 Location:
                             </Title>
                             <Title style={styles.text} >
                                 Order
                             </Title>
                             <View style={{flexDirection:"row",justifyContent:"center",marginTop:110}}>
                                  <Title>
                                 Total Price 
                             </Title>
                             </View>
                            
                             
                         </View>
                         
                             
                         
            </View>
                            <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:20}}>
                                <Button onPress={()=>props.navigation.goBack()}>
                                    Cancel
                                </Button>
                                <Button>
                                    Accept Order
                                </Button>

                                
                            </View>
        </View>
       
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1
    },
    orderCard:{
        marginTop:60,
        width:"98%",
        shadowColor:"#dadada",
        shadowOpacity:1,
        backgroundColor:"#fff",
        height:"65%",
        marginBottom:10,
        borderRadius:40,
        marginLeft:4,
        shadowOffset:{
            width:1,
            height:1
        }
        


    },
    image:{
        width:"25%",
        height:90,
        marginLeft:10,
        marginTop:15,
        borderRadius:500
      },

    
    text:{
        marginTop:10,
        marginBottom:10,
        
    }
})


export default Order;