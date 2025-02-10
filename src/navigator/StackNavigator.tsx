import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  }from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetail';
import CartScreen from '../screens/CartScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { CartProvider } from '../context/CartContext';


export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  ProductDetail: { product: { id: number; title: string; price: number; image: string } };
  Cart: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Inicio de Sesión' }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tienda' }} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Detalle del Producto' }} />
          <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Carrito de Compras' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
