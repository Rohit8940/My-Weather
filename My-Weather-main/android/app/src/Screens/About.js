import React from "react";
import { Text, View, ImageBackground } from "react-native";
import { deviceWidth, deviceHeigth } from "./Dimensions";
import DrawNavigator from "./DrawNavigator";
import Home from "./Home";
import { ScrollView } from "react-native-gesture-handler";


export default function About() {
    return (
        <ImageBackground
            source={require('../Images/about1.jpg')}
            style={{ width: deviceWidth, height: deviceHeigth }}
            imageStyle={{ opacity: 0.6, backgroundColor: 'black' }}
        >
            <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center',paddingVertical:80}}>
            <Text style={{color: 'white', fontSize: 30}}>About The app</Text>
            </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    
                    <Text style={{ color: 'white', fontSize: 22, width: '100%', paddingHorizontal: 10 }}>
                        My Weather App – the app that seamlessly connects you with essential weather 
                        information while immersing you in an Earth-themed user interface.

                        Explore the fascinating world of meteorology with EarthStats,
                        where you can access real-time data on wind speed and direction,
                        atmospheric pressure, humidity levels, visibility conditions,
                        and even stay informed about your local timezone.
                        Our app combines the beauty of the Earth's natural
                        elements with the precision of modern technology,
                        making it the perfect companion for both weather
                        enthusiasts and those seeking reliable weather updates.
                    </Text>
                    {/* Add more Text components for each paragraph */}
                </View>
            </View>
        </ImageBackground>
    );
}






