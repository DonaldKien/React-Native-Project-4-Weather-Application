import {createStackNavigator} from 'react-navigation-stack';
import weeklyWeather from '../components2/weeklyWeather';
import weeklyListDetail from '../components2/weeklyListDetail';

const screens = {
    'This Week Weather': { 
        screen: weeklyWeather, 
        navigationOptions: {title:'This Week Weather'}
    },
    'WeeklyDetail': { 
        screen: weeklyListDetail, 
        navigationOptions: {title:'Weekly weather details'} }
}

export default createStackNavigator (screens);