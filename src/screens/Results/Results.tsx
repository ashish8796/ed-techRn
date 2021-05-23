import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CourseNotFound from '../../components/Screens/CourseNotFound';
import GoBack from '../../components/Screens/GoBack';
import CourseCard, {Course} from '../../components/Screens/Home/CourseCard';
import {customStyles} from '../../utils/styles';
import {handleGoBack} from '../../utils/utilsFuctions';
import CreateSearchBox from '../Home/CreateSearchBox';
import allCourses from './../../utils/courses.json';

// interface IResultsProps {
//   text: string;
// }

export default function Results() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState<string>('');
  const [courses, setCourses] = useState<Array<Course>>([]);
  const [isNoCourse, setIsNoCourse] = useState<boolean>(false);

  const handleSearchChange = (text: string): void => {
    setSearchText(text);
  };

  const handleSearchPress = (): void => {
    const newArr = allCourses.filter((course: Course) =>
      new RegExp(searchText).test(course.name),
    );

    setIsNoCourse(!newArr.length);

    setCourses(newArr);
  };

  useEffect(() => {
    return () => {
      setSearchText('');
      setIsNoCourse(false);
    };
  }, []);

  return (
    <View style={styles.resultContainer}>
      <View style={styles.searchBox}>
        <GoBack
          handlePress={() => {
            handleGoBack(navigation);
          }}
          goStyle={styles.goBackButton}
        />

        <CreateSearchBox
          placeholderText="Search course"
          handleChange={handleSearchChange}
          value={searchText}
          handleSearchPress={handleSearchPress}
          customStyles={styles.searchCustomStyle}
        />
      </View>

      <ScrollView
        contentContainerStyle={styles.courseContainer}
        showsVerticalScrollIndicator={false}>
        {courses.length > 0 && (
          <Text style={styles.totalResultText}>{courses.length} Results</Text>
        )}

        {courses.length > 0 &&
          courses.map((course: Course) => (
            <CourseCard course={course} key={course.id} />
          ))}

        {isNoCourse && <CourseNotFound />}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  resultContainer: {
    ...customStyles.screenWrapper,
    flex: 1,
    paddingBottom: 10,
    // borderColor: 'blue',
    // borderWidth: 1,
  },

  searchCustomStyle: {
    flex: 1,
    marginLeft: 8,
  },

  searchBox: {flexDirection: 'row', alignItems: 'center'},

  goBackButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginLeft: 0,
  },

  totalResultText: {
    ...customStyles.normalText.title,
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'left',
  },

  courseContainer: {},
});
