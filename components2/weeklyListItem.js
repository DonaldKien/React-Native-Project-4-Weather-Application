import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export default function WeeklyListItem (props) {

    const weeklyData = props.data

    return (
        <TouchableOpacity onPress={ () => props.pressDetail(weeklyData) }>
            <View style={styles.container}>
                <View style={styles.icon}>
                <Image source={{uri:'https://openweathermap.org/img/wn/'+weeklyData["weather"][0]["icon"]+'@2x.png'}} style={{width:100, height:100}}/>
                </View>
                <View style={styles.list}>
                    <Text>{new Date(weeklyData.dt*1000).toDateString()}</Text>
                    <Text>{weeklyData["weather"][0]['main']}</Text>
                    <Text>{((weeklyData["temp"]["day"])-273.15).toFixed(2)}°C</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    icon: {
        flex: 3,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    list: {
        justifyContent:'center',
        flex: 4
    },
})