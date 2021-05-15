import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import CreateIcon from '../components/CreateIcon';
import Button from '../components/Screens/Button';
import CreateScreensImg from '../components/Screens/CreateScreensImg';
import GoBack from '../components/Screens/GoBack';
import Input from '../components/Screens/Input';
import LoginSignButton from '../components/Screens/LoginSignButton';
import {iconsObj} from '../utils/icons';
import {customStyles} from '../utils/styles';
import {handleGoBack} from '../utils/utilsFuctions';
import CoolKidsStanding from './../assets/images/screens/signUp/Cool Kids Standing.svg';

const initState = {
  name: '',
  email: '',
  password: '',
};

export default function SignUp() {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(initState);
  const {name, email, password} = userData;
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  const text = {
    title: 'Sign up',
    body: 'Create your account',
  };

  const handleEyePress = (): void => {
    console.log(passwordShown);
    setPasswordShown(!passwordShown);
  };

  const handleLogInPress = (): void => {
    navigation.navigate('Login');
  };

  const handleOnChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    name: string,
  ): void => {
    const {text} = e.nativeEvent;
    setUserData({...userData, [name]: text});
  };

  return (
    <View style={styles.container}>
      <View style={styles.goBackButton}>
        <GoBack
          handlePress={() => handleGoBack(navigation)}
          goStyle={styles.goStyle}
        />
      </View>

      <CreateScreensImg
        text={text}
        SvgImg={CoolKidsStanding}
        imgStyle={styles.imgStyle}
      />

      <Input
        placeholderText="Name"
        value={name}
        handleChange={handleOnChange}
        password={false}
        name="name"
      />

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
          secureTextEntry={!passwordShown}
        />
        <CreateIcon
          handlePress={handleEyePress}
          Icon={iconsObj[passwordShown ? 'open eye' : 'close eye']}
          iconStyle={styles.iconStyle}
        />
      </View>

      <Button
        label="Sign up"
        handlePress={() => {}}
        buttonStyle={styles.loginButtonStyle}
        textStyle={styles.loginButtonTextStyle}
        customStyleViaComponent={styles.customStyleForButton}
      />

      <LoginSignButton label="Log in" handlePress={handleLogInPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: customStyles.loginSignUp.container,

  imgStyle: {marginTop: 0},

  loginButtonStyle: customStyles.buttonStyle,

  loginButtonTextStyle: customStyles.buttonText,

  customStyleForButton: {
    marginTop: 16,
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

  goStyle: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },

  goBackButton: {
    width: Dimensions.get('screen').width,
    marginTop: 32,
  },
});
