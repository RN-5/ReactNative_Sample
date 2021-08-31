import React, { useState, useEffect,useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, ScrollView, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet,Modal,KeyboardAvoidingView,StatusBar,ToastAndroid } from 'react-native';
import bgcolor from '/home/wv/projects/android/nyah/nyah/src/Themes/Colors'
import splash from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/ic_launcher.png'
import { useNavigation } from '@react-navigation/native';
import commonMethod from '/home/wv/projects/android/nyah/nyah/src/helper/commonMethods'
import fonts from '/home/wv/projects/android/nyah/nyah/src/Themes/fontsize'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import NetworkUtils from '../../../helper/NetworkUtils';
import commonStyles from '/home/wv/projects/android/nyah/nyah/src/helper/CommonStyles';
import styles from './HomeStyles.js'
import EventBus from 'react-native-event-bus'

const ActivityHome = () =>{
  console.log('HOme')
  useEffect(() => {
    EventBus.getInstance().fireEvent('HomeTitle', {
        title:
          'Explore'
      })
});
    return(
        <View style={[styles.container]}>
      
          <Text style={styles.textCenter}>GALLERY</Text>
      </View>
    )
}
export default ActivityHome;