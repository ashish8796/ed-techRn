import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Platform, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import EdTechIntro from './src/screens/EdTechIntro';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Profile from './src/screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';
import Settings from './src/screens/Settings/Settings';

const parseData = async (key: string) => {
  let error;
  const data = await AsyncStorage.getItem(key, (error, result) => {
    if (error) {
      error = error;
    }
  });

  return data ? JSON.parse(data) : error;
};

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function TabScreenNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const App = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const isAuth = await parseData('isAuth');
      setIsAuth(isAuth);
    })();

    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}

      <SafeAreaView style={styles.appContainer}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {!isAuth && <Stack.Screen name="App Intro" component={EdTechIntro} />}

          {!isAuth && (
            <>
              <Stack.Screen name="Login" component={Login} />

              <Stack.Screen name="SignUp" component={SignUp} />
            </>
          )}

          <Stack.Screen name="Tabs" component={TabScreenNavigator} />
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
