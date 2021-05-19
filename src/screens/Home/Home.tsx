import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CreateIcon from '../../components/CreateIcon';
import {customStyles} from '../../utils/styles';
import HomeNameSection from './HomeNameSection';
import HomeCourseSection from './HomeCourseSection';

export default function Home() {
  return (
    <View style={styles.homeContainer}>
      <HomeNameSection />

      <HomeCourseSection />
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
