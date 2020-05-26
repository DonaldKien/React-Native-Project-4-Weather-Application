import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App(props) {

  const weather3 = props.navigation.getParam('passData');
  let iconUrl = "https://openweathermap.org/img/wn/"+weather3["weather"][0]["icon"]+"@2x.png";

  return (
    <View style={styles.container}>
      <Image source={{uri:iconUrl}} style={{width:150, height:150}}/>  
      <Text>{(new Date(weather3['dt']*1000)).toDateString()}</Text>
      <Text>{weather3["weather"][0]["main"]}</Text>
      <Text>Weather: {weather3["weather"][0]["description"]}</Text>
      <Text>Temperature: {(weather3["temp"]["day"]-273.15).toFixed(2)}°C</Text>
      <Text>Pressure: {weather3["pressure"]}</Text>
      <Text>Humidity: {weather3["humidity"]}</Text>
      <Text>Sunrise: {(new Date(weather3["sunrise"]*1000)).toTimeString()}</Text>
      <Text>Sunset: {(new Date(weather3["sunset"]*1000)).toTimeString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82beff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});