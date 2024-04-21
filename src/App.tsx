import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import First from './routes/First';
import Signup from './routes/Signup';
import Setloc from './routes/Setloc';

export type StackParamsList = {
  First: string,
  Signup: string
}

function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
          {
            statusBarColor: "#fff",
            statusBarStyle: "dark",
            contentStyle: {
              backgroundColor: "#fff"
            },
            presentation: "transparentModal"
          }
        }>
        <Stack.Screen options={
          {
            headerShown: false,
          }
        } name="First" component={First} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;