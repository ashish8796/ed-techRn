import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {customStyles} from '../utils/styles';
import CreateScreensImg from '../components/Screens/CreateScreensImg';
import CoolKidsStylingHome from './../assets/images/screens/intro-2/Cool Kids Staying Home.svg';

export default function Intro2() {
  const text = {
    title: 'Learn anytime and anywhere',
    body: 'Quarantine is the perfect time to spend your day learning something new, from anywhere!',
  };

  return (
    <View style={styles.intro2Cont}>
      <CreateScreensImg SvgImg={CoolKidsStylingHome} text={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  intro2Cont: customStyles.introContainer,

  buttonStyle: customStyles.buttonStyle,

  buttonText: {...customStyles.buttonText},
});
