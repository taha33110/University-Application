import * as React from 'react';
import {View,ScrollView,TouchableOpacity,Text,StyleSheet,Image} from 'react-native';
import { Button ,Title} from 'react-native-paper';



export default Card = (props) => {
  

  return (
    <View stlye={styles.container}>
      <View style={styles.card}>
      
        <TouchableOpacity>
          <View style={{marginLeft:140}}>
            <Title >
                Order from 
            </Title> 
          </View>
          
            <View style={{flexDirection:'row'}} >
            
              <Image style={styles.image} source={{uri: 'https://picsum.photos/400'}}/>
              <View style={{marginTop:20,marginLeft:10}}>
                <Title >
              Name:
            </Title>
            <Title >
              Location:
            </Title>
              </View>
              </View>
            
            
            
            
            
            
                      
           
           
              <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
                <Button onPress={()=> console.log("pressed")} > Cancel</Button>
              <Button onPress={()=>props.navigation.navigate("Order")} >View order </Button>
              </View>
            
              
           
           
           
        </TouchableOpacity> 
        </View>
           

       

    </View>
    
    
  );
};

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  card:{
    
    backgroundColor:"#fff",
    marginTop:10,
    marginBottom:10,
    height:190,
    
    width:"96%",
    marginLeft:"2%",
    shadowOpacity:1,
    shadowColor:"#dadada",
    borderRadius:20,
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
  }

})



