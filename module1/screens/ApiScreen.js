import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const ApiScreen = () => {
  const [data, setData] = useState([]);
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data.slice(0, 10)); // Get first 10 posts
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const generateApiKey = () => {
    const key = uuidv4();
    setApiKey(key);
  };

  useEffect(() => {
    fetchData();
    generateApiKey();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.body}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>API Screen</Text>
      <Text style={styles.apiKey}>API Key: {apiKey}</Text>
      <Button title="Generate New API Key" onPress={generateApiKey} />
      <Button title="Fetch Data" onPress={fetchData} />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  apiKey: {
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
  },
  list: {
    marginTop: 20,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});

export default ApiScreen;