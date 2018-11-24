import React from 'react';
import {createStackNavigator} from 'react-navigation';
import QuotesScreen from '../Screen/Quotes';
import HomeScreen from '../Screen/Home';

export default StackNavigate = createStackNavigator({
    Home : {
        screen : HomeScreen,
        navigationOptions : () =>({
            title : 'Screen 1'
        })
    },
    Quote : {
        screen : QuotesScreen,
        navigationOptions : () =>({
            title : 'Screen 2'
        })
    }

},{
    initialRouteName: 'Quote'
})