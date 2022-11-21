/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';


const Root = () => (
    <NavigationContainer>
        <App/>
    </NavigationContainer>
)

AppRegistry.registerComponent(appName, () => Root);
