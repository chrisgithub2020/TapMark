import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import React, {useState, useEffect} from "react";

const Index = ({navigation}: {navigation: any}) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [data, setData] = useState<any>();

    useEffect(() => {
        setData("go")
        setIsLoading(false)
    },[])

    useEffect(()=>{
        console.log(isLoading)
        if (!isLoading) {
            navigation.navigate("home")
        }
    }, [isLoading, data])
  return <ActivityIndicator style={{flex: 1}} size={"large"} color={"red"}/>   
};

export default Index;
