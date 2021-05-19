import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import CreateIcon from '../../components/CreateIcon';
import CreateTags from '../../components/Screens/CreateTags';
import {customStyles} from '../../utils/styles';
import BellIcon from './../../assets/images/screens/courses/bellIcon.svg';
import CreateSearchBox from './CreateSearchBox';

interface IHomeNameSectionProps {}

export default function HomeNameSection({}: IHomeNameSectionProps) {
  const tagList = ['#css', '#UX', '#Swift', '#UI'];

  return (
    <View style={styles.nameSection}>
      <View style={styles.header}>
        <View>
          <Text style={styles.subtitle}>Hello,</Text>

          <Text style={styles.userName}>Juana Antonieta</Text>
        </View>

        <View style={[styles.bellIconBox, customStyles.center]}>
          <CreateIcon Icon={BellIcon} handlePress={() => {}} />
        </View>
      </View>

      <CreateSearchBox
        placeholderText="Search Course"
        value=""
        handleChange={() => {}}
      />

      <View style={styles.categoryBox}>
        <Text style={styles.categoryText}>Category:</Text>

        <View style={styles.tagBox}>
          <FlatList
            data={tagList}
            renderItem={tag => (
              <CreateTags
                tagName={tag.item}
                tagStyle={styles.tagStyle}
                handlePress={() => {}}
              />
            )}
            keyExtractor={tag => tag}
            horizontal
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nameSection: {
    width: 343,
  },

  bellIconBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderColor: '#BEBAB3',
    borderWidth: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  userName: {
    ...customStyles.normalText.title,
    fontSize: 32,
    lineHeight: 42,
    fontWeight: '700',
    color: '#333333',
  },

  subtitle: {
    ...customStyles.normalText.body,
    color: '#3C3A36',
    fontSize: 16,
    lineHeight: 26,
    marginVertical: 4,
  },

  categoryBox: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  },

  categoryText: {...customStyles.normalText.body, color: '#3C3A36'},

  tagBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },

  tagStyle: {
    height: 24,
    borderRadius: 12,
    paddingVertical: 3,
    paddingHorizontal: 11,
    marginLeft: 15,
  },
});
