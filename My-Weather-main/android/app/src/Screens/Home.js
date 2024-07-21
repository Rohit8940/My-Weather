import React, { useState} from 'react'
import { Text, View, ImageBackground, Image, TextInput, TouchableOpacity, FlatList,tintColor, Button } from "react-native"
import { deviceHeigth, deviceWidth } from './Dimensions'
import Icon from 'react-native-vector-icons/Ionicons'
import Cards from './Cards'

import { useNavigation } from '@react-navigation/native'






export default function Home(props) {
    const navigation = useNavigation();
   
    const [city, setCity] = useState('')
    const cities = [
        {
            name: 'New Delhi',
            image: require('../Images/image6.jpg')
        },
        {
            name: 'New York',
            image: require('../Images/image7.jpg')
        },
        {
            name: 'London',
            image: require('../Images/image3.jpg')
        },
        {
            name: 'San Francisco',
            image: require('../Images/image4.jpg')
        },
        {
            name: 'New Jersey',
            image: require('../Images/image5.jpg')
        }
    ]
    return (
        <View>

            <ImageBackground source={require('../Images/Planet.jpg')}
                style={{ width: deviceWidth, height: deviceHeigth }}
                imageStyle={{ opacity: 0.6, backgroundColor: 'black' }} />
            <View style={{ position: 'absolute',paddingVertical:20 }}>
                <View style={{
                    paddingHorizontal: 10, flexDirection: 'row',
                    justifyContent: 'space-between', alignItems: 'center', width: deviceWidth - 20
                }}>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('About')}
                        style={{paddingHorizontal:14}}>
                    <Image source={require('../Images/info.png')}
                        style={{ height: 35, width: 35, borderRadius: 30,tintColor:'white'}} />
                    </TouchableOpacity >
                    <TouchableOpacity onPress={()=>props.navigation.navigate('InputPage')}>
                    <Image source={require('../Images/man.png')}
                        style={{ height: 40, width: 40, borderRadius: 30,tintColor:'white'}} />
                        </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 100 }}>
                    <Text style={{ fontSize: 40, color: 'white', fontWeight: '200',paddingHorizontal:15 }}>Hello User</Text>
                    <Text style={{ color: 'white', fontSize: 22, fontWeight: '300',paddingHorizontal:15 }}>Search the City by name</Text>
                
                <View style={{
                    flexDirection: 'row',
                    borderRadius: 50, borderWidth: 1,
                    borderColor: 'white', alignItems: 'center', justifyContent: 'space-between',
                    marginTop: 10, paddingHorizontal: 10, marginLeft: 10
                }}>
                    <TextInput value={city} onChangeText={val => setCity(val)} placeholder='Search city' placeholderTextColor='white'
                        style={{ paddingHorizontal: 10, color: 'white' }} />
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Details',{name:city})}>
                        <Icon name='search' size={22} color='white' />
                    </TouchableOpacity>

                </View>
                <Text style={{color: 'white', fontSize: 25, paddingHorizontal: 10, marginTop: 220, marginBottom: 20}}>
            My Locations
          </Text>
                <FlatList horizontal data={cities} renderItem={({item}) => (
                    <Cards name={item.name} image={item.image} navigation={props.navigation} />
                )} />

                </View>
            </View>

        </View>
    )
}