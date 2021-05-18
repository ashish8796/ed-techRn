import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GoBack from '../../components/Screens/GoBack';
import {customStyles} from '../../utils/styles';
import {handleGoBack} from '../../utils/utilsFuctions';
import CoolKidsOnWheel from './../../assets/images/screens/settings/Cool Kids On Wheels.svg';
import CreateOption from './CreateOption';
import NotificationIcon from './../../assets/images/screens/settings/Settings Information Icons.svg';
import UserIcon from './../../assets/images/screens/settings/profileIcon.svg';
import EmailIcon from './../../assets/images/screens/settings/emailIcon.svg';
import PasswordIcon from './../../assets/images/screens/settings/passwordIcon.svg';
import NextIcon from './../../assets/images/screens/settings/nextIcon.svg';
import {useState} from 'react';
import ToggleNotification from './ToggleNotification';

export default function Settings() {
  const navigation = useNavigation();
  const [isNotificationOn, setIsNotificationOn] = useState(true);

  return (
    <View style={styles.settingBox}>
      <View style={[styles.topBar, customStyles.center]}>
        <GoBack
          handlePress={() => handleGoBack(navigation)}
          goStyle={styles.goButton}
        />

        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={[styles.avatarBox, customStyles.center]}>
        <CoolKidsOnWheel />
      </View>

      <View style={styles.options}>
        <View style={styles.notificationBox}>
          <View style={styles.NotificationTextBox}>
            <NotificationIcon />
            <Text style={styles.notificationText}>Notifications</Text>
          </View>

          <ToggleNotification
            isEnabled={isNotificationOn}
            handleValueChange={() => {
              setIsNotificationOn(!isNotificationOn);
            }}
          />
        </View>

        <Text style={styles.tag}>Account information</Text>

        <CreateOption
          title="Name"
          body="Jauna Antonieta"
          Icon1={UserIcon}
          Icon2={NextIcon}
          handlePress={() => {}}
        />

        <CreateOption
          title="Email"
          body="juanita123@gmail.com"
          Icon1={EmailIcon}
          Icon2={NextIcon}
          handlePress={() => {}}
        />

        <CreateOption
          title="Password"
          body="changed 2 weeks ago"
          Icon1={PasswordIcon}
          Icon2={NextIcon}
          handlePress={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  settingBox: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    alignItems: 'center',
    flex: 1,
  },

  topBar: customStyles.topBar.container,
  goButton: {width: 40, height: 40, borderRadius: 20, marginLeft: 0},
  title: customStyles.topBar.title,

  avatarBox: {
    marginTop: 24,
  },

  options: {},

  tag: {
    ...customStyles.normalText.title,
    fontSize: 20,
    textAlign: 'left',
    marginTop: 16,
    width: 343,
  },

  notificationBox: {
    flexDirection: 'row',
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: 343,
    height: 82,
    borderColor: '#BEBAB3',
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
  },

  NotificationTextBox: {
    flexDirection: 'row',
    flex: 1,
  },

  notificationText: {...customStyles.normalText.title, marginLeft: 12},
});
