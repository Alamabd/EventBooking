import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import First from './routes/First';
import Signup from './routes/Signup';
import Setloc from './routes/Setloc';

import Home from './routes/tab/Home';
import Explore from './routes/tab/Explore';
import Favorite from './routes/tab/Favorite';
import Ticket from './routes/tab/Ticket';
import Profile from './routes/tab/Profile';
import { Image } from 'react-native';

export type StackParamsList = {
  First: string,
  Signup: string
}

function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function TabBottom(): React.JSX.Element {
    return(
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Favorite" component={Favorite} />
        <Tab.Screen name="Ticket" component={Ticket} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    )
  }

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
         } name="TabBottom" component={TabBottom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;