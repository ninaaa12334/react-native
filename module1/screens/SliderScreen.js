import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const SliderScreen = () => {
  const data = [
    { id: 1, title: 'Slide 1', color: '#ff6b6b' },
    { id: 2, title: 'Slide 2', color: '#4ecdc4' },
    { id: 3, title: 'Slide 3', color: '#45b7d1' },
    { id: 4, title: 'Slide 4', color: '#f9ca24' },
  ];

  const renderItem = (item) => (
    <View style={[styles.slide, { backgroundColor: item.color }]}>
      <Text style={styles.slideText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Slider Screen</Text>
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        autoplay={true}
        autoplayTimeout={3}
      >
        {data.map((item) => (
          <View key={item.id} style={styles.slide}>
            {renderItem(item)}
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  slideText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SliderScreen;