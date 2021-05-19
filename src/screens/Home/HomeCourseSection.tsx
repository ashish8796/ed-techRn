import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CourseCard from '../../components/Screens/Home/CourseCard';
import {customStyles} from '../../utils/styles';
import CoolKidsDiscussing from './../../assets/images/screens/courses/coolKidsDiscussion.svg';

export default function HomeCourseSection() {
  return (
    <ScrollView style={styles.courseSection}>
      <CourseCard
        title="UI"
        body="Advanced mobile interface design"
        time="3 h 30 min"
        Icon={CoolKidsDiscussing}
        cost={50}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  courseSection: {},
});
