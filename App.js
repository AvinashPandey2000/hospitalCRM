import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Hospital from './src';

export default function Entery() {
  useEffect(()=>{
    SplashScreen.hide();
  },[]);


  return (
    <View style={{flex:1}}>
      <Hospital/>
     </View>
  );
}
