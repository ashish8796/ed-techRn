import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import CoolKids from './../assets/images/screens/splash/coolKidsOnWheels.svg';

export default function Splash() {
  return (
    <View style={styles.splashContainer}>
      <CoolKids />
      <Text style={styles.splashText}>CodeFactory</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    borderColor: 'red',
    borderWidth: 2,
    flex: 1,
  },

  splashText: {
    fontSize: 40,
    lineHeight: 46,
    fontWeight: 'bold',
    fontFamily: 'Rubik-Bold',
    textAlign: 'center',
    marginTop: 16,
    color: '#3C3A36',
  },
});
