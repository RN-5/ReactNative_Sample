import React, { useState, useEffect,useRef } from 'react';
import { View, Image, ScrollView, Text, TextInput, TouchableOpacity, Button, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import bgcolor from '/home/wv/projects/android/nyah/nyah/src/Themes/Colors'
import splash from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/ic_launcher.png'
import facebook from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/facebook.png'
import google from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/googleplus.png'
import linkedin from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/linkedin.png'
import twitter from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/twitter.png'
import dropdown from '/home/wv/projects/android/nyah/nyah/src/assets/images/dropdown.png'
import { useNavigation } from '@react-navigation/native'
import CountryPicker from "react-native-country-codes-picker/components/CountryPicker";
import commonMethod from '/home/wv/projects/android/nyah/nyah/src/helper/commonMethods'
import NetworkUtils from '../../helper/NetworkUtils';
import commonStyles from '/home/wv/projects/android/nyah/nyah/src/helper/CommonStyles';
import backImage from '/home/wv/projects/android/nyah/nyah/src/assets/images/back.png';
import tick_right from '/home/wv/projects/android/nyah/nyah/src/assets/images/tickright.png'
import RBSheet from "react-native-raw-bottom-sheet";

const Signup = () => {
    const [mobile, setMobileNumber] = useState("");
    const navigation = useNavigation();
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState("+91");
    const [countryName, setCountryName] = useState("IN");
    const refRBSheet = useRef();

    useEffect(() => {
        StatusBar.setHidden(false, 'none');
    });

    const validations = async () => {
        const isConnected = await NetworkUtils.isNetworkAvailable()

        if (mobile.length < 10) {
            commonMethod.showToast('Enter minimum 10 digits Mobile Number')
        }

        else if (!isConnected) {
            commonMethod.showToast('No Internet')
        } else {
            navigation.navigate('Otp', { "mobile": countryCode + mobile });
        }
    }

    return (

        <SafeAreaView style={[commonStyles.container]}>
            <View style={[commonStyles.header,commonStyles.topView]}>

                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack()
                    }}>
                    {/* <Image
                        style={commonStyles.backArrow}
                        source={backImage} /> */}
                </TouchableOpacity>

                <Text style={[commonStyles.topHeaderText]}>SIGN UP</Text>

            </View>
            <ScrollView
                contentContainerStyle={[styles.contentContainer]}
                >
                <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', alignContent: 'center', flexDirection: 'column', width: '100%' }}>

                    {/* <Image
                    style={{ width: 100, height: 100,marginTop:20 }}
                    source={splash} /> */}

                    <View style={{ backgroundColor: bgcolor.bg, width: '100%', marginTop: 20, height: 120, flexDirection: 'column', borderRadius: 10, justifyContent: 'flex-start' }}>

                        <View style={commonStyles.ViewWithoutBorder}>

                            <Text
                                style={{ color: bgcolor.lightgray, fontSize: 13, alignSelf: 'center', marginLeft: 10,fontFamily:'Nunito_Bold' }}>{countryName}</Text>

                            <Text
                                onPress={() => { setShow(true)      
                                    // refRBSheet.current.open()
                                }}
                                style={{ color: bgcolor.lightgray, fontSize: 13, alignSelf: 'center', marginLeft: 5,fontFamily:'Nunito_Bold'  }}>{countryCode}</Text>

                            <Image
                                style={{ width: 10, height: 10, alignSelf: 'center', alignContent: 'center', marginLeft: 5, tintColor: bgcolor.lightgray }}
                                source={dropdown} />

                            <TextInput
                                style={{ paddingLeft: 10, height: 40, marginLeft: 5, alignSelf: 'center', color: bgcolor.lightgray,flex:1,fontFamily:'Nunito_SemiBold' }}
                                placeholder="Enter 10 digits Mobile Number"
                                placeholderTextColor={bgcolor.borderGray}

                                keyboardType={'numeric'}
                                maxLength={10}
                                onChangeText={value => {
                                    setMobileNumber(value)
                                }}
                                selectionColor={bgcolor.orange}
                                underlineColorAndroid="transparent" />

                                {mobile.length >= 10 && 
                                <Image
                                source={tick_right}
                                style={{ alignSelf: 'center', width: 20, height: 20, marginRight: 10 }} />
                                }
                        </View>

                        <Text style={[commonStyles.secondaryText,{marginTop: 7, marginLeft: 10, marginRight: 10 }]}>By entering your number, you're agreeing to our
                            <Text
                                style={[commonStyles.boldText14,{ textDecorationLine: 'underline' }]}> Terms of Service</Text>
                            <Text style={{ color: bgcolor.lightgray, fontSize: 12 }}> &</Text>
                            <Text
                                style={[commonStyles.boldText14,{ textDecorationLine: 'underline' }]}> Privacy Policy.</Text>
                           
                            <Text style={[commonStyles.secondaryText]}> Thanks!</Text>

                        </Text>
                    </View>
                </View>
            </ScrollView>
            <CountryPicker
                        show={show}
                        style={{ flex: 1,fontFamily:'Nunito_SemiBold'  }}

                        animationType={'slide'}
                        // when picker button press you will get the country object with dial code
                        pickerButtonOnPress={(item) => {
                            console.debug(item)
                            setCountryCode(item.dial_code);
                            setShow(false);
                            setCountryName(item.code)
                            setShow(false);
                        }}
                    />
            <TouchableOpacity
            disabled={mobile.length < 10 ? true : false}
                        onPress={() => {
                            validations();
                        }}
                        activeOpacity={.9}
                        style={[commonStyles.btnBg,{ backgroundColor: mobile.length < 10 ? bgcolor.borderGray :  bgcolor.btncolor}]}>
                        <View style={[commonStyles.btnBg, { backgroundColor: mobile.length < 10 ? bgcolor.borderGray :  bgcolor.btncolor}]}>

                            <Text
                                style={{ color: 'white', alignSelf: 'center', marginLeft: 5, fontSize: 15,fontFamily:'Nunito_SemiBold'}}>Continue</Text></View></TouchableOpacity>

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


                    <View style={[commonStyles.footer,{ flexDirection: 'row', justifyContent: 'center', marginTop: 15}]}>

                        <Text style={commonStyles.headingGray14}>Already have an account?</Text>

                        <Text
                            onPress={() => {
                                navigation.replace('Login');
                            }}
                            style={[commonStyles.boldText14, { alignSelf: 'stretch', textAlign: 'center' }]}> Login</Text></View>

        </SafeAreaView>
    );
}
export default Signup;
const styles = StyleSheet.create({
    contentContainer: {
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1
    }
});
