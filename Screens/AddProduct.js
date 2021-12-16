import { PROPERTY_TYPES } from '@babel/types';
import * as React from 'react';
import {View,ScrollView,TouchableOpacity,Text,StyleSheet,Image} from 'react-native';
import { Button, TextInput, Title } from 'react-native-paper';
import Header2 from '../Components/Header2';

 

const AddProduct = (props) => {

    
    return(
        <View style={styles.container} > 
                <Header2 name="Add product" />
                <Text style={styles.text}> type name of your Product</Text>
                <TextInput style={styles.textInput} placeholder={"Name"} ></TextInput>
                <Text style={styles.text}> type price of your Product</Text>
                <TextInput style={styles.textInput} placeholder={"Price"} ></TextInput>
                <Text style={styles.text}> Add Image  </Text>
                <Button onPress={()=>console.log("Upload image code")}  > upload </Button>

                <View style={{marginTop:250}}>
                    <Button mode="contained" 
                    style={{borderRadius:30,width:"95%",marginLeft:10}}
                    onPress={()=>props.navigation.navigate("Products")}
                    >
                        Add Product to my list
                    </Button>
                </View>
        </View>

    )
}


const styles =StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        fontWeight:"bold",
        fontSize:20,
        marginTop:10
    },
    textInput:{
        
        
        paddingLeft:10,
        backgroundColor:"#fff",
        height:50,
        width:"98%",
        marginLeft:5,
        marginTop:10
},
})



export default AddProduct;