import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useCart } from '../context/CartContext';

export default function CartScreen() {
  const { cart, removeFromCart } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const iva = subtotal * 0.12;
  const total = subtotal + iva;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de Compras</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.productTitle}>{item.title} x {item.quantity}</Text>
            <Text style={styles.productPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
            <Button title="Eliminar" onPress={() => removeFromCart(item.id)} />
          </View>
        )}
      />
      <Text style={styles.total}>Subtotal: ${subtotal.toFixed(2)}</Text>
      <Text style={styles.total}>IVA (12%): ${iva.toFixed(2)}</Text>
      <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
      <Button title="Realizar Compra" onPress={() => alert("Compra realizada con éxito!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  item: { padding: 10, marginVertical: 5, backgroundColor: '#f5f5f5' },
  productTitle: { fontSize: 16, fontWeight: 'bold' },
  productPrice: { fontSize: 14, color: '#008000' },
  total: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
});
