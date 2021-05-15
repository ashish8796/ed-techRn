import React, {ReactHTMLElement} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg from 'react-native-svg';

interface ScreenText {
  title: string;
  body: string;
}

interface ICreateScreensImgProps {
  text: ScreenText;
  SvgImg: Svg;
}

export default function CreateScreensImg({
  text,
  SvgImg,
}: ICreateScreensImgProps) {
  return (
    <View style={styles.imgContainer}>
      <SvgImg />

      <View style={styles.textContainer}>
        <Text style={[styles.title, styles.text]}>{text.title}</Text>
        <Text style={[styles.body, styles.text]}>{text.body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {},

  textContainer: {
    marginVertical: 8,
  },

  text: {
    textAlign: 'center',
    fontFamily: 'Rubik-medium',
  },

  title: {
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 32,
    color: '#3C3A36',
    marginHorizontal: 16,
    marginVertical: 8,
    paddingHorizontal: 20,
  },

  body: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#78746D',
    paddingHorizontal: 20,
  },
});
