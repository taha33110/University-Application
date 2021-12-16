import React from "react";
import {StyleSheet,View} from 'react-native';
import { DrawerContentScrollView,DrawerItem } from "@react-navigation/drawer";
import {Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { AuthContext } from '../Components/Context';


export default DrawerContent=(props) =>{

    const { SignOut } = React.useContext(AuthContext)

        return(

            <View style={{flex:1}}>
                <DrawerContentScrollView {...props}>
                
                <View style={styles.drawercontent}>
                     <View style={styles.userInfoSection}>
                        <View style={{flexDirection:"row",marginTop:15}}>
                            <Avatar.Image size={50}  source={{uri: 'https://picsum.photos/400'}}/>
                            <View style={{marginLeft:15}}>
                            <Title style={styles.title}>
                                dynamic name
                            </Title>
                            <Caption style={styles.caption}>@usrid</Caption>
                            </View>
                     </View>
                        
                     </View>
                        <Drawer.Section style={styles.drawerSection}>
                        <Drawer.Item 
                            icon={({color,size})=>(
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                
                                />
                            )}
                            label="Home"
                            onPress={()=>{props.navigation.navigate("Home")}}
                    />

                        <Drawer.Item 
                            icon={({color,size})=>(
                                <Icon
                                    name="food"
                                    color={color}
                                    size={size}
                                
                                />
                            )}
                            label="Products"
                            onPress={()=>{props.navigation.navigate("Products")}}
                    />

                        <Drawer.Item 
                            icon={({color,size})=>(
                                <Icon
                                    name="clipboard-list"
                                    color={color}
                                    size={size}
                                
                                />
                            )}
                            label="Order List"
                            onPress={()=>{props.navigation.navigate("Order")}}
                    />

                        </Drawer.Section>



                     </View>
                
                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection} >
                    <Drawer.Item 
                            icon={({color,size})=>(
                                <Icon
                                    name="exit-to-app"
                                    color={color}
                                    size={size}
                                
                                />
                            )}
                            label="Sign Out"
                            onPress={()=>{SignOut()}}
                    />

                    

                </Drawer.Section>
            </View>
        )
}



const styles=StyleSheet.create({

    drawercontent:{
        flex:1
    },
    userInfoSection:{
        paddingLeft:20
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold'
    },
    caption:{
        fontSize:14,
        lineHeight:14
    },
    row:{
        marginTop:20,
        flexDirection:"row",
        alignContent:"center"
    },
    section:{
        flexDirection:"row",
        alignContent:"center",
        marginRight:15
    },
    paragraph:{
        fontWeight:"bold",
        marginRight:3
    },
    drawerSection:{
        marginTop:15
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:"#f4f4f4",
        borderTopWidth: 1,

    },
    prefrence:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:12,
        paddingHorizontal:16
    }






})