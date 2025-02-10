import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigator/StackNavigator'; // Asegúrate de importar correctamente tu StackNavigator

export default function App() {
    return (
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    );
}
