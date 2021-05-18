import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GoBack from '../components/Screens/GoBack';
import LoginSignButton from '../components/Screens/LoginSignButton';
import TabBar from '../components/Screens/TabBar';
import {customStyles} from '../utils/styles';
import {handleGoBack} from '../utils/utilsFuctions';
import CoolKidsBust from './../assets/images/screens/profile/Cool Kids Bust.svg';

interface IProfileProps {}

export default function Profile({}: IProfileProps) {
  const navigation = useNavigation();

  const handleLogOut = () => {
    AsyncStorage.setItem('isAuth', 'false');

    // navigation.navigate('Login');
  };

  return (
    <View style={[styles.profileWrapper]}>
      <View style={[styles.topBar, customStyles.center]}>
        <GoBack
          handlePress={() => handleGoBack(navigation)}
          goStyle={styles.goStyle}
        />

        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={[styles.avatarBox, customStyles.center]}>
        <View style={[styles.avatar, customStyles.center]}>
          <CoolKidsBust />
        </View>
      </View>

      <View>
        {['Your Courses', 'Saved', 'Payment'].map(item => (
          <View key={item} style={[styles.optionBox, customStyles.center]}>
            <Text style={styles.optionText}>{item}</Text>
          </View>
        ))}
      </View>

      <LoginSignButton
        label="Log Out"
        handlePress={handleLogOut}
        customStyle={{text: {marginVertical: 8}, button: {marginTop: 0}}}
      />

      {/* <TabBar /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  profileWrapper: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
  },

  avatarBox: {
    width: 172,
    height: 172,
    marginTop: 32,
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderColor: '#65AAEA',
    borderWidth: 4,
    backgroundColor: '#F8F2EE',
    overflow: 'hidden',
    paddingTop: 8,
  },

  goStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  topBar: customStyles.topBar.container,

  title: customStyles.topBar.title,

  optionBox: {
    width: 343,
    height: 80,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderColor: '#BEBAB3',
    borderWidth: 1,
    marginVertical: 8,
  },

  optionText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#3C3A36',
    fontFamily: 'Rubik-Medium',
  },
});
