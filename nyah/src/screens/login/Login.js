import React, { useState, useEffect, useCallback } from 'react';
import { View, Image, ScrollView, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, Modal, KeyboardAvoidingView, StatusBar, ToastAndroid } from 'react-native';
import bgcolor from '/home/wv/projects/android/nyah/nyah/src/Themes/Colors'
import splash from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/ic_launcher.png'
import crossicon from '/home/wv/projects/android/nyah/nyah/src/assets/images/crosssign.png'
import eyeopen from '/home/wv/projects/android/nyah/nyah/src/assets/images/eyeopen.png'
import eyeclose from '/home/wv/projects/android/nyah/nyah/src/assets/images/eyeclose.png'
import facebook from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/facebook.png'
import google from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/googleplus.png'
import linkedin from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/linkedin.png'
import twitter from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/twitter.png'
import { useNavigation } from '@react-navigation/native';
import commonMethod from '/home/wv/projects/android/nyah/nyah/src/helper/commonMethods'
import fonts from '/home/wv/projects/android/nyah/nyah/src/Themes/fontsize'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import NetworkUtils from '../../helper/NetworkUtils';
import commonStyles from '/home/wv/projects/android/nyah/nyah/src/helper/CommonStyles';
import tick_right from '/home/wv/projects/android/nyah/nyah/src/assets/images/tickright.png'

