import React, { useState, useEffect, useRef } from 'react';
import { View, Image, ScrollView, Text, TextInput, TouchableOpacity, Button, StyleSheet, StatusBar, SafeAreaView, Modal, FlatList } from 'react-native';
import bgcolor from '/home/wv/projects/android/nyah/nyah/src/Themes/Colors'
import splash from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/ic_launcher.png'
import calender from '/home/wv/projects/android/nyah/nyah/src/assets/images/calendar.png'
import watch from '/home/wv/projects/android/nyah/nyah/src/assets/images/clock.png'
import cross from '/home/wv/projects/android/nyah/nyah/src/assets/images/crosssign.png'
import { useNavigation } from '@react-navigation/native'
import commonMethod from '/home/wv/projects/android/nyah/nyah/src/helper/commonMethods'
import NetworkUtils from '/home/wv/projects/android/nyah/nyah/src/helper/NetworkUtils';
import commonStyles from '/home/wv/projects/android/nyah/nyah/src/helper/CommonStyles';
import backImage from '/home/wv/projects/android/nyah/nyah/src/assets/images/back.png';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './FrequencyThemesStyles'
import fontsize from '/home/wv/projects/android/nyah/nyah/src/Themes/fontsize';
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-date-picker'
import RBSheet from "react-native-raw-bottom-sheet";


const Frequency = () => {

    const navigation = useNavigation();
    const [step, setStep] = useState(0)
    const [checked, setChecked] = useState(1);
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState(new Date().getTime())
    const refRBSheet = useRef();
    const [mode, setMode] = useState('date')


    return (

        <View style={commonStyles.container}>

            <View style={[styles.viewColumn, { marginLeft: 20, marginRight: 20, marginTop: 10 }]}>

                <View style={[styles.viewRow, { justifyContent: 'flex-end' }]}>
                    {/* <Text style={styles.headingTextCenter}>Select Intrest</Text> */}
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack()
                        }}>
                        <Image
                            style={[commonStyles.crossSign, { marginLeft: 5 }]}
                            source={cross}></Image></TouchableOpacity>
                </View>

                <Text style={[styles.headingTextCenter, { marginTop: 20 }]}>Frequency</Text>


                <View style={styles.viewRow}>

                    <View style={styles.viewRowFlex1}>

                        <RadioButton
                            value="first"
                            uncheckedColor={bgcolor.orange}
                            color={bgcolor.orange}
                            status={checked === 1 ? 'checked' : 'unchecked'}
                            onPress={() => { setChecked(1) }} />
                        <Text style={styles.radioText}>One Time</Text>

                    </View>
                    <View style={styles.viewRowFlex1}>

                        <RadioButton
                            uncheckedColor={bgcolor.orange}
                            color={bgcolor.orange}
                            value="second"
                            status={checked === 2 ? 'checked' : 'unchecked'}
                            onPress={() => { setChecked(2) }} />

                        <Text style={styles.radioText}>Recurring</Text>

                    </View>
                </View>

                <ScrollView
                    contentContainerStyle={styles.scroll_contentContainer}
                    style={styles.scroll_container}>

                    {
                        step == 0 &&

                        <View style={commonStyles.ViewWitthHeight90}>

                            <TouchableOpacity
                                activeOpacity={.9}
                                onPress={() => {
                                    setMode('date'),
                                        refRBSheet.current.open()
                                }}
                            >
                                <View style={[styles.viewRow, { marginTop: 10, marginLeft: 10, marginRight: 10, height: 30 }]}>

                                    <Text style={commonStyles.hintText}>Start Date</Text>

                                    <TouchableOpacity
                                        activeOpacity={.9}
                                        disabled={true}
                                        style={commonStyles.imageRight}>
                                        <Image
                                            style={[commonStyles.dropDownImage, { alignSelf: 'flex-end' }]}
                                            source={calender}></Image></TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <View style={commonStyles.line} />

                            <View style={[styles.viewRow, { marginTop: 10, marginLeft: 10, marginRight: 10, height: 30 }]}>

                                <Text style={commonStyles.hintText}>End Time</Text>

                                <TouchableOpacity
                                    activeOpacity={.9}
                                    onPress={() => {
                                        setMode('time'),
                                            refRBSheet.current.open()
                                    }}
                                    style={commonStyles.imageRight}>
                                    <Image
                                        style={[commonStyles.dropDownImage, { alignSelf: 'flex-end' }]}
                                        source={watch}></Image></TouchableOpacity>
                            </View>
                        </View>
                    }

                    {step == 1 && <View style={styles.viewColumn}>
                    </View>
                    }
                    <RBSheet
                        ref={refRBSheet}
                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        animationType={'slide'}
                        closeOnDragDown
                        customStyles={{
                            container: {
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10
                            }
                        }}>

                        <View style={[styles.viewColumn]}>

                            <View style={{ justifyContent: 'flex-end', flexDirection: 'row', height: 50 }}>
                                <TouchableOpacity
                                    activeOpacity={.9}
                                    onPress={() => {
                                        refRBSheet.current.close()
                                    }}>

                                    <Text style={[commonStyles.headingText, { marginRight: 20 }]}>Cancel</Text></TouchableOpacity>
                                <TouchableOpacity activeOpacity={.9}
                                    onPress={() => {
                                        refRBSheet.current.close()
                                    }}>

                                    <Text style={[commonStyles.headingText, { marginRight: 20 }]}>OK</Text></TouchableOpacity>

                            </View>

                            <DatePicker
                                    dateFormat="YYYY-MM-DD"
                                style={{ marginTop: 20 }}
                                date={date}
                                mode={mode}
                                textColor={bgcolor.orange}
                                onDateChange={date => setDate(date)}
                                minimumDate={new Date()}
                            />
                        </View>
                    </RBSheet>
                </ScrollView>
            </View>
        </View>

    )

}
export default Frequency;