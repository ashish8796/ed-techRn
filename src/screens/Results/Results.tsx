import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GoBack from '../../components/Screens/GoBack';
import {customStyles} from '../../utils/styles';
import {handleGoBack} from '../../utils/utilsFuctions';
import CreateSearchBox from '../Home/CreateSearchBox';

interface IResultsProps {
  text: string;
}

export default function Results({text}: IResultsProps) {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState<string>('');

  const handleSearchChange = (text: string): void => {
    console.log(text);
    setSearchText(text);
  };

  const handleSearchPress = (): void => {};

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
    </View>
  );
}

const styles = StyleSheet.create({
  resultContainer: {
    ...customStyles.screenWrapper,
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
});
