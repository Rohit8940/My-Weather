
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./android/app/src/Screens/Home";
import Details from "./android/app/src/Screens/Details";
import InputPage from "./android/app/src/Screens/InputPage";
import About from "./android/app/src/Screens/About";

const Stack =createNativeStackNavigator();



export default function App(){
 
  return(
    
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name ='Home' component={Home}/>
            <Stack.Screen name='Details' component={Details}/>
            <Stack.Screen name='InputPage' component={InputPage}/>
            <Stack.Screen name="About" component={About} />
            
            </Stack.Navigator>
            
           </NavigationContainer>
           
        
    
  )
}
