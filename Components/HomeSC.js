import * as React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Title } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


export default HomeSC = (props) => {

    
    return (
        <>
            <View style={styles.contianer}>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>

                    <View style={{ marginTop: 20, alignItems: "center" }}>
                        <Title style={{ fontSize: 35 }}> welcome ! </Title>
                        <Text >
                            dynamic name
                        </Text>
                    </View>


                </View>

                <View style={{ flexDirection: "row", justifyContent: "center", }} >
                    <Image style={styles.image} source={{ uri: 'https://picsum.photos/400' }} />


                </View>


                <View style={{ alignItems: "center" }}>

                    <View style={styles.card}  >
                        <TouchableOpacity onPress={() => props.navigation.navigate("Products")} >
                            <View style={styles.cardObjects}>
                                <Ionicons name="fast-food" size={85} />
                                <Title>
                                    product
                                </Title>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>

                        <TouchableOpacity onPress={() => props.navigation.navigate("OrderSC")}>
                            <View style={styles.cardObjects}>
                                <MaterialCommunityIcons name="truck-delivery" size={85} />
                                <Title>
                                    Order
                                </Title>
                            </View>
                        </TouchableOpacity>

                    </View>



                </View>

                



            </View>


        </>
    )


}

const styles = StyleSheet.create({

    contianer: {
        flex: 1,



    },
    card: {
        height: 130,
        width: "55%",
        marginLeft: 10,
        marginRight: 5,
        shadowColor: "#dadada",
        marginTop: 40,
        backgroundColor: "#fff",
        shadowOpacity: 1,
        shadowOffset: {
            height: 1,
            width: 1
        },
        borderRadius: 10

    },
    cardObjects: {

        alignItems: "center",
        marginTop: 10,




    },
    image: {
        width: "40%",
        height: 140,
        marginLeft: 10,
        marginTop: 30,
        borderRadius: 500
    },
})