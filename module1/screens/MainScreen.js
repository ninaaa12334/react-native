import React from "react";
import{Text, Stylesheet, View} from "react-native";

const MainScreen = () => {
    return
    <View style={style.container}>
        <Text style={style.TextStyle}>This is main screen</Text>
    </View>
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'Center',
        justifyContent: 'center',
    },
    TextStyle:{
        fontSize: 30
    }
});

export default MainScreen;