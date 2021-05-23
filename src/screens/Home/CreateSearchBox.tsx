import React from 'react';
import {View, Text, StyleSheet, TextInput, ViewStyle} from 'react-native';
import CreateIcon from '../../components/CreateIcon';
import SearchIcon from './../../assets/images/screens/courses/searchIcon.svg';

interface ICreateSearchBoxProps {
  placeholderText: string;
  handleChange: (text: string) => void;
  value: string;
  handleSearchPress: () => void;
  customStyles?: ViewStyle;
}

export default function CreateSearchBox({
  placeholderText,
  handleChange,
  value,
  handleSearchPress,
  customStyles,
}: ICreateSearchBoxProps) {
  return (
    <View style={[styles.searchBox, customStyles]}>
      <TextInput
        placeholder={placeholderText}
        style={styles.searchText}
        placeholderTextColor="#78746D"
        onChangeText={handleChange}
        value={value}
      />

      <CreateIcon
        Icon={SearchIcon}
        iconStyle={styles.icon}
        handlePress={handleSearchPress}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  searchBox: {
    height: 56,
    borderRadius: 12,
    paddingHorizontal: 16,
    borderColor: '#BEBAB3',
    borderWidth: 1,
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchText: {
    fontSize: 16,
    lineHeight: 21,
    flex: 1,
    marginRight: 16,
    color: '#78746D',
  },

  icon: {},
});
