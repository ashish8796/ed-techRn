import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

interface ILoginSignButtonProps {
  label: string;
  handlePress: () => void;
}

export default function LoginSignButton({
  label,
  handlePress,
}: ILoginSignButtonProps) {
  return (
    <Pressable onPress={handlePress}>
      <Text style={styles.pressableText}>{label}</Text>
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
