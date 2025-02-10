import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Image, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function HomeScreen({ navigation }: any) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get<Product[]>('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al cargar los productos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
            style={styles.card}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 10 },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: { backgroundColor: 'white', padding: 10, marginBottom: 10, borderRadius: 10, alignItems: 'center' },
  image: { width: 100, height: 150, marginBottom: 10 },
  title: { fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
  price: { fontSize: 16, color: '#008000' },
});
