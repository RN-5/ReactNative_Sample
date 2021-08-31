import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/splash/Splash';
import Login from './src/screens/login/Login';
import Welcome from './src/screens/welcomescreen/Welcome';
import Signup from './src/screens/signup/Signup'
import Otp from './src/screens/otpscreen/Otp';
import ForgotPassword from '/home/wv/projects/android/nyah/nyah/src/screens/ForgotPassword/ForgotPassword.js';
import Steps from './src/screens/signup/Steps/Steps';
import HomeScreen from '/home/wv/projects/android/nyah/nyah/src/screens/homescreen/HomeScreen.js'
import Openform from './src/screens/startactivty/Open/Openform';
import Intrest from './src/screens/Intrest_Themes/Intrest';
import AssociatedThemes from './src/screens/AssociatedThemes/AssociatedThemes';
import Frequency from './src/screens/Frequency/Frequency';
import Test from './src/screens/signup/Test';
import Notifications from './src/screens/NotificationScreen/Notifications';
import TestDiscover from './src/screens/signup/TestDiscover';

const Stack = createNativeStackNavigator();

const App =() =>{

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Test" screenOptions={{headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Otp" component={Otp}/>
        <Stack.Screen name="Forgot" component={ForgotPassword} />
        <Stack.Screen name="Steps" component={Steps}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="OpenForm" component={Openform}></Stack.Screen>
        <Stack.Screen name="Intrest" component={Intrest}></Stack.Screen>
        <Stack.Screen name="Associatedthemes" component={AssociatedThemes}></Stack.Screen>
        <Stack.Screen name="Frequency" component={Frequency}></Stack.Screen>
        <Stack.Screen name="Test" component={Test}></Stack.Screen>
        <Stack.Screen name="TestD" component={TestDiscover}></Stack.Screen>
        <Stack.Screen name="Noti" component={Notifications}></Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;