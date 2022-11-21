/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from "native-base";



const Root = () => (
    <NavigationContainer>
        <NativeBaseProvider>
            <App/>
        </NativeBaseProvider>
    </NavigationContainer>
)

AppRegistry.registerComponent(appName, () => Root);
