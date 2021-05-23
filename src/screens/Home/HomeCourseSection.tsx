import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CourseCard, {Course} from '../../components/Screens/Home/CourseCard';
import {customStyles} from '../../utils/styles';

interface IHomeCourseSectionProps {
  courses: Array<Course>;
}

export default function HomeCourseSection({courses}: IHomeCourseSectionProps) {
  return (
    <ScrollView
      style={styles.courseSection}
      showsVerticalScrollIndicator={false}>
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  courseSection: {},
});
