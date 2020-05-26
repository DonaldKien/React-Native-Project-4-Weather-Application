import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import homeStack from './dailyStack';
import weeklyStack from './weeklyStack';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const tabNavigator = createBottomTabNavigator ({
    dailyWeather: { 
        screen: homeStack, 
        navigationOptions: {
            tabBarLabel:'Daily Weather', 
            tabBarIcon: ({tintColor}) => (<MaterialCommunityIcons name='weather-cloudy' size={28} color={tintColor} />),
            tabBarOptions: {
                activeTintColor: 'purple',
                inactiveTintColor: 'gray',
              }
        }
    },
    weeklyWeather: { 
        screen: weeklyStack, 
        navigationOptions: {
            tabBarLabel: 'Weekly Weather', 
            tabBarIcon: ({tintColor}) => (<MaterialCommunityIcons name='weather-cloudy-arrow-right' size={28} color={tintColor}/>), 
            tabBarOptions: {
                activeTintColor: 'purple', 
                inactiveTintColor: 'grey'
            }
        } 
    }
});

export default createAppContainer (tabNavigator)