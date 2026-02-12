import React from 'react';
import { ScrollView } from 'react-native';
import StudentInfo from '../components/StudentInfo';
import Projects from '../components/Projects';

const ProfileScreen = () => {
  return (
    <ScrollView>

      <StudentInfo
        fullname="Ana Smith"
        position="React Native Developer"
        description="Passionate mobile developer building cross-platform apps using React Native."
        profileImage={require('../../assets/download.jpg')}
      />

      <Projects image={require('../../assets/download(1).jpg')} />
      <Projects image={require('../../assets/download(2).jpg')} />

    </ScrollView>
  );
};

export default ProfileScreen;
