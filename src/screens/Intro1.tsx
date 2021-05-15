import React from 'react';
import {StyleSheet, View} from 'react-native';
import CreateScreensImg from '../components/Screens/CreateScreensImg';
import CoolKidsLongDistance from './../assets/images/screens/intro-1/Cool Kids Long Distance Relationship.svg';
import {customStyles} from '../utils/styles';

export default function Intro1() {
  const text = {
    title: 'Learn anytime and anywhere',
    body: 'Quarantine is the perfect time to spend your day learning something new, from anywhere!',
  };

  return (
    <View style={styles.intro1Cont}>
      <CreateScreensImg SvgImg={CoolKidsLongDistance} text={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  intro1Cont: customStyles.introContainer,

  buttonStyle: customStyles.buttonStyle,

  buttonText: {...customStyles.buttonText},
});
