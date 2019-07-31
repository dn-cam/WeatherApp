
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Weather = ({ weather, temperature }) => {
    temperature2 = (temperature*1.8 +32)
    return (
      <View style={styles.weatherContainer}>
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons size={48} name="weather-sunny" color={'#fff'} />
          <Text style={styles.tempText}>{temperature}˚</Text>
          <Text style={styles.tempText2}>{temperature2} f</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>The weather seems {weather} today</Text>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: '#f7b733'
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempText: {
    fontSize: 48,
    color: '#fff'
  },
  tempText2: {
    fontSize: 24,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 48,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});

export default Weather;