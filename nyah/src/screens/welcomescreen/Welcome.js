import React, { useState, useEffect } from 'react';
import { View, Image, SafeAreaView, ScrollView, Text, ImageBackground, TouchableOpacity, Button, StyleSheet } from 'react-native';
import bgcolor from '/home/wv/projects/android/nyah/nyah/src/Themes/Colors'
import appicon from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/ic_launcher.png'
import slider3 from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/slider3.jpg'
import slider1 from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/slider1.jpg'
import slider2 from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/slider2.jpeg'
import { useNavigation } from '@react-navigation/native';
import commonStyles from '../../helper/CommonStyles';

import {
    IndicatorViewPager,
    PagerDotIndicator,
} from '@shankarmorwal/rn-viewpager';
import fontSize from '../../Themes/fontsize';


const Welcome = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: bgcolor.bgcolor }}>

            <View style={styles.container}>
                <IndicatorViewPager
                    autoPlayEnable={true}
                    initialPage={0}
                    pageCount={3}
                    autoPlayInterval={3000}
                    style={styles.pagerStyle}
                    indicator={
                        <PagerDotIndicator pageCount={3}
                            selectedDotStyle={{ backgroundColor: bgcolor.btncolor }}
                            dotStyle={{ backgroundColor: 'white' }}
                            style={{ marginBottom: 10 }} />}>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    }}>

                        <Image
                            style={{ width: '100%', height: '100%', flex: 1 }}
                            source={slider1} />

                        <View style={{ position: 'absolute', marginTop: 20, flexDirection: 'column' }}>

                            <Image
                                style={{
                                    width: 80, height: 80, marginTop: 20,
                                    top: 20,
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                source={appicon} />


                            <Text style={{ color: bgcolor.white, fontSize: fontSize.font14, marginTop: 40, marginLeft: 20, marginRight: 20,fontFamily:'Nunito_SemiBold'}}>Lorem Ipsum is simply
                                <Text style={commonStyles.boldText14}> Dummy Text</Text>
                                <Text style={{ color: bgcolor.white, fontSize: fontSize.font14,fontFamily:'Nunito_SemiBold'}}> of the printing and typesetting industry. Lorem Ipsum has been the</Text>
                                <Text style={commonStyles.boldText14}> industry's</Text>
                                <Text style={{ color: bgcolor.white, fontSize: fontSize.font14,fontFamily:'Nunito_SemiBold'}}> standard dummy text.</Text></Text>
                        </View>

                    </View>

                    <View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    }}>



                        <Image
                            style={{ width: '100%', height: '100%', flex: 1 }}
                            source={slider2} />

                        <View style={{ position: 'absolute', marginTop: 20, flexDirection: 'column' }}>

                            <Image
                                style={{
                                    width: 80, height: 80, marginTop: 20,
                                    top: 20,
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                source={appicon} />


                            <Text style={{ color: bgcolor.white, fontSize: fontSize.font14, marginTop: 40, marginLeft: 20, marginRight: 20,fontFamily:'Nunito_SemiBold' }}>Lorem Ipsum is simply
                                <Text style={commonStyles.boldText14}> Dummy Text</Text>
                                <Text style={{ color: bgcolor.white, fontSize: fontSize.font14,fontFamily:'Nunito_SemiBold'}}> of the printing and typesetting industry. Lorem Ipsum has been the</Text>
                                <Text style={commonStyles.boldText14}> industry's</Text>
                                <Text style={{ color: bgcolor.white, fontSize: fontSize.font14,fontFamily:'Nunito_SemiBold'}}> standard dummy text.</Text></Text>
                        </View>

                    </View>

                    <View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    }}>



                        <Image
                            style={{ width: '100%', height: '100%', flex: 1 }}
                            source={slider3} />

                        <View style={{ position: 'absolute', marginTop: 20, flexDirection: 'column' }}>

                            <Image
                                style={{
                                    width: 80, height: 80, marginTop: 20,
                                    top: 20,
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                source={appicon} />


                            <Text style={{ color: bgcolor.white, fontSize: fontSize.font14, marginTop: 40, marginLeft: 20, marginRight: 20,fontFamily:'Nunito_SemiBold'}}>Lorem Ipsum is simply
                                <Text style={commonStyles.boldText14}> Dummy Text</Text>
                                <Text style={{ color: bgcolor.white, fontSize: fontSize.font14 }}> of the printing and typesetting industry. Lorem Ipsum has been the</Text>
                                <Text style={commonStyles.boldText14}> industry's</Text>
                                <Text style={{ color: bgcolor.white, fontSize: fontSize.font14,fontFamily:'Nunito_SemiBold'}}> standard dummy text.</Text></Text>
                        </View>
                    </View>

                </IndicatorViewPager>

                <View style={{ flexDirection: 'row', position: 'absolute', marginTop: 40, marginLeft: 25, marginRight: 25, bottom: 0, marginBottom: 50 }}>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.replace('Signup');
                        }}
                        activeOpacity={.9}
                        style={{ width: 150, alignSelf: 'center', height: 40, flex: 1, marginRight: 30 }}>
                        <View style={{ borderWidth: 1, borderRadius: 30, width: '100%', height: 40, borderColor: bgcolor.btncolor, justifyContent: 'center', flexDirection: 'row' }}>

                            <Text style={commonStyles.btnTextBluecolor}>Sign up</Text></View></TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.replace('Login');
                        }}
                        activeOpacity={.9}
                        style={{ width: 150, alignSelf: 'center', height: 40,  flex: 1 }}>
                        <View style={{ borderRadius: 30, width: '100%', height: 40, backgroundColor: bgcolor.btncolor, justifyContent: 'center', flexDirection: 'row' }}>

                            <Text style={commonStyles.btnTextWhitecolor}>Login</Text></View></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    pagerStyle: {
        flex: 1,
        backgroundColor: 'white',
    },
    containerImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
});