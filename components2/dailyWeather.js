import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput, SafeAreaView, ImageBackground, Image, ActivityIndicator } from 'react-native';

export default function Home() {

    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const retrieveWeather = () => {
        setIsLoading(true);
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=9fd7a449d055dba26a982a3220f32aa2')
        .then ( (response) => response.json() )
        .then ( (responseJson) => {setIsLoading(false); setWeather(responseJson)} )
        .catch ( error => {setIsLoading(false); setErrMsg('Error: Something went wrong')} )
    };

    let inputData;
    if (weather) {
        if (isLoading){
            <View><ActivityIndicator></ActivityIndicator></View>
        }
        else{
            const sunriseTime = new Date(weather["sys"]["sunrise"]*1000)
            const sunsetTime = new Date(weather["sys"]["sunset"]*1000)
            function formatAMPM(date) {
                let hours = date.getHours();
                let minutes = date.getMinutes();
                let ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0'+minutes : minutes;
                let strTime = hours + ':' + minutes + ' ' + ampm;
                return strTime;
            }
            inputData = (
                <View style={styles.content}>
                    <Image source={{uri:"https://openweathermap.org/img/wn/"+weather["weather"][0]["icon"]+"@2x.png"}} style={{width:100, height:100}}/>
                    <Text>Location: {weather['name']}</Text>
                    <Text>Weather: {weather["weather"][0]["main"]}</Text>
                    <Text>Temperature: {(weather["main"]["temp"]-273).toFixed(2)}°C</Text>
                    <Text>Pressure: {weather["main"]["pressure"]}</Text>
                    <Text>Humidity: {weather["main"]["humidity"]}</Text>
                    <View  style={{width:"100%", flexDirection:"row", justifyContent:"space-around"}} >
                        <View style={{textAlign:'center'}}><Text>Sunrise: {formatAMPM(sunriseTime)}</Text></View>
                        <View style={{textAlign:'center'}}><Text>Sunset: {formatAMPM(sunsetTime)}</Text></View>
                    </View>
                </View>
            )
        }
    }
    else {
        inputData = (
            <View style={styles.content}>{errMsg ? <Text>{errMsg}</Text> : null}</View>
        )
    }
   
  return (
    <ImageBackground source={require('../assets/weatherbg.jpg')} style={{width:'100%', height:'100%'}}>
    <SafeAreaView style={styles.container}>
        <View style={styles.inputRow}>
            <TextInput
            placeholder="Enter city name" 
            style={styles.inputText} 
            onChangeText={(text)=> setCity(text)} 
            value={city}></TextInput>
            <TouchableOpacity onPress={retrieveWeather} style={styles.buttonStyle} >
                <View><Text style={styles.buttonText}>Search City</Text></View>
            </TouchableOpacity>
        </View>
        {inputData}
    </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputRow : {
    flexDirection:'row',
    marginVertical: 40,
    marginHorizontal: 20
  },
  inputText: {
    flex:2, 
    backgroundColor: 'white',
    padding: 10,
  },
  buttonStyle:{
      backgroundColor:'indigo',
      padding:10,
      flex:1,
      justifyContent: 'center'
  },
  buttonText:{
      color:'white',
      textAlign: 'center'
  },
  content:{
      alignItems:'center'
  }
});