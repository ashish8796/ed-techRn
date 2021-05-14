import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Splash from './src/screens/Splash';
import Intro1 from './src/screens/Intro1';
import Intro2 from './src/screens/Intro2';

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      {/* <Splash /> */}
      {/* <Intro1 /> */}
      <Intro2 />
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
