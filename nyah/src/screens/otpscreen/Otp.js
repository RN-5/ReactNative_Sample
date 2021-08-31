import React, { useEffect, useState, useCallback } from 'react'
import { SafeAreaView, Text, View, Image, TouchableOpacity, Modal, StyleSheet, StatusBar } from 'react-native';
import styles from './OtpStyles';
import backImage from '/home/wv/projects/android/nyah/nyah/src/assets/images/back.png';
import NavigationBar from 'react-native-navbar';
import bgcolor from '/home/wv/projects/android/nyah/nyah/src/Themes/Colors'
import fonts from '/home/wv/projects/android/nyah/nyah/src/Themes/fontsize'
import { useNavigation } from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import commonMethod from '/home/wv/projects/android/nyah/nyah/src/helper/commonMethods'
import NetworkUtils from '../../helper/NetworkUtils';
import splash from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/ic_launcher.png'
import commonStyles from '/home/wv/projects/android/nyah/nyah/src/helper/CommonStyles';

const Otp = ({ route: { params } }) => {
  const navigation = useNavigation();
  const [mobile, setMobile] = useState("");
  const [showModal, setModal] = useState(false);
  const [timerCount, setTimer] = useState(30)
  const [btnColor, setBtnColor] = useState(false)
  const [isResendDisble, setResendDisable] = useState(true)
  const [otp, setOTPValue] = useState("")

  useEffect(() => {
    const { mobile } = params;
    setMobile(mobile)
    StatusBar.setHidden(false, 'none');
  });

  const validations = async () => {
    const isConnected = await NetworkUtils.isNetworkAvailable()

    if (otp.length < 6) {
      commonMethod.showToast('Enter 6 Digits OTP')
    }
    else if (!isConnected) {
      commonMethod.showToast('No Internet')
    } else {
      setModal(true)
    }
  }

  const createTimer = useCallback(
    () => {
      let interval = setInterval(() => {
        setTimer(lastTimerCount => {
          lastTimerCount <= 1 && clearInterval(interval)
          if (lastTimerCount - 1 == 0) {
            setResendDisable(false)
          } else {
            setResendDisable(true)
          }
          return lastTimerCount - 1
        })
      }, 1000)
    },
    [], // Tells React to memoize regardless of arguments.
  );

  useEffect(() => {
    createTimer()
  }, []);


  return (
    <SafeAreaView style={styles.container}>

      <View style={[commonStyles.topView]}>

        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}>
          <Image
            style={commonStyles.backArrow}
            source={backImage} />
        </TouchableOpacity>

        <Text style={[commonStyles.topHeaderText]}>OTP VERIFICATION</Text>

      </View>

      <View style={styles.viewColumn, { justifyContent:'center',flex:1 }}>


        <View style={styles.viewColumn, { marginLeft: 20, marginRight: 20 }}>


        

          <Text style={{ fontSize: fonts.font15, marginTop: 7, color: bgcolor.lightgray, alignSelf: 'center',fontFamily:'Nunito_Semibold' }}>
            OTP sent to <Text style={{ fontSize: fonts.font15, marginTop: 7, color: bgcolor.orange, alignSelf: 'center', fontFamily:'Nunito_Bold' }}>{mobile}</Text>
          </Text>

          <OTPInputView
            style={{ width: '100%', height: 80, color: bgcolor.orange, alignSelf: 'center', borderRadius: 0, borderColor: bgcolor.orange,fontFamily:'Nunito_Semibold' }}
            pinCount={6}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad

            onCodeChanged={(code) => {
            
                setOTPValue(code)
              
            }}
            codeInputFieldStyle={{ width: 30, height: 45, borderWidth: 0, backgroundColor: bgcolor.white,color:bgcolor.lightgray, fontFamily:'Nunito_Semibold'}}
            codeInputHighlightStyle={{ borderColor: bgcolor.orange }}

            onCodeFilled={(code) => {
               setBtnColor(true),
                setOTPValue(code)
              //console.log(`Code is ${code}, you are good to go!`)
            }}
          />

          <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>

            <Text style={[commonStyles.secondaryText,{alignSelf:'center',color:bgcolor.lightgray}]}>Didn't Receive OTP?</Text>
            <TouchableOpacity
              disabled={isResendDisble}
              onPress={() => {
                setResendDisable(true)
                setTimer(30),
                  createTimer()
              }}>
              <Text style={[commonStyles.secondaryText,{alignSelf:'center',color: isResendDisble == true ? bgcolor.lightgray : bgcolor.orange, fontFamily : isResendDisble == true ? 'Nunito_SemiBold':'Nunito_Bold'}]}> Resend OTP</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: fonts.font15, marginLeft: 5, color: isResendDisble == true ? bgcolor.orange : bgcolor.lightgray,alignSelf:'center',marginTop:-2,fontFamily:'Nunito_Bold' }}>0:{timerCount}</Text>
          </View>
         
        </View>
        {
          showModal &&

          <Modal isVisible={showModal}
            transparent={true}
            swipeDirection={['up', 'left', 'right', 'down']}
            style={styless.modalView}
          >
             <TouchableOpacity
                style={{flex:1}}
                activeOpacity={1}
                onPressOut={() => {setModal(false)}}>
            <View style={styless.containerStyle}>
              <View style={styless.content}>
                <Text style={[commonStyles.headingText,commonStyles.header,{alignSelf:'flex-start',marginLeft:20,marginRight:20}]}>
                  Oops! Verification Failed
                </Text>

                <Text style={[commonStyles.modalBodycolor]}>
                  Relax! We’re investigating the cause.
                  Keep going. You’ll be able to verify
                  your mobile number later, from your
                  profile settings. Meanwhile, share
                  your interests and browse Nyah app.
                  We’ve curated a variety of themes
                  and activities for you to explore and
                  participate.
              
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    setModal(false),
                      navigation.replace('Steps');
                  }}
                  activeOpacity={.9}
                  style={{ marginTop: 20, alignSelf: 'flex-end',marginRight:7 }}>
                  <View style={commonStyles.modalViewRowEnd}>
                    <Text
                      style={[commonStyles.modalBtnText,{alignSelf:'flex-end'}]}>LET ME IN</Text></View></TouchableOpacity>
              </View>
            </View>
            </TouchableOpacity>
          </Modal>
        }
      </View>
      <TouchableOpacity
            disabled={otp.length == 6 ? false : true}
            onPress={() => {
              validations();
            }}
            activeOpacity={.9}
            style={[commonStyles.btnBg,commonStyles.footer,{backgroundColor: otp.length == 6 ? bgcolor.btncolor : bgcolor.borderGray}]}>
            <View style={[commonStyles.btnBg,{backgroundColor: otp.length == 6 ? bgcolor.btncolor : bgcolor.borderGray}]}>

              <Text
                style={commonStyles.btnTextWhitecolor}>Verify & Proceed</Text></View></TouchableOpacity>
    </SafeAreaView>
  );
}

export default Otp;

const styless = StyleSheet.create({
  modalView: {
    margin: 0,
    justifyContent: 'flex-end'
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  content: {
    width: '88%',
    height: 260,
    backgroundColor: bgcolor.white,
    borderRadius: 5,
  },

});
