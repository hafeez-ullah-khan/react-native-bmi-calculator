
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen} 
          options={{ title: 'BMI CALCULATOR', headerTintColor: '#fff',  
          headerStyle: {
            backgroundColor: '#1D1442', 
          },}}/>
        <Stack.Screen
          name='DetailScreen'
          component={DetailScreen}
          options={{ title: 'BMI CALULATOR',headerBackTitle :'',headerTintColor: '#fff',
            headerStyle: {
            backgroundColor: '#1D1442', 
          },}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator