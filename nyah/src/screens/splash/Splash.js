import React, {Component} from 'react';
import { View, Image, Text,StatusBar } from 'react-native';
import bgcolor from '/home/wv/projects/android/nyah/nyah/src/Themes/Colors'
import splash from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/ic_launcher.png'
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import fontsize from '/home/wv/projects/android/nyah/nyah/src/Themes/fontsize'
import { LogBox } from 'react-native';
import styles from './SplashStyles'
import commonStyles from '../../helper/CommonStyles';

const Splash = () =>  {

  const navigation = useNavigation();
  const timeout = setTimeout(() => {
    // Add your logic for the transition
  }, 3000);

useEffect(()=>{
  StatusBar.setHidden(true, 'none');
  setTimeout(() => {
           
     navigation.replace('Welcome')

        }, 3000)
 
});

useEffect(() => {
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  LogBox.ignoreLogs(['componentWillReceiveProps']);

}, [])
    return (
      <View style={styles.container}>

        <Image
          style={{ width: 100, height: 100 }}
          source={splash} />

          <Text style={[commonStyles.headingText,{marginTop:20}]}>Welcome to NYAH</Text>
          <Text style={[commonStyles.headingText,{marginTop:20}]}>Do Engaging Activities {"\n"}Done. Better. Together</Text>
      </View>
    )
}
export default Splash;

