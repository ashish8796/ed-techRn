import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Input from '../components/Screens/Input';
import {customStyles} from '../utils/styles';
import CreateScreensImg from '../components/Screens/CreateScreensImg';
import CoolKidsSitting from './../assets/images/screens/login/Cool Kids Sitting.svg';
import LoginSignButton from '../components/Screens/LoginSignButton';
import Button from '../components/Screens/Button';
import SocialMediaIcon from '../components/SocialMediaIcon';
import GoogleIcon from './../assets/images/screens/login/social-media-icons/google-icon.svg';
import InstagramIcon from './../assets/images/screens/login/social-media-icons/instagram-icon.svg';
import FacebookIcon from './../assets/images/screens/login/social-media-icons/facebook-icon.svg';

const initState = {
  email: '',
  password: '',
};

export default function Login() {
  const [loginData, setLoginData] = useState(initState);

  const {email, password} = loginData;

  const text = {
    title: 'Log in',
    body: 'Login with social networks',
  };

  return (
    <View style={styles.container}>
      <CreateScreensImg
        text={text}
        SvgImg={CoolKidsSitting}
        imgStyle={styles.imgStyle}
      />

      <View style={styles.icons}>
        <SocialMediaIcon Icon={FacebookIcon} handlePress={() => {}} />
        <SocialMediaIcon Icon={InstagramIcon} handlePress={() => {}} />
        <SocialMediaIcon Icon={GoogleIcon} handlePress={() => {}} />
      </View>

      <Input
        placeholderText="Email"
        value={email}
        handleChange={() => {}}
        password={false}
      />

      <Input
        placeholderText="Password"
        value={email}
        handleChange={() => {}}
        password={false}
      />

      <LoginSignButton label="Forgot Password?" handlePress={() => {}} />

      <Button
        label="Log in"
        handlePress={() => {}}
        buttonStyle={styles.loginButtonStyle}
        textStyle={styles.loginButtonTextStyle}
        customStyleViaComponent={styles.customStyleForButton}
      />

      <LoginSignButton label="Sign up" handlePress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: customStyles.loginSignUp.container,

  imgStyle: {marginTop: 52},

  loginButtonStyle: customStyles.buttonStyle,

  loginButtonTextStyle: customStyles.buttonText,

  customStyleForButton: {
    marginBottom: 0,
  },

  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 144,
    height: 40,
  },
});
