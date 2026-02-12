import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const StudentInfo = ({ fullname, position, description, profileImage }) => {
  return (
    <View style={styles.container}>
      <Image source={profileImage} style={styles.image} />

      <Text style={styles.name}>{fullname}</Text>
      <Text style={styles.position}>{position}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  position: {
    fontSize: 18,
    color: 'gray',
  },
  description: {
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
});

export default StudentInfo;
