import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {FlatList, StyleSheet, View, Text, Pressable} from 'react-native';
import CreateIcon from '../../components/CreateIcon';
import CreateTags from '../../components/Screens/CreateTags';
import {customStyles} from '../../utils/styles';
import BellIcon from './../../assets/images/screens/courses/bellIcon.svg';
import SearchIcon from './../../assets/images/screens/courses/searchIcon.svg';
import {styles as searchBoxStyle} from './CreateSearchBox';

interface IHomeNameSectionProps {}

export default function HomeNameSection({}: IHomeNameSectionProps) {
  const navigation = useNavigation();
  const tagList = ['#css', '#UX', '#Swift', '#UI'];

  // const [searchText, setSearchText] = useState<string>('');

  // const handleSearchBox = (text: string): void => {
  //   setSearchText(text);
  // };

  const handleSearchPress = () => {
    navigation.navigate('Results');
  };

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

      <Pressable onPress={handleSearchPress} style={searchBoxStyle.searchBox}>
        <Text style={[searchBoxStyle.searchText, {color: '#78746D'}]}>
          Search course
        </Text>

        <SearchIcon />
      </Pressable>

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
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
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
