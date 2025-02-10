import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetail';
import CartScreen from '../screens/CartScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { CartProvider } from '../context/CartContext';

export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
};

export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    ProductDetail: { product: { id: number; title: string; price: number; image: string } };
    Cart: undefined;
    Register: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const usersDB: User[] = [
    { id: 1, name: 'Viviana Flores', email: 'vflores@gmail.com', password: '123456' },
    { id: 2, name: 'Ariel Ron', email: 'aron@gmail.com', password: '123456' },
];

export default function Navigation() {
    const [users, setUsers] = useState(usersDB);

    const addUser = (newUser: User) => {
        setUsers(prevUsers => [...prevUsers, newUser]);
    };

    return (
        <CartProvider>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login">
                    {props => <LoginScreen {...props} users={users} />}
                </Stack.Screen>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tienda' }} />
                <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Detalle del Producto' }} />
                <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Carrito de Compras' }} />
                <Stack.Screen name="Register">
                    {props => <RegisterScreen {...props} users={users} addUser={addUser} />}
                </Stack.Screen>
            </Stack.Navigator>
        </CartProvider>
    );
}
