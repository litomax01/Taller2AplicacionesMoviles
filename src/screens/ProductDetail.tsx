import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { useCart } from '../context/CartContext';
import { RootStackParamList } from '../navigator/StackNavigator';

type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

export default function ProductDetailScreen({ route, navigation }: { route: ProductDetailScreenRouteProp; navigation: any }) {
  const { product } = route.params;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.total}>Total: ${(product.price * quantity).toFixed(2)}</Text>

      <View style={styles.quantityContainer}>
        <Button title="-" onPress={() => quantity > 1 && setQuantity(quantity - 1)} />
        <Text style={styles.quantityText}>{quantity}</Text>
        <Button title="+" onPress={() => setQuantity(quantity + 1)} />
      </View>

      <Button title="Agregar al carrito" onPress={() => addToCart({ ...product, quantity })} />
      <Button title="Ver carrito" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  image: { width: 200, height: 250, marginBottom: 10 },
  title: { fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  price: { fontSize: 18, color: '#008000' },
  total: { fontSize: 16, fontWeight: 'bold', marginVertical: 10 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  quantityText: { fontSize: 16, fontWeight: 'bold', marginHorizontal: 10 },
});
