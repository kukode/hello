import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../Screen/Home';

export default StackNavigate = createStackNavigator({
    Home : {
        screen : HomeScreen,
        navigationOptions : () =>({
            title : 'Screen 1'
        })
    },

},{
    initialRouteName: 'Home'
})