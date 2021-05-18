import React from 'react';
import {Platform} from 'react-native';
import {UIManager} from 'react-native';
import {LayoutAnimation} from 'react-native';
import {View, StyleSheet, Pressable} from 'react-native';

interface IToggleNotificationProps {
  isEnabled: boolean;
  handleValueChange: () => void;
}

export default function ToggleNotification({
  isEnabled,
  handleValueChange,
}: IToggleNotificationProps) {
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  LayoutAnimation.configureNext(
    LayoutAnimation.create(150, LayoutAnimation.Types.easeInEaseOut, 'scaleX'),
  );

  return (
    <View>
      <Pressable style={styles.container} onPress={handleValueChange}>
        <View
          style={[
            styles.rectangle,
            {backgroundColor: isEnabled ? '#5BA092' : '#BEBAB3'},
          ]}></View>
        <View
          style={[
            styles.circle,
            {
              backgroundColor: isEnabled ? '#5BA092' : '#BEBAB3',
              left: isEnabled ? 16 : 4,
            },
          ]}></View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },

  rectangle: {
    width: 32,
    height: 8,
    borderRadius: 4.5,
  },

  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: '#F8F2EE',
    borderWidth: 4,
    position: 'absolute',
    top: 10,
  },
});
