import React, { useEffect, useState } from "react";
import {Text,View,Image,ImageBackground} from 'react-native'
import { deviceHeigth, deviceWidth } from './Dimensions'
import Icon from 'react-native-vector-icons/Ionicons'
import { API_KEY } from "./Constants";

export default function Details(props){
    const {name} = props.route.params;
    const [data,setData]= useState('')
    const [error, setError] = useState(null);
    const Data =({title,value})=>{
        return(
            
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <Text style={{color:'white',fontSize:22,fontWeight:'300',opacity:0.9}}>{title}</Text>
                                <Text style={{color:'white',fontSize:22}}>{value}</Text>
                                
                                

                            </View>
            
        )

    }
    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`)
        .then(res=>res.json())
        .then(res=>{
            if(res.name==name){
                setData(res)
            }else{setError(`The city ${name} does not exist`)}
        })
        .catch(err=>console.log(err))
    },[])
    useEffect(() => {
        if (error) {
          props.navigation.goBack();
          console.warn(`The city ${name} does not exist`) // You can use your preferred navigation method
        }
      }, [error]);
    return(
        <View>
          <ImageBackground source={require('../Images/space.jpg')}
                style={{ width: deviceWidth, height: deviceHeigth }}
                imageStyle={{ opacity: 0.6, backgroundColor: 'black' }} />
            <View style={{ position: 'absolute',paddingVertical:20 }}>
                <View style={{
                    paddingHorizontal: 10, flexDirection: 'row',
                    justifyContent: 'space-between', alignItems: 'center', width: deviceWidth - 20
                }}>
                   
                </View>
                {error && <Text style={{ color: 'red', fontSize: 30,textAlign:'center' }}>{error}</Text>}
                {
                    data ? 
                    <View 
                    style={{flexDirection:'column',
                            justifyContent:'space-evenly',
                            alignItems:'center',
                            height:deviceHeigth-100}}>
                        <View>
                        <Text style={{color:'white',fontSize:40}}>
                            {name}
                        </Text>
                        <Text style={{fontSize:22,color:'white',textAlign:'center'}}>{data['weather'][0]['main']}</Text>
                        
                        </View>
                        <Text style={{color:'white',fontSize:64}}>{(data['main']['temp'] -273).toFixed(2)}&deg;C</Text>
                        <Text style={{color:'white',fontSize:22,marginBottom:16}}>Weather Details</Text>
                        <View style={{width:deviceWidth-60}}>
                           
                                
                                <Data value={data['wind']['speed']} title='Wind'/>
                                <Data value={data['main']['humidity']} title='Pressure'/>
                                <Data value={data['main']['pressure']} title='Humidity'/>
                                <Data value={data['visibility']} title='Visibility'/>
                                <Data value={data['timezone']} title='Timezone'/>

                            </View>
                            </View>
                    
                        :null
                }
                </View>
        </View> 
    )
}