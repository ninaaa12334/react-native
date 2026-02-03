import React from "react";
import {View, Text, Stylesheet, Button, TouchableOpacity} from "react-native-web"



const ButtonScreen =() =>{
    let counter, counterT =0;
    return(
        <View>
            <Text>ButtonScreen</Text>
            <Button 
            title= "Click me"
            color="purple"
            onePress={() => console.log('Button Clicked', counter++)}
            />
        </View>
    )
}

export default ButtonScreen;