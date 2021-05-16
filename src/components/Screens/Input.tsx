import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

interface IInputProps {
  // type: string;
  value: string;
  placeholderText: string;
  handleChange?: any;
  secureTextEntry?: boolean;
}

export default function Input({
  value,
  placeholderText,
  handleChange,
  secureTextEntry,
}: // type,
IInputProps) {
  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      style={styles.inputElem}
      value={value}
      onChangeText={handleChange}
      placeholder={placeholderText}
      placeholderTextColor="#78746D"
      autoCorrect={false}
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
