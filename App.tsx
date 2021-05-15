import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Platform, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import EdTechIntro from './src/screens/EdTechIntro';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}

      <SafeAreaView style={styles.appContainer}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="App Intro" component={EdTechIntro} />

          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
