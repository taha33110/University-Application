import * as React from 'react';
import {View,ScrollView,Text,StyleSheet,Dimensions,Image,TouchableOpacity, Platform} from 'react-native';
import Header from '../Components/Header';



const Dashboard = () => {

    return(
       
        <View style={styles.container}>
             
                <View style={styles.textView}>
                     <Text style={styles.title }>
                    Welcome to your Dashboard 
                </Text>
                </View>
               

        </View>
    )
}


const styles =StyleSheet.create({

    container:{
        flex:1
    },
    title :{
            fontSize:20,
           fontWeight:"bold"
    },
    textView:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:10
    }
})

export default Dashboard;