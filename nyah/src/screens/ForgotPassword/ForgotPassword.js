import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, Text, TextInput, TouchableOpacity, Modal, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import bgcolor from '/home/wv/projects/android/nyah/nyah/src/Themes/Colors'
import splash from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/ic_launcher.png'
import { useNavigation } from '@react-navigation/native'
import commonMethod from '/home/wv/projects/android/nyah/nyah/src/helper/commonMethods'
import NetworkUtils from '/home/wv/projects/android/nyah/nyah/src/helper/NetworkUtils.js';
import backImage from '/home/wv/projects/android/nyah/nyah/src/assets/images/back.png';
import fonts from '/home/wv/projects/android/nyah/nyah/src/Themes/fontsize'
import commonStyles from '/home/wv/projects/android/nyah/nyah/src/helper/CommonStyles';
import tick_right from '/home/wv/projects/android/nyah/nyah/src/assets/images/tickright.png'

const ForgotPassword = () => {

  const navigation = useNavigation();
  const [email, setEmailId] = useState("")
  const [showModal, setModal] = useState(false);
  const [isCorectEmail, correctEmail] = useState(false)


  useEffect(() => {
    StatusBar.setHidden(false, 'none');
  });


  const validations = async () => {
    const isConnected = await NetworkUtils.isNetworkAvailable()

    if (email == "" || !commonMethod.validateEmail(email)) {
      commonMethod.showToast('Enter Valid Email Id')
    }
    else if (!isConnected) {
      commonMethod.showToast('No Internet')
    } else {
      setModal(true)
    }
  }
  return (
    <View style={commonStyles.container}>
      <SafeAreaView style={{ flex: 1, marginLeft: 20, marginRight: 20 }}>

        <View style={commonStyles.headerview}>

          <TouchableOpacity
            onPress={() => {
              navigation.goBack()
            }}>
            <Image
              style={commonStyles.backArrow}
              source={backImage} />
          </TouchableOpacity>

          <Text style={[commonStyles.headingText, { alignSelf: 'center', textAlign: 'center', flex: 1 }]}>FORGOT PASSWORD</Text>

        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%', flex: 1 }}>


          {/* <Image
                    style={{ width: 100, height: 100,marginTop:20 }}
                    source={splash} /> */}
          <View style={[commonStyles.ViewWithoutBorder, { paddingLeft: 10 }]}>

            <TextInput
              style={{ flex: 1 }}
              placeholder="Enter Email id"
              placeholderTextColor={bgcolor.borderGray}
              contextMenuHidden={true}
              onChangeText={value => {
                correctEmail(commonMethod.validateEmail(value)),
                setEmailId(value)
              }}
              keyboardType="email-address"
              selectionColor={bgcolor.orange}
              underlineColorAndroid='transparent' />
            {isCorectEmail &&
              <Image
                source={tick_right}
                style={{ alignSelf: 'center', width: 20, height: 20, marginRight: 10 }} />
            }

          </View>


          <Text style={[commonStyles.secondaryText,{ marginTop: 7, marginLeft: 10, marginRight: 10}]}>Reset link will be sent to your Email id</Text>

          {
            showModal &&
            <Modal isVisible={showModal}
              transparent={true}
              swipeDirection={['up', 'left', 'right', 'down']}
              style={commonStyles.modalView}>
                <TouchableOpacity
                style={{flex:1}}
                activeOpacity={1}
                onPressOut={() => {setModal(false)}}>
              <View style={commonStyles.containerStyle}>
                <View style={commonStyles.modal120}>
                  <Text style={[commonStyles.headingGray14,{marginTop:15,color:bgcolor.lightgray,alignSelf:'flex-start',marginRight:20,marginLeft:20,fontWeight:'200'}]}>
                    Reset link will be sent to your Email id
                  </Text>
                  <Text style={[commonStyles.headingText,{marginTop:5,alignSelf:'flex-start',marginRight:20,marginLeft:20}]}>
                    {email}
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      setModal(false)
                      navigation.replace('Login');
                    }}
                    activeOpacity={.9}
                    style={{marginTop: 10,alignSelf:'flex-end',marginRight: 10 }}>
                    <View style={commonStyles.modalViewRowEnd}>
                      <Text
                        style={[commonStyles.modalBtnText,{alignSelf:'flex-end'}]}>OK</Text></View></TouchableOpacity>
                </View>
              </View>
              </TouchableOpacity>
            </Modal>
          }
        </View>

      </SafeAreaView>
      <TouchableOpacity
        disabled={isCorectEmail ? false : true
        }
        onPress={() => {
          validations()
        }}
        activeOpacity={.9}
        style={[commonStyles.btnBg,commonStyles.footer,{ backgroundColor: isCorectEmail ? bgcolor.btncolor : bgcolor.borderGray}]}>
        <View style={[commonStyles.btnBg, { backgroundColor: isCorectEmail ? bgcolor.btncolor : bgcolor.borderGray}]}>

          <Text style={commonStyles.btnTextWhitecolor}>Continue</Text></View></TouchableOpacity>

    </View>
  );
}
export default ForgotPassword;

const styles = StyleSheet.create({
  modalView: {
    margin: 0,
    justifyContent: 'flex-end'
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  content: {
    width: '90%',
    height: '30%',
    justifyContent: 'center',
    backgroundColor: bgcolor.white,
    borderRadius: 4,
    alignSelf: 'center'
  },

});
