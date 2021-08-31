import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, Text, TextInput, TouchableOpacity, Button, StyleSheet, StatusBar, SafeAreaView, Modal } from 'react-native';
import bgcolor from '/home/wv/projects/android/nyah/nyah/src/Themes/Colors'
import splash from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/ic_launcher.png'
import dropdown from '/home/wv/projects/android/nyah/nyah/src/assets/images/dropdown.png'
import cross from '/home/wv/projects/android/nyah/nyah/src/assets/images/crosssign.png'
import { useNavigation } from '@react-navigation/native'
import commonMethod from '/home/wv/projects/android/nyah/nyah/src/helper/commonMethods'
import NetworkUtils from '/home/wv/projects/android/nyah/nyah/src/helper/NetworkUtils';
import commonStyles from '/home/wv/projects/android/nyah/nyah/src/helper/CommonStyles';
import backImage from '/home/wv/projects/android/nyah/nyah/src/assets/images/back.png';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './OpenFormStyles'
import fontsize from '/home/wv/projects/android/nyah/nyah/src/Themes/fontsize';
import { PermissionsAndroid } from 'react-native';
import {
    launchCamera,
    launchImageLibrary
} from 'react-native-image-picker';

const Openform = () => {

    const [activityName, setActivityName] = useState("");
    const [activityNameLimit, setActivityNameLimit] = useState(75)
    const [briefDescription, setBriefDescription] = useState("");
    const [breifDescriptionLimit, setbreifDescription] = useState(150)
    const [showImageModal, setImageModal] = useState(false);
    const [filePath, setFilePath] = useState('');
    const navigation = useNavigation();

    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs camera permission',
                    },
                );
                // If CAMERA Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else return true;
    };

    const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                    },
                );
                // If WRITE_EXTERNAL_STORAGE Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                console.log('Write permission err', err);
            }
            return false;
        } else return true;
    };

    const captureImage = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
            videoQuality: 'low',
            durationLimit: 30, //Video max duration in seconds
            saveToPhotos: true,
        };
        let isCameraPermitted = await requestCameraPermission();
        let isStoragePermitted = await requestExternalWritePermission();
        if (isCameraPermitted && isStoragePermitted) {
            launchCamera(options, (response) => {
                console.log('Response = ', response);

                if (response.didCancel) {
                    console.log('User cancelled camera picker');
                    return;
                } else if (response.errorCode == 'camera_unavailable') {
                    console.log('Camera not available on device');
                    return;
                } else if (response.errorCode == 'permission') {
                    console.log('Permission not satisfied');
                    return;
                } else if (response.errorCode == 'others') {
                    console.log(response.errorMessage);
                    return;
                }
                console.log('base64 -> ', response.base64);
                console.log('uri -> ', response.uri);
                console.log('width -> ', response.width);
                console.log('height -> ', response.height);
                console.log('fileSize -> ', response.fileSize);
                console.log('type -> ', response.type);
                console.log('fileName -> ', response.fileName);
                setFilePath(response);
            });
        }
    };

    const chooseFile = (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled camera picker');
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                console.log('Camera not available on device');
                return;
            } else if (response.errorCode == 'permission') {
                alconsole.logert('Permission not satisfied');
                return;
            } else if (response.errorCode == 'others') {
                console.log(response.errorMessage);
                return;
            }
            console.log('base64 -> ', response.base64);
            console.log('uri -> ', response.uri);
            console.log('width -> ', response.width);
            console.log('height -> ', response.height);
            console.log('fileSize -> ', response.fileSize);
            console.log('type -> ', response.type);
            console.log('fileName -> ', response.fileName);
            setFilePath(response);
        });
    };

    const validations = () => {

        if (activityName.length < 75) {
            commonMethod.showToast('Enter minimum 75 characters activity name')
        }
        else if (briefDescription.length < 150) {
            commonMethod.showToast('Enter minimum 150 characters breif description')
        }
        else if (filePath == '') {
            commonMethod.showToast('Add activity image')
        }
        else {
            navigation.navigate('Intrest')
        }
    }

    return (

        <KeyboardAwareScrollView style={commonStyles.container}>

            <View style={[styles.viewRow, { marginLeft: 20, marginRight: 20, marginTop: 10 }]}>
                <TouchableOpacity
                    onPress={() => {
                    }}
                    style={{ position: 'absolute', zIndex: 1 }}>

                    <Image
                        style={commonStyles.backArrow}
                        source={backImage} />
                </TouchableOpacity>
                <View style={[styles.viewRow, { justifyContent: 'center' }]}>
                    <Text style={styles.headingTextCenter}>Open</Text>
                    {/* <Image
                        style={[commonStyles.dropDownImage, { marginLeft: 5 }]}
                        source={dropdown}></Image> */}
                </View>
            </View>


            <ScrollView
                contentContainerStyle={styles.contentContainer}
                style={{ flex: 1, width: '100%' }}>

                <View style={[styles.viewColumn, { marginTop: 10 }]}>

                    <View style={styles.ViewWithBorderWithRow}>
                        <TextInput
                            style={styles.textInputWithoutBorder}
                            placeholder="Activity Name"
                            placeholderTextColor={bgcolor.borderGray}
                            autoCapitalize='none'
                            value={activityName}
                            onChangeText={value => {
                                setActivityName(value)
                            }}
                            maxLength={75}
                            selectionColor={bgcolor.orange}
                            underlineColorAndroid="transparent" />
                    </View>

                    <Text style={styles.textSmallSizeRight}>{activityNameLimit - activityName.length} characters remaining</Text>

                    <TextInput
                        style={styles.textInputWithBorder150Characters}
                        value={briefDescription}
                        placeholder="Brfief Description"
                        placeholderTextColor={bgcolor.borderGray}
                        onChangeText={value => {
                            setBriefDescription(value)
                        }}
                        multiline={true}
                        maxLength={150}
                        selectionColor={bgcolor.orange}
                        underlineColorAndroid="transparent" />

                    <Text style={styles.textSmallSizeRight}>{breifDescriptionLimit - briefDescription.length} characters remaining</Text>

                    <View style={styles.viewRow}>


                        <TouchableOpacity
                            onPress={() => {
                                setImageModal(true)
                            }}
                            style={{ marginLeft: 5, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, alignSelf: 'center', fontWeight: '700', color: bgcolor.lightgray }}>Add Activity image</Text>
                        </TouchableOpacity>
                    </View>

                    <Image
                        style={styles.imageWithRadius}
                        source={filePath == '' ? splash : { uri: filePath.uri }} />

                    <TouchableOpacity
                        onPress={() => {
                            validations()
                        }}
                        activeOpacity={.9}
                        style={{marginBottom: 5, marginTop: 30 }}>
                        <View style={{ backgroundColor: bgcolor.btncolor, borderWidth: 0, borderRadius: 30, width: '100%', height: 40, justifyContent: 'center', flexDirection: 'row', }}>
                            <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 5, fontSize: 15 }}>NEXT</Text></View></TouchableOpacity>

                </View>
            </ScrollView>

            {showImageModal &&
                <Modal isVisible={showImageModal}
                    transparent={true}
                    swipeDirection={['up', 'left', 'right', 'down']}
                    style={styles.modalView} >
                    <View style={styles.containerStyle}>
                        <View style={styles.content}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => {
                                    setImageModal(false)
                                }}
                            >
                                <Image
                                    style={[commonStyles.crossSign, { alignSelf: 'flex-end', marginRight: 5, marginTop: 5 }]}
                                    source={cross}></Image>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={commonStyles.headingTextCenter}>
                                    Select Image
                                </Text>
                            </View>
                            <View style={styles.viewRowWithJustify}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setImageModal(false)
                                        captureImage('photo')
                                    }}
                                    activeOpacity={.9}
                                    style={{ flex: 1, marginTop: 20, alignSelf: 'center', marginLeft: 10, marginRight: 10 }}>
                                    <View style={{ backgroundColor: bgcolor.btncolor, borderWidth: 0, borderRadius: 30, width: '100%', height: 40, justifyContent: 'center', flexDirection: 'row' }}>
                                        <Text
                                            style={{ color: 'white', alignSelf: 'center', marginLeft: 5, fontSize: fontsize.font14, color: bgcolor.background }}>TAKE PHOTO</Text></View></TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        setImageModal(false)
                                        chooseFile('photo')
                                    }}
                                    activeOpacity={.9}
                                    style={{ flex: 1, marginTop: 20, alignSelf: 'center', marginRight: 10, marginLeft: 10 }}>
                                    <View style={{ backgroundColor: bgcolor.btncolor, borderWidth: 0, borderRadius: 30, width: '100%', height: 40, justifyContent: 'center', flexDirection: 'row' }}>
                                        <Text
                                            style={{ color: 'white', alignSelf: 'center', marginLeft: 5, fontSize: fontsize.font14, textAlign: 'center' }}>CHOOSE FROM GALLERY</Text></View></TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </Modal>
            }

        </KeyboardAwareScrollView>

    )

}
export default Openform;