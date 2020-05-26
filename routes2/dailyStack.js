import dailyWeather from '../components2/dailyWeather';
import {createStackNavigator} from 'react-navigation-stack';

const screens = {
    "Today's Weather": { screen: dailyWeather }
}

export default createStackNavigator (screens);