import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {Course} from '../../components/Screens/Home/CourseCard';
import {State} from '../../store/tsType';
import allCourses from './../../utils/courses.json';

export default function ProductDetails() {
  const courses: Course[] = allCourses;

  const {id} = useSelector((state: State) => state.product);

  const course: Course = courses.find(course => course.id === id)!;

  console.log(course);
  return (
    <View>
      <Text></Text>
    </View>
  );
}
