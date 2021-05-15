import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import Input from '../components/Screens/Input';
import {customStyles} from '../utils/styles';
import CreateScreensImg from '../components/Screens/CreateScreensImg';
import CoolKidsSitting from './../assets/images/screens/login/Cool Kids Sitting.svg';
import LoginSignButton from '../components/Screens/LoginSignButton';
import Button from '../components/Screens/Button';
import CreateIcon from '../components/CreateIcon';
import {iconObj} from '../utils/socialMediaIcon';
import {iconsObj} from '../utils/icons';
import {useNavigation} from '@react-navigation/native';

const initState = {
  email: '',
  password: '',
};

export default function Login() {
  const navigation = useNavigation();
  const [loginData, setLoginData] = useState(initState);

  const [isPasswordShown, setPasswordShown] = useState<boolean>(false);

  const {email, password} = loginData;

  const text = {
    title: 'Log in',
    body: 'Login with social networks',
  };

  const handleEyePress = (): void => {
    console.log(isPasswordShown);
    setPasswordShown(!isPasswordShown);
  };

  const handleOnChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    name: string,
  ): void => {
    const {text} = e.nativeEvent;
    setLoginData({...loginData, [name]: text});
    console.log(e.nativeEvent);
  };

  const handleLoginPress = () => {
    navigation.navigate('Profile');
  };

  const handleSignUpPress = (): void => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <CreateScreensImg
        text={text}
        SvgImg={CoolKidsSitting}
        imgStyle={styles.imgStyle}
      />

      <View style={styles.icons}>
        <CreateIcon Icon={iconObj['facebook']} handlePress={() => {}} />
        <CreateIcon Icon={iconObj['instagram']} handlePress={() => {}} />
        <CreateIcon Icon={iconObj['google']} handlePress={() => {}} />
      </View>

      <Input
        placeholderText="Email"
        value={email}
        handleChange={handleOnChange}
        password={false}
        name="email"
      />

      <View>
        <Input
          placeholderText="Password"
          value={password}
          handleChange={handleOnChange}
          password={false}
          name="password"
          secureTextEntry={!isPasswordShown}
        />

        <CreateIcon
          handlePress={handleEyePress}
          Icon={iconsObj[isPasswordShown ? 'open eye' : 'close eye']}
          iconStyle={styles.iconStyle}
        />
      </View>

      <LoginSignButton label="Forgot Password?" handlePress={() => {}} />

      <Button
        label="Log in"
        handlePress={handleLoginPress}
        buttonStyle={styles.loginButtonStyle}
        textStyle={styles.loginButtonTextStyle}
        customStyleViaComponent={styles.customStyleForButton}
      />

      <LoginSignButton label="Sign up" handlePress={handleSignUpPress} />
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

  iconStyle: {
    position: 'absolute',
    right: 16,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});
