import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Pagination from './../components/Pagination';
import CreateScreensImg from '../components/Screens/CreateScreensImg';
import {customStyles} from '../utils/styles';
import coolKidsHighTech from './../assets/images/screens/intro-3/Cool Kids High Tech.svg';

export default function Intro3() {
  const text = {
    title: 'Improve your skills',
    body: 'Quarantine is the perfect time to spend your day learning something new, from anywhere!',
  };

  return (
    <View style={styles.intro1Cont}>
      <CreateScreensImg SvgImg={coolKidsHighTech} text={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  intro1Cont: customStyles.introContainer,

  buttonStyle: customStyles.buttonStyle,

  buttonText: {...customStyles.buttonText},
});
