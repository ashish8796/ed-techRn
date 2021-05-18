import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Svg from 'react-native-svg';
import {customStyles} from '../../utils/styles';
import NextIcon from './../../assets/images/screens/settings/nextIcon.svg';
import ToggleNotification from './ToggleNotification';

interface ICreateOption {
  title: string;
  body: string;
  Icon1: Svg;
  Icon2: Svg;
  handlePress: () => void;
}

export default function CreateOption({
  title,
  body = '',
  Icon1,
  Icon2,
  handlePress,
}: ICreateOption) {
  return (
    <View style={styles.OptionBox}>
      <View style={styles.leftSection}>
        <Icon1 />
        <View style={styles.textBox}>
          <Text style={styles.title}>{title}</Text>
          {body.length && <Text style={styles.body}>{body}</Text>}
        </View>
      </View>

      <Pressable onPress={handlePress} style={styles.pressableIcon}>
        <Icon2 />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  OptionBox: {
    width: 343,
    height: 82,
    borderColor: '#BEBAB3',
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 16,
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  textBox: {
    marginLeft: 12,
  },

  title: {
    ...customStyles.normalText.title,
    textAlign: 'left',
  },

  pressableIcon: {},

  icon: {
    // backgroundColor: '#5BA092',
  },

  body: customStyles.normalText.body,
});
