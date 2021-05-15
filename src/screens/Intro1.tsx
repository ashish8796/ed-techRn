import React from 'react';
import {StyleSheet, View} from 'react-native';
import CreateScreensImg from '../components/Screens/CreateScreensImg';
import CoolKidsLongDistance from './../assets/images/screens/intro-1/Cool Kids Long Distance Relationship.svg';
import Button from '../components/Screens/Button';
import {customStyles} from '../utils/styles';
import Pagination from '../components/Pagination';

export default function Intro1() {
  const text = {
    title: 'Learn anytime and anywhere',
    body: 'Quarantine is the perfect time to spend your day learning something new, from anywhere!',
  };

  return (
    <View style={styles.intro1Cont}>
      <Button
        label="Skip"
        handlePress={() => {}}
        buttonStyle={styles.skipButtonStyle}
        textStyle={styles.skipTextStyle}
      />

      <CreateScreensImg SvgImg={CoolKidsLongDistance} text={text} />

      <Pagination currentPage={1} />

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
  intro1Cont: {
    alignItems: 'center',
    position: 'relative',
    flex: 1,
  },

  buttonStyle: customStyles.buttonStyle,

  buttonText: {...customStyles.buttonText},

  skipButtonStyle: {...customStyles.skip.buttonStyle},
  skipTextStyle: {...customStyles.skip.textStyle},
});
