import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './screens/ProfileScreen';
import StudentInfo from './screens/StudentInfo';
import Projects from './screens/Projects';
import MainScreen from './screens/Main.Screen';import TestScreen from './screens/TestScreen';
import StudentsScreen from './screens/StudentsScreen';

import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
