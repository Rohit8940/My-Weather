import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "./About";
import Home from "./Home";

const Drawer = createDrawerNavigator(); // Use a unique name

export default function DrawNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="About" component={About} options={{headerShown:false}} />
      </Drawer.Navigator>
      </NavigationContainer>
    
  );
}
