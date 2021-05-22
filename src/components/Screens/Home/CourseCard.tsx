import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import Svg from 'react-native-svg';
import {featureImgObj} from '../../../utils/featureImg';
import {customStyles} from '../../../utils/styles';
import CreateIcon from '../../CreateIcon';
import CreateTags from '../CreateTags';

export interface Course {
  name: string;
  cost: number;
  id: number;
  body: string;
  duration: string;
  img: string;
}

interface ICourseCardProps {
  course: Course;
}

export default function CourseCard({course}: ICourseCardProps) {
  const {name, cost, duration, img, body, id} = course;
  return (
    <View style={styles.cardWrapper}>
      <View
        style={[
          styles.courseImg,
          {backgroundColor: id % 2 ? '#F8F2EE' : '#E6EDF4'},
        ]}>
        <CreateIcon Icon={featureImgObj[img]} handlePress={() => {}} />

        <View style={styles.tagBox}>
          <CreateTags
            tagName={`$ ${cost}`}
            handlePress={() => {}}
            tagStyle={styles.tagStyle}
          />
        </View>
      </View>

      <View style={styles.courseTextBox}>
        <View>
          <Text style={styles.timeText}>{duration}</Text>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.body}>{body}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    borderColor: '#BEBAB3',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 12,
  },

  courseImg: {
    height: 194,
    paddingTop: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  tagBox: {
    flexDirection: 'row',
    marginLeft: 'auto',
    paddingHorizontal: 16,
    marginVertical: 10,
  },

  tagStyle: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 12,
  },

  courseTextBox: {
    padding: 16,
    paddingBottom: 8,
  },

  timeText: {
    ...customStyles.normalText.title,
    fontSize: 14,
    lineHeight: 18,
    color: '#5BA092',
    textAlign: 'left',
  },

  title: {
    ...customStyles.normalText.title,
    fontSize: 24,
    lineHeight: 32,
    marginVertical: 4,
    textAlign: 'left',
  },

  body: {...customStyles.normalText.body, color: '#3C3A36'},
});
