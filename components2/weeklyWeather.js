import React, {useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import ListItem from './weeklyListItem';

export default function weeklyWeather ({navigation}) {

    const [inputCity, setInputCity] = useState ('');
    const [weatherData, setWeatherData] = useState ([]);
    const [errMsg, setErrMsg] = useState('');

    const retrieveData = () => {
        fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q='+inputCity+'&appid=9fd7a449d055dba26a982a3220f32aa2')
        .then ( response => response.json() )
        .then ( jsonData => setWeatherData(jsonData["list"]) )
        .catch ( error => {setErrMsg('Error: Something went wrong'); console.log(error)} )
    }

    const openDetail = (evt) => {
        navigation.push('WeeklyDetail', {passData:evt} )
    }

    return (
        <ImageBackground source={require('../assets/weatherbg.jpg')} style={{width:'100%', height:'100%'}}>
        <SafeAreaView>
            <View style={styles.inputRow}>
                <TextInput style={styles.inputText} placeholder='Enter city name' onChangeText={ (text) => {setInputCity(text)} } value={inputCity}/>
                <TouchableOpacity style={styles.searchBtn} onPress={retrieveData}>
                    <View><Text style={styles.btnText}>Search City</Text></View>
                </TouchableOpacity> 
            </View>
            <View style={styles.boxSized}>
                <FlatList
                data={weatherData} 
                keyExtractor={ item => item["dt"] } 
                renderItem={ ({item}) => (<ListItem data={item} pressDetail={openDetail}/>) }
                />
                </View>
        </SafeAreaView>

        </ImageBackground>
    )
}

const styles = StyleSheet.create ({
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 40,
        marginHorizontal: 20
    },
    inputText: {
        backgroundColor: 'white',
        flex: 2,
        padding: 10
    },
    searchBtn: {
        backgroundColor: 'indigo',
        flex: 1,
        padding: 10,
        justifyContent:'center'
    },
    btnText: {
        color: 'white',
        textAlign: 'center'
    },
    boxSized: {
        paddingBottom: 250
    }
})