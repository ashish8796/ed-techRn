import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import CreateIcon from '../../components/CreateIcon';
import SearchIcon from './../../assets/images/screens/courses/searchIcon.svg';

interface ICreateSearchBoxProps {
  placeholderText: string;
  handleChange: () => void;
  value: string;
}

export default function CreateSearchBox({
  placeholderText,
  handleChange,
  value,
}: ICreateSearchBoxProps) {
  return (
    <View style={styles.searchBox}>
      <TextInput
        placeholder={placeholderText}
        style={styles.searchText}
        placeholderTextColor="#78746D"
      />

      <CreateIcon
        Icon={SearchIcon}
        iconStyle={styles.icon}
        handlePress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    width: 343,
    height: 56,
    borderRadius: 12,
    padding: 16,
    borderColor: '#BEBAB3',
    borderWidth: 1,
    marginVertical: 12,
    flexDirection: 'row',
    // justifyContent: 'center',
  },

  searchText: {
    fontSize: 16,
    lineHeight: 21,
    flex: 1,
    marginRight: 16,
  },

  icon: {},
});
