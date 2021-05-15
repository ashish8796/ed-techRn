import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

interface IInputProps {
  // type: string;
  value: string;
  placeholderText: string;
  handleChange: () => void;
  password: boolean;
}

export default function Input({
  value,
  password,
  placeholderText,
  handleChange,
}: // type,
IInputProps) {
  return (
    <TextInput
      style={styles.inputElem}
      value={value}
      onChange={handleChange}
      placeholder={placeholderText}
      placeholderTextColor="#78746D"
    />
  );
}

const styles = StyleSheet.create({
  inputElem: {
    width: 343,
    height: 53,
    padding: 16,
    borderColor: '#BEBAB3',
    borderWidth: 1,
    borderRadius: 12,
    marginVertical: 8,
  },
});
