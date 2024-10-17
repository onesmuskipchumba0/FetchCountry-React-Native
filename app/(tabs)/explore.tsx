import React from 'react';
import { View, Text, StyleSheet, Image, Linking, Button, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; // Expo Ionicons

const AboutScreen = () => {
  const openGitHub = () => {
    Linking.openURL('https://github.com/onesmuskipchumba0');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.profileImage}
        source={require('../../assets/images/logo_2.png')} // Replace with your image URL
      />
      <Text style={styles.name}>Onesmus Bett</Text>
      <Text style={styles.title}>Computer science Student</Text>

      <View style={styles.section}>
        <Ionicons name="information-circle-outline" size={24} color="black" />
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionContent}>
          I am passionate about technology and development, currently working on exciting projects
          involving Django, React, and React Native. My interests include web technologies, mobile
          apps, and innovative problem-solving.
        </Text>
      </View>

      <View style={styles.section}>
        <Ionicons name="code-outline" size={24} color="black" />
        <Text style={styles.sectionTitle}>Projects</Text>
        <Text style={styles.sectionContent}>
          I am actively involved in projects such as M-Pesa integrations, React Native apps, and
          Bootstrap-based web pages. I also enjoy experimenting with Tailwind CSS for frontend design.
        </Text>
      </View>

      <Button title="Visit My GitHub" onPress={openGitHub} color="#333" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'#FFC107'
  },
  title: {
    fontSize: 18,
    color: '#f4f4f4',
    marginBottom: 15,
  },
  section: {
    width: '100%',
    marginBottom: 15,
    alignItems: 'flex-start',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
    color:'#FFECB3'
  },
  sectionContent: {
    fontSize: 16,
    color: 'gray',
    lineHeight: 22,
  },
});

export default AboutScreen;
