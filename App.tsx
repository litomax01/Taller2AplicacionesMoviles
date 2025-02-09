import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from '../taller2/src/navigator/StackNavigator';

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}