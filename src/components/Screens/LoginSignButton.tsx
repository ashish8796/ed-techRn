import React from 'react';
import {TextStyle} from 'react-native';
import {View, Text, Pressable, StyleSheet, ViewStyle} from 'react-native';

interface ILoginSignButtonProps {
  label: string;
  handlePress: () => void;
  customStyle?: {
    button?: ViewStyle;
    text?: TextStyle;
  };
}

export default function LoginSignButton({
  label,
  handlePress,
  customStyle,
}: ILoginSignButtonProps) {
  return (
    <Pressable onPress={handlePress} style={[customStyle?.button]}>
      <Text style={[styles.pressableText, customStyle?.text]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressableText: {
    marginVertical: 16,
    fontFamily: 'Rubik-Medium',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
    color: '#78746D',
  },
});
