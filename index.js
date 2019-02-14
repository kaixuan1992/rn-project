/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {createAppContainer} from 'react-navigation'//导航不能直接暴露给native组件的需要包裹下
import {AppStackNavigator} from './navigators/AppNavigators'
import {name as appName} from './app.json';
const AppStackNavigatorContainer = createAppContainer(AppStackNavigator)

AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);