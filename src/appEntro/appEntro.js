import React from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import Images from '../globalPath/images'
import {RFValue} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';





export default function AppEntro({ navigation }) {
  const value = {
    intro: "don",
   
  };
  const IntroDon = async () => {
      try {
        await AsyncStorage.setItem("user",JSON.stringify(value));
        console.log('Intro don')
        navigation.navigate('Login')
      } catch (error) {
        console.log("erro",error);
        
      }
    };
  const slides = [
    {
      key: 1,
    title: 'Find Doctor',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.',
    image: Images.slider,
    backgroundColor: '#59b2ab',
    },
    {
      key: 2,
    title: 'Find Doctor',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.',
    image: Images.slider,
    backgroundColor: '#59b2ab',
    },
    {
      key: 3,
    title: 'Find Doctor',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.',
    image: Images.slider,
    backgroundColor: '#59b2ab',
    },
   
  ];

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="arrow-forward-circle-sharp"
          color="rgba(255, 255, 255, .8)"
          size={45}
        />
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="checkmark-circle-sharp"
          color="rgba(255, 255, 255, .9)"
          size={45}
        />
      </View>
    );
  };
  return (
    <AppIntroSlider
    showSkipButton={true}
    data={slides}
    renderItem={_renderItem}

    onDone={IntroDon}
    onSkip={() =>{navigation.navigate('Login') ,IntroDon()}}
    renderDoneButton={_renderDoneButton}
    renderNextButton={_renderNextButton}
  />
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#1A547F',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '30%',
    backgroundColor:'#1A547F',
  },
  title: {
    color: '#ffffff',
    // fontFamily: FONTS.BOLD,
    fontSize: RFValue(27),
    paddingVertical: RFValue(17),
    textAlign: 'center',
  },
  text: {
    color: '#ffffff',
    // fontFamily: FONTS.LIGHT,
    fontSize: RFValue(15),
    paddingHorizontal: RFValue(27),
    paddingVertical: RFValue(17),
    textAlign: 'center',
  },

});