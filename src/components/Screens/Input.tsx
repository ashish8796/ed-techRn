import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';

interface IInputProps {
  // type: string;
  value: string;
  placeholderText: string;
  handleChange: (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    name: string,
  ) => void;
  password: boolean;
  name: string;
  secureTextEntry?: boolean;
}

export default function Input({
  value,
  password,
  placeholderText,
  handleChange,
  name,
  secureTextEntry,
}: // type,
IInputProps) {
  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      style={styles.inputElem}
      value={value}
      onChange={e => {
        handleChange(e, name);
      }}
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
