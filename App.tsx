import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Platform, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Intro1 from './src/screens/Intro1';
import Intro2 from './src/screens/Intro2';
import EdTechIntro from './src/screens/EdTechIntro';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.appContainer}>
      <EdTechIntro />
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'blue',
  },
});

export default App;
