import * as React from 'react';
import {View,ScrollView,Text,StyleSheet,Dimensions,Image,TouchableOpacity, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Appbar, Colors ,TextInput,Title} from 'react-native-paper';
import Header from '../Components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';

import { AuthContext } from '../Components/Context';




const SignIn = ({navigation}) => {

    const [data,setData]=React.useState({
        username:"",
        password:"",
        check_textInputChange:false,
        secureTextEntry:true
    });

        const {SignInButton}=React.useContext(AuthContext)

  const textInputChange=(val)=>{
      if(val != 0){
          setData({
              ...data,
              username:val,
              check_textInputChange:true
          })
      } else {
        setData({
            ...data,
            username:val,
            check_textInputChange:false
        })
      }
  }

  const handlePasswordChange=(val)=>{
        setData({
            ...data,
            password:val
        })
  }

  const updateSecureTextEntry=()=>{
      setData({
          ...data,
          secureTextEntry:!data.secureTextEntry
      })
  }
  const loginHandle=(username,password)=>{
            SignInButton(username,password)
  }

  return (
    
    <View style={styles.container} >
        <View style={styles.head} >
                
                
                <Title style={styles.text_header}>
                    Welcome !
                </Title>


                

        </View>
        <Animatable.View style={styles.Footer} animation="fadeInUpBig" delay={500} >
                

                <Text style={styles.text_footer}> Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                 <TextInput
                  placeholder="Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val)=>textInputChange(val)}
                 />
                 
                </View>
                <Text style={[styles.text_footer,{marginTop:15}]}>Password </Text>
                <View style={styles.action}>
                    <FontAwesome
                     name="lock"
                     color="#05375a"
                     size={20}

                    
                    />
                    <TextInput placeholder="Password"
                    secureTextEntry={data.secureTextEntry?true:false}
                    style={styles.textInput}
                    autoCompleteType="none"
                    secureTextEntry={true}
                    onChangeText={(val)=>handlePasswordChange(val)}
                    />

                </View>
                
                <View >
                   
                
                </View>
                
                <View style={styles.button}>
                <TouchableOpacity onPress={()=>{loginHandle(data.username,data.password)}}>
                    <LinearGradient colors={["#08d4c4","#01ab9d"]}
                    style={styles.signIn}
                     >
                        <Text style={styles.textSign}>
                            Sign In
                        </Text>
                        
                    </LinearGradient>
                </TouchableOpacity>
                </View>
        </Animatable.View>
        
                
    </View>
    
  );
};



const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#5579c6"
    },
     head:{
         flex:1,
         justifyContent:"flex-end",
         alignItems:"center",
         paddingHorizontal:20,
         paddingBottom:50


     },

    Footer:{
        flex:3,
        backgroundColor:"#fff",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30
    },

    text_header:{
            color:"#fff",
            fontWeight:"bold",
            fontSize:30
    },

    text_footer:{
        color:"#05375a",
        fontSize:18

    },
        textInput:{
                flex:1,
                
                paddingLeft:10,
                backgroundColor:"#fff",
                height:15
        },
    

    
    
    button:{
        alignItems:"center",
        marginTop:50
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

        fontSize:18,
        fontWeight:"bold",
        color:"#fff"
    },

    action:{
        flexDirection:"row",
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:"#f2f2f2",
        paddingBottom:5
    }
    






})

export default SignIn;