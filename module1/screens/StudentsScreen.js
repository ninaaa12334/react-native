import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import StudentDetails from '../components/StudentDetails';

const TestScreen = () => {
    return( 
    <View>

        <Text style={styles.textStyle}> Students Screen </Text>;
        <StudentDetails name="Ana"
        image={require('../../assets/download(1).jpg')}
         description="Lorem ipsum"/>


        <StudentDetails name="Leo" 
         image={require('../../assets/download(2).jpg')}
        description="Lorem ipsum"/>


        <StudentDetails name="Anita" 
         image={require('../../assets/download.jpg')}
        description="Lorem ipsum" />
    
    </View>    

    
)};

const styles = StyleSheet.create({
    textStyle:{
        fontSize:30,
        textAlign: 'center',
        marginVertical: 20
    }
});

export default TestScreen;