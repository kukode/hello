/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
 import logStack from './src/Navigation/ParentNavigation';
import StackNavigate from './src/Navigation/StackNavigation'
// import Intro from './src/Screen/Intro'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => logStack);
