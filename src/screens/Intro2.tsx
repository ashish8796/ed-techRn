import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {customStyles} from '../utils/styles';
import Button from '../components/Screens/Button';
import CreateScreensImg from '../components/Screens/CreateScreensImg';
import Pagination from './Pagination';
import CoolKidsStylingHome from './../assets/images/screens/intro-2/Cool Kids Staying Home.svg';

export default function Intro2() {
  const text = {
    title: 'Learn anytime and anywhere',
    body: 'Quarantine is the perfect time to spend your day learning something new, from anywhere!',
  };

  return (
    <View style={styles.intro2Cont}>
      <Button
        label="Skip"
        handlePress={() => {}}
        buttonStyle={styles.skipButtonStyle}
        textStyle={styles.skipTextStyle}
      />

      <CreateScreensImg SvgImg={CoolKidsStylingHome} text={text} />

      <Pagination currentPage={2} />

      <Button
        label="Next"
        handlePress={() => {}}
        buttonStyle={styles.buttonStyle}
        textStyle={styles.buttonText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  intro2Cont: {
    alignItems: 'center',
    position: 'relative',
    flex: 1,
  },

  buttonStyle: customStyles.buttonStyle,

  buttonText: {...customStyles.buttonText},

  skipButtonStyle: {...customStyles.skip.buttonStyle},
  skipTextStyle: {...customStyles.skip.textStyle},
});
