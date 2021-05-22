import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GoBack from '../../components/Screens/GoBack';
import {handleGoBack} from '../../utils/utilsFuctions';
import CreateSearchBox from '../Home/CreateSearchBox';

interface IResultsProps {
  text: string;
}

export default function Results({text}: IResultsProps) {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState<string>('');

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
          handleChange={() => {}}
          value={searchText}
          handleSearchPress={() => {}}
          customStyles={{flex: 1}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resultContainer: {},

  searchBox: {flexDirection: 'row', alignItems: 'center'},

  goBackButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
});
