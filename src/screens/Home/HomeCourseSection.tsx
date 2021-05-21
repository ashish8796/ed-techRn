import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CourseCard, {Course} from '../../components/Screens/Home/CourseCard';
import {customStyles} from '../../utils/styles';
import CoolKidsDiscussing from './../../assets/images/screens/courses/coolKidsDiscussion.svg';

interface IHomeCourseSectionProps {
  courses: Array<Course>;
}

export default function HomeCourseSection({courses}: IHomeCourseSectionProps) {
  return (
    <ScrollView style={styles.courseSection}>
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  courseSection: {},
});
