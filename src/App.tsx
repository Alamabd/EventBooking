import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import First from './routes/First';
import Signup from './routes/Signup';
import Setloc from './routes/Setloc';
import Tabs from './Tabs';

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
          }
        }>
        <Stack.Screen options={
          {
            headerShown: false,
          }
        } name="First" component={First} />
        <Stack.Screen options={
          {
            title: "",
            headerTransparent: true
          }
        } name="Signup" component={Signup} />
        <Stack.Screen options={
          {
            title: "",
            headerTransparent: true
          }
        } name="Setloc" component={Setloc} />
        <Stack.Screen options={
          {
            headerShown: false,
          }
         } name="TabBottom" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;