import {MaterialIcons} from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = ({navigation}: {navigation: any}) => {
    console.log("we are home")
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <StatusBar backgroundColor={"#800000"} barStyle={"light-content"}/>
                <TouchableOpacity style={styles.accountIcon} onPress={()=> {
                    navigation.navigate("profile")
                }}>
                    <MaterialIcons style={{color: "white"}} name="account-circle" size={35}/>
                </TouchableOpacity>
                <View style={{flex:1,flexDirection: "row", justifyContent: "center"}}>
                    <Text style={{alignSelf: "center", color: "white", fontWeight: "bold", fontSize: 25}}>TapMark</Text>
                </View>
                <TouchableOpacity style={styles.notificationButton} onPress={()=>{
                    navigation.navigate("notifications")
                }}>
                    <MaterialIcons style={{color: "white"}} name="notifications" size={35}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Index


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    topBar: {
      flexDirection: "row",
      height: 40+Number(StatusBar.currentHeight),
      backgroundColor: "#800000",
      padding: 6,
    },
    accountIcon: {
        justifyContent: "center"        
    },
    notificationButton:{
        justifyContent: "center"
    }
  });
  