import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {customStyles} from '../../utils/styles';
import CoolKidsStanding from './../../assets/images/screens/courses/coolKidsStanding.svg';

export default function CourseNotFound() {
  return (
    <View style={[styles.noCourseBox, customStyles.center]}>
      <View>
        <CoolKidsStanding />
      </View>

      <View>
        <Text style={styles.title}>Course not found</Text>
        <Text style={styles.body}>
          Try searching the course with a different keyword
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  noCourseBox: {
    width: '100%',
    marginTop: 103,
  },

  title: {
    ...customStyles.normalText.title,
    fontSize: 24,
    lineHeight: 32,
  },

  body: {
    ...customStyles.normalText.body,
    marginTop: 8,
    fontSize: 16,
    textAlign: 'center',
    width: 341,
  },
});
