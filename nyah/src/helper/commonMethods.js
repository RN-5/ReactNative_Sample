import {ToastAndroid,Alert } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import React, { useState, useEffect, useRef } from 'react';
import { View, Image, ScrollView, Text, TextInput, TouchableOpacity, Button, StyleSheet, StatusBar, SafeAreaView, FlatList, Switch, Touchable } from 'react-native';
import dropdown from '/home/wv/projects/android/nyah/nyah/src/assets/images/dropdown.png'
import { useNavigation } from '@react-navigation/native'
import CountryPicker from "react-native-country-codes-picker/components/CountryPicker";
import commonStyles from '/home/wv/projects/android/nyah/nyah/src/helper/CommonStyles';
import backImage from '/home/wv/projects/android/nyah/nyah/src/assets/images/back.png';
import tick_right from '/home/wv/projects/android/nyah/nyah/src/assets/images/tickright.png'
import notificationIcon from '/home/wv/projects/android/nyah/nyah/src/assets/images/bell.png'
import fontSize from '/home/wv/projects/android/nyah/nyah/src/Themes/fontsize';
import CardView from 'react-native-cardview'
import home from '/home/wv/projects/android/nyah/nyah/src/assets/images/home.png';
import calndar from '/home/wv/projects/android/nyah/nyah/src/assets/images/calendarcolorful.png';
import splash from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/ic_launcher.png'
import bgcolor from '/home/wv/projects/android/nyah/nyah/src/Themes/Colors'

const CommonMethods = {

    showToast:(msg)=>{
        // alert(msg)
     ToastAndroid.show(msg, ToastAndroid.SHORT);
    },
    
    validateEmail:(value)=>{
        console.log(value);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(value) == false) {
          console.log("Email is Not Correct");
          return false;
        }
        else {
            return true
        }
    },
    
    showRbsheet:(item,refRBSheetMainList)=>{
      console.log(refRBSheetMainList)
      //refRBSheetMainList.current.open()
      return(
      <RBSheet
        ref={refRBSheetMainList}
        closeOnDragDown={true}
        closeOnPressMask={false}
        animationType={'slide'}

        closeOnDragDown
        customStyles={{
            wrapper: {
                backgroundColor: 'rgba(52, 52, 52, 0.8)'
            },
            draggableIcon: {
                backgroundColor: "#000"
            },
            container: {
                // height: 250,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
            }
        }}>

        <View style={[commonStyles.viewColumnWithoutTop]}>

            <View style={{ margin: 20, flexDirection: 'column' }}>

                <View style={{ flexDirection: 'row' }}>

                    <Text style={commonStyles.boldText14}>All Intrest</Text>

                    <Image
                        style={[commonStyles.cardImage]}
                        source={home} />

                </View>

                <View style={{ flexDirection: 'row' }}>

                    <Text style={commonStyles.boldText14, { fontSize: fontSize.font17 }}>Town Hall Recap</Text>

                    <Image
                        style={[commonStyles.cardImage]}
                        source={home} />

                    <Text style={commonStyles.textDarkGray14, { fontSize: fontSize.font14, marginLeft: 10 }}>1hr</Text>


                </View>

                <View style={{ flexDirection: 'row' }}>

                    <Image
                        style={[commonStyles.circularImage18, { marginTop: 5 }]}
                        source={splash} />

                    <Text style={[commonStyles.headingGray14, { color: bgcolor.borderGray, marginLeft: 5, alignSelf: 'center' }]}>Lizzy Cookie</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>

                    <Image
                        style={[commonStyles.circularImage18, { marginTop: 5 }]}
                        source={splash} />

                    <Text style={[commonStyles.headingGray14, { color: bgcolor.borderGray, marginLeft: 5, alignSelf: 'center' }]}>Aiofe Cookie</Text>

                </View>

                <View style={{ flexDirection: 'row' }}>

                    <Image
                        style={[commonStyles.circularImage18, { marginTop: 5 }]}
                        source={splash} />

                    <Text style={[commonStyles.headingGray14, { color: bgcolor.borderGray, marginLeft: 5, alignSelf: 'center' }]}>Jacques Bastien</Text>

                </View>

                <View style={{ flexDirection: 'row' }}>

                    <Image
                        style={[commonStyles.circularImage18, { marginTop: 5 }]}
                        source={splash} />

                    <Text style={[commonStyles.headingGray14, { color: bgcolor.borderGray, marginLeft: 5, alignSelf: 'center' }]}>Hope</Text>
                    <Text style={[commonStyles.headingGray14, { color: bgcolor.borderGray, marginLeft: 5, alignSelf: 'center', fontSize: fontSize.font12, flex: 1 }]}>+ 3 Friends</Text>

                    <Text style={[commonStyles.headingGray14, { color: bgcolor.borderGray, marginLeft: 5, alignSelf: 'center' }]}>545</Text>

                    <Image
                        style={[commonStyles.imaeg13]}
                        source={home} />

                    <Text style={[commonStyles.headingGray14, { color: bgcolor.borderGray, marginLeft: 5, alignSelf: 'center', marginLeft: 10 }]}>9</Text>

                    <Image
                        style={[commonStyles.imaeg13, { marginRight: 5 }]}
                        source={home} />
                </View>

            </View>



        </View>
    </RBSheet>
      )
    }

}
export default CommonMethods;
