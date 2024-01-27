// Imports
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// React Navigation Stack
const Stack = createNativeStackNavigator();

// Screen Imports
import HomeScreen from '../screens/homescreen/Homescreen';

const StackArea = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackArea;
