import * as React from 'react';
import {View,ScrollView,Text,StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Appbar, Colors ,Title} from 'react-native-paper';
import Header from '../Components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable';






const LoginScreen = ({navigation}) => {
  

  return (
    
    <View style={styles.container} >
       
        <View style={styles.head} >
                
                
                <Animatable.Image  
                        animation="bounceIn"
                        
                        
                        source={require('../assets/logo.png')}
                        style={styles.logo}
                        resizeMode="center"

                />


                

        </View>
        <Animatable.View style={styles.Footer} animation="fadeInUpBig" delay={500} >
                <Text style={styles.title}>
                    Are you Hungry ? 
                </Text>
                <Text style={{marginTop:10}}>
                    Sign in to your account
                </Text>
                <View style={styles.button}>
                <TouchableOpacity onPress={()=>navigation.navigate("SignIn")}>
                    <LinearGradient colors={["#08d4c4","#01ab9d"]}
                    style={styles.signIn}
                     >
                        <Text style={styles.textSign}>
                            Get stated 
                        </Text>
                        <MaterialIcons 
                                       name="navigate-next"
                                       color="#fff"
                                       size={20}
                        
                        />
                    </LinearGradient>
                </TouchableOpacity>
                </View>
        </Animatable.View>
        
        
    </View>
    
  );
};

const {height}=Dimensions.get("screen");
const height_logo=height*28;

const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#5579c6"
    },
     head:{
         flex:2,
         justifyContent:"center",
         alignItems:"center"

     },

    Footer:{
        flex:1,
        backgroundColor:"#fff",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30
    },

    logo:{
        width:height_logo,
        height:height_logo,
        borderTopLeftRadius:100
    },

    title:{
        Color:"#05375a",
        fontSize:30,
        fontWeight:"bold"
    },
    button:{
        alignItems:"flex-end",
        marginTop:30
    },
    signIn:{

        width:150 ,
        height:40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
        flexDirection:"row"

    },
    textSign:{

        color:"white",
        fontWeight:"bold"
    }






})

export default LoginScreen;