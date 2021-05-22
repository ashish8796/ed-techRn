import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {customStyles} from '../../utils/styles';
import HomeNameSection from './HomeNameSection';
import HomeCourseSection from './HomeCourseSection';
import courses from './../../utils/courses.json';

export default function Home() {
  return (
    <View style={styles.homeContainer}>
      <HomeNameSection />

      <HomeCourseSection courses={courses} />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    ...customStyles.screenWrapper,
    flex: 1,
  },

  courseSection: {},
});
