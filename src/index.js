import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppEntro from './appEntro/appEntro';
import Login from './screens/login'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

export default function Hospital() {
    const [introCheck,setIntroCheck]=useState();
    useEffect( ()=>{
     getUser();
    },[])
   
    const getUser = async () => {
      try {
        const savedUser = await AsyncStorage.getItem("user");
        const currentUser = JSON.parse(savedUser);
        setIntroCheck(currentUser.intro)
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <NavigationContainer>
      <Stack.Navigator>
    
      {introCheck!='don'? 
      <>
       <Stack.Screen name="AppEntro" component={AppEntro} /> 
       <Stack.Screen name="Login" component={Login} />
       </>
       : 
       <Stack.Screen name="Login" component={Login} />
    
    }

      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
