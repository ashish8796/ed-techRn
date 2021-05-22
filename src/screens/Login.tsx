import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
import {useFormik} from 'formik';
import * as yup from 'yup';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-community/async-storage';

const initState = {
  email: '',
  password: '',
};

const logInSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required().label('Email'),
  password: yup.string().required().label('Password'),
});

export default function Login() {
  const navigation = useNavigation();
  const {getItem} = useAsyncStorage('userData');

  const formik = useFormik({
    initialValues: initState,
    validationSchema: logInSchema,
    onSubmit: values => {
      getItem((error, result) => {
        const {email, password} = JSON.parse(result || '');

        if (values.email === email && values.password === password) {
          AsyncStorage.setItem('isAuth', 'true');
          navigation.navigate('Tabs');
        } else {
          Alert.alert('Email or password does not match.');
        }
      });
    },
  });

  // console.log(
  //   getItem((error, result) => {
  //     console.log(error, result);
  //   }),
  // );

  const [isPasswordShown, setPasswordShown] = useState<boolean>(false);

  const {email, password} = formik.values;

  if (formik.isSubmitting) {
    if (Object.keys(formik.errors).length) {
      let str = '';
      for (let key in formik.errors) {
        str += formik.errors[key] + '\n';
      }
      Alert.alert(str);
    }
  }

  const text = {
    title: 'Log in',
    body: 'Login with social networks',
  };

  const handleEyePress = (): void => {
    console.log(isPasswordShown);
    setPasswordShown(!isPasswordShown);
  };

  const handleSignUpPress = (): void => {
    navigation.navigate('SignUp');
  };

  return (
    <KeyboardAwareScrollView style={customStyles.keyboardAwareStyle}>
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
          handleChange={formik.handleChange('email')}
        />

        <View>
          <Input
            placeholderText="Password"
            value={password}
            handleChange={formik.handleChange('password')}
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
          handlePress={formik.handleSubmit}
          buttonStyle={styles.loginButtonStyle}
          textStyle={styles.loginButtonTextStyle}
          customStyleViaComponent={styles.customStyleForButton}
        />

        <LoginSignButton label="Sign up" handlePress={handleSignUpPress} />
      </View>
    </KeyboardAwareScrollView>
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
