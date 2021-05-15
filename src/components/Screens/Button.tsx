import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

interface IButtonProps {
  label: string;
  handlePress: () => void;
  buttonStyle: any;
  textStyle: any;
  customStyleViaComponent?: {};
}

export default function Button({
  label,
  handlePress,
  buttonStyle,
  textStyle,
  customStyleViaComponent,
}: IButtonProps) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[buttonStyle, customStyleViaComponent]}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {},
});