const Login = () => {
    const [email, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [showpassword, showPassword] = useState(true);
    const [showModal, setModal] = useState(false);
    const [loading, showLoading] = useState(false);
    const navigation = useNavigation();
    const [isCorectEmail, correctEmail] = useState(false)
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

    useEffect(() => {
        StatusBar.setHidden(false, 'none');
    });

    const validations = async () => {
        const isConnected = await NetworkUtils.isNetworkAvailable()

        if (email == "" || !commonMethod.validateEmail(email)) {
            commonMethod.showToast('Enter Valid Email Id')
        }
        else if (password == "" || password.length < 5) {
            commonMethod.showToast('Enter minimum 5 digits Password')

        }
        else if (!isConnected) {
            commonMethod.showToast('No Internet')
        } else {
            navigation.replace('HomeScreen');
        }
    }

    return (
        <KeyboardAvoidingView keyboardVerticalOffset={keyboardVerticalOffset}
        
        enabled
            style={commonStyles.container}>
            <Text
                style={[commonStyles.header,commonStyles.headingText]}>LOGIN</Text>
               <View style={{flex: 1}}>

        
                <View style={[styles.contentContainer, { flexGrow: 1 }]}>

                    {/* <Image
                    style={{ width: 100, height: 100}}
                    source={splash} /> */}

                    <View style={[commonStyles.ViewWithoutBorder, { paddingLeft: 10 }]}>

                        <TextInput
                            style={{ flex: 1,fontFamily:'Nunito_SemiBold'  }}
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
                    <View style={[commonStyles.ViewWithoutBorder, { marginTop: 20 }]}>


                        <TextInput
                            style={{ paddingLeft: 10, flex: 1, color: bgcolor.lightgray, borderWidth: 0,fontFamily:'Nunito_SemiBold'}}
                            placeholder="Enter Password (min 6 characters)"
                            placeholderTextColor={bgcolor.borderGray}
                            contextMenuHidden={true}
                            onChangeText={value => {
                                //validateEmailId(value)
                                setPassword(value)
                            }}
                            secureTextEntry={showpassword}
                            selectionColor={bgcolor.orange}
                            underlineColorAndroid="transparent" />

                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={{ justifyContent: 'center' }}
                            onPress={() => {
                                if (showpassword) {
                                    showPassword(false)
                                } else {
                                    showPassword(true)
                                }
                            }}>
                            <Image
                                style={{ width: 20, height: 20, alignSelf: 'center', marginRight: 10, tintColor: bgcolor.borderGray }}
                                source={showpassword ? eyeopen : eyeclose} />
                        </TouchableOpacity>
                    </View>
                    {/* {loading &&
                    <View style={[styles.container, styles.horizontal]}>
 width:'100%',
        height:'100%',
                        <ActivityIndicator
                            animating={true}
                            color={bgcolor.btncolor}
                            size="large" />

                    </View>
                } */}
                    {
                        showModal &&
                        <Modal
                            isVisible={showModal}
                            transparent={true}
                            swipeDirection={['up', 'left', 'right', 'down']}
                            style={styles.modalView}
                        >


                            <View style={styles.containerStyle}>

                                <View style={styles.content}>
                                    <TouchableOpacity
                                        activeOpacity={0.9}
                                        onPress={() => {
                                            setModal(false)
                                        }}
                                    >
                                        <Image
                                            style={{ width: 20, height: 20, alignSelf: 'flex-end', marginTop: 10, marginRight: 20 }}
                                            source={crossicon} />
                                    </TouchableOpacity>

                                    <Text style={{ fontSize: fonts.font18, fontWeight: 'bold', marginTop: 20, color: bgcolor.lightgray, alignSelf: 'center' }}>
                                        Enter Registered Email id
                                    </Text>

                                    <TextInput
                                        style={{ marginTop: 20, borderColor: bgcolor.lightgray, borderWidth: 1, borderRadius: 10, width: '90%', backgroundColor: '#FFFFFF', paddingLeft: 10, marginLeft: 20 }}
                                        placeholder="Enter Email"
                                        keyboardType="email-address"
                                        selectionColor={bgcolor.orange}
                                        underlineColorAndroid="transparent" />
                                    <Text style={{ fontSize: fonts.font13, marginTop: 5, color: bgcolor.orange, alignSelf: 'center' }}>
                                        Reset link will be send on your Email id
                                    </Text>

                                    <TouchableOpacity
                                        onPress={() => {
                                            setModal(false)
                                        }}
                                        activeOpacity={.9}
                                        style={{ width: '50%', marginTop: 20, alignSelf: 'center' }}>
                                        <View style={{ backgroundColor: bgcolor.btncolor, borderWidth: 0, borderRadius: 30, width: '100%', height: 40, justifyContent: 'center', flexDirection: 'row' }}>
                                            <Text
                                                style={{ color: 'white', alignSelf: 'center', marginLeft: 5, fontSize: 15 }}>Submit</Text></View></TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    }
                </View>
            <TouchableOpacity
            disabled={isCorectEmail && password.length >= 6 ? false : true}
                        onPress={() => {
                            validations()
                            //showLoading(true)
                        }}
                        activeOpacity={.9}
                        style={[commonStyles.btnBg,{ backgroundColor:  isCorectEmail && password.length >= 6 ? bgcolor.btncolor : bgcolor.borderGray  }]}>
                        <View style={[commonStyles.btnBg, { backgroundColor:  isCorectEmail && password.length >= 6 ? bgcolor.btncolor : bgcolor.borderGray  }]}>

                            <Text style={commonStyles.btnTextWhitecolor}>Continue</Text></View></TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 7, alignSelf: 'center' }}>

                        <Text style={commonStyles.headingGray14}>Forgot </Text>

                        <Text
                            onPress={() => {
                                navigation.navigate('Forgot');
                                //setModal(true)
                            }}
                            style={commonStyles.boldText14}>Password?  </Text></View>


                    <Text style={commonStyles.subHeadingTextGray}>Or Login With</Text>

                    <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
                        <Image
                            style={{ width: 45, height: 45, alignSelf: 'center' }}
                            source={facebook} />

                        <Image
                            style={{ width: 45, height: 45, alignSelf: 'center', marginLeft: 10 }}
                            source={google} />

                        <Image
                            style={{ width: 45, height: 45, alignSelf: 'center', marginLeft: 10 }}
                            source={twitter} />

                        <Image
                            style={{ width: 45, height: 45, alignSelf: 'center', marginLeft: 10 }}
                            source={linkedin} />

                    </View>


                    <View style={[commonStyles.footer,{ flexDirection: 'row', justifyContent: 'center', marginTop: 15, width: '100%' }]}>

                        <Text style={{ color: bgcolor.lightgray, alignSelf: 'center', fontSize: 14, fontFamily:'Nunito_Semibold' }}>Don't have an account? </Text>
                        <Text
                            onPress={() => {
                                navigation.navigate('Signup');
                            }}
                            style={[commonStyles.boldText14, { alignSelf: 'stretch', textAlign: 'center' }]}>Sign up</Text></View>
        </View>
            
        </KeyboardAvoidingView>
    );
}

export default Login;
const styles = StyleSheet.create({
    contentContainer: {
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        alignContent: 'center',
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    modalView: {
        flex: 1,
        margin: 0,
        justifyContent: 'flex-end',
        position: 'absolute',
    },
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    content: {
        width: '95%',
        height: '42%',
        backgroundColor: 'white',
        overflow: 'hidden',
        borderRadius: 10,

    },
});
