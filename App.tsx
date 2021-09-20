import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes'

const App: React.FC = () => (
    <NavigationContainer>  
        <StatusBar barStyle="light-content" backgroundColor="#17181F"/>
        <View style={{ flex: 1, backgroundColor: '#17181F' }}>
            <Routes />
        </View>
    </NavigationContainer>
);
 
export default App;