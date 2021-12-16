import * as React from 'react';
import {View,ScrollView,Text,StyleSheet,Dimensions,Image,TouchableOpacity, Platform, Button} from 'react-native';
import { Title } from 'react-native-paper';
import { FAB } from 'react-native-paper';

const ProductCom = (props) => {

    return(

<View style={styles.container}>
            <Title style={styles.title}> Food  </Title>
            <ScrollView>
                <View style={styles.card}>
                    <Title> Name of Product </Title>
                    <Title> Price of Product </Title>
                    <Image style={styles.image} 
                    source={{uri:"https://picsum.photos/400"}}/>
                    <View style={styles.button}>
                        <Button title="Delete">   </Button>
                    </View>
                    </View>
            </ScrollView>

                        <FAB
                style={styles.fab}
                large
                icon="plus"
                onPress={() => props.navigation.navigate("AddProduct")}
            />

        </View>

)
}

const styles=StyleSheet.create ({
    container:{
        flex:1
    },
    card:{
        height:300,
    width:"98%",
    marginLeft:3,
    marginRight:5,
    shadowColor:"#dadada",
    marginTop:10,
    backgroundColor:"#fff",
    shadowOpacity:1,
    shadowOffset:{
        height:1,
        width:1
    },
    borderRadius:10
    },
    title:{
        fontSize:30,
        marginTop:7,
        textAlign:1
        
    },
    image:{
        height:170,
        width:"98%",
        marginTop:8,
        borderRadius:10,
        marginLeft:3
    },
    button:{
        marginTop:20
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 20,
        bottom: 40,
        
      }

})

export default ProductCom;