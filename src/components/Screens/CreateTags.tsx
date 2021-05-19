import React from 'react';
import {Pressable} from 'react-native';
import {View, Text, ViewStyle, StyleSheet} from 'react-native';
import {customStyles} from '../../utils/styles';

interface ICreateTagsProps {
  tagStyle: ViewStyle;
  tagName: string;
  handlePress: () => void;
}

export default function CreateTags({
  tagName,
  tagStyle,
  handlePress,
}: ICreateTagsProps) {
  return (
    <View style={[styles.tagBox, tagStyle, customStyles.center]}>
      <Pressable onPress={handlePress}>
        <Text style={styles.tagText}>{tagName}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  tagBox: {
    backgroundColor: '#65AAEA',
  },

  tagText: {
    ...customStyles.normalText.title,
    fontSize: 14,
    lineHeight: 18,
    color: '#F2F2F2',
  },
});
