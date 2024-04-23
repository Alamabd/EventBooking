import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import First from './routes/First';
import Signup from './routes/Signup';
import Setloc from './routes/Setloc';

import Home from './routes/tab/Home';
import Explore from './routes/tab/Explore';
import Favorite from './routes/tab/Favorite';
import Ticket from './routes/tab/Ticket';
import Profile from './routes/tab/Profile';
import Icon from 'react-native-remix-icon';

function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function TabBottom(): React.JSX.Element {
    const [focusTab, setFocusTab] = useState("");
    return(
      <Tab.Navigator initialRouteName="Home" backBehavior="order"
      screenOptions={{
        tabBarActiveTintColor: "#3C5B6F",
        headerShown: false
      }} 
      sceneContainerStyle={{
        backgroundColor: "#fff"
      }}
      screenListeners={({route}) => ({
        focus: () => {
          setFocusTab(route.name);
        }
      })}
      >
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({color, size}) => {
            return(
              <Icon name={
                focusTab === "Home" ? "ri-home-5-fill" : "ri-home-5-line"
              } size={size} color={color} />
            )
          }
        }}/>
        <Tab.Screen name="Explore" component={Explore} options={{
          tabBarIcon: ({color, size}) => {
            return(
              <Icon name={
                focusTab === "Explore" ? "ri-search-fill" : "ri-search-line"
              } size={size} color={color} />
            )
          }
        }} />
        <Tab.Screen name="Favorite" component={Favorite} options={{
          tabBarIcon: ({color, size}) => {
            return(
              <Icon name={
                focusTab === "Favorite" ? "ri-heart-fill"  : "ri-heart-line"
              } size={size} color={color} />
            )
          }
        }} />
        <Tab.Screen name="Ticket" component={Ticket} options={{
          tabBarIcon: ({color, size}) => {
            return(
              <Icon name={
                focusTab === "Ticket" ? "ri-coupon-3-fill" : "ri-coupon-3-line"
              } size={size} color={color} />
            )
          }
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({color, size}) => {
            return(
              <Icon name={
                focusTab === "Profile" ? "ri-user-fill" : "ri-user-line"
              } size={size} color={color} />
            )
          }
        }} />
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