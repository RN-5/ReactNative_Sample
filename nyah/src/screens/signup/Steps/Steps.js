import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, Modal, StyleSheet, ScrollView, TextInput, FlatList, BackHandler, Alert, Dimensions } from 'react-native';
import styles from './SignupStyles';
import circle from '/home/wv/projects/android/nyah/nyah/src/assets/images/circle.png';
import bgcolor from '/home/wv/projects/android/nyah/nyah/src/Themes/Colors';
import splash from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/ic_launcher.png'
import profileplaceholder from '/home/wv/projects/android/nyah/nyah/src/assets/images/profileplaceholder.jpg'
import tick_right from '/home/wv/projects/android/nyah/nyah/src/assets/images/tickright.png'
import backImage from '/home/wv/projects/android/nyah/nyah/src/assets/images/back.png';
import { useNavigation } from '@react-navigation/native'
import { LogBox } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import commonMethod from '/home/wv/projects/android/nyah/nyah/src/helper/commonMethods'
import NetworkUtils from '/home/wv/projects/android/nyah/nyah/src/helper/NetworkUtils';
import eyeopen from '/home/wv/projects/android/nyah/nyah/src/assets/images/eyeopen.png'
import eyeclose from '/home/wv/projects/android/nyah/nyah/src/assets/images/eyeclose.png'
import { RadioButton } from 'react-native-paper';
import fontszes from '/home/wv/projects/android/nyah/nyah/src/Themes/fontsize'
import styless from '/home/wv/projects/android/nyah/nyah/src/screens/otpscreen/OtpStyles.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { PermissionsAndroid } from 'react-native';
import {
    launchCamera,
    launchImageLibrary
} from 'react-native-image-picker';
import commonStyles from '/home/wv/projects/android/nyah/nyah/src/helper/CommonStyles';
import fontSize from '/home/wv/projects/android/nyah/nyah/src/Themes/fontsize';
import { YellowBox } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Join as a Member and participate in \nonline activities.',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Join as a Facilator and lead unique \nonline experiences, utilizing your \nskills and expertise.',
    },
];

const IntrestTypes = [
    {
        id: '1',
        title: 'Wellness',
        isSeelcted: false
    },
    {
        id: '2',
        title: 'Entertainment',
        isSeelcted: false
    },

    {
        id: '3',
        title: 'Life',
        isSeelcted: false
    },
    {
        id: '4',
        title: 'Faith Life',
        isSeelcted: false
    },
    {
        id: '5',
        title: 'World Affairs',
        isSeelcted: false
    },
    {
        id: '6',
        title: 'Culture',
        isSeelcted: false
    },
    {
        id: '7',
        title: 'Tech',
        isSeelcted: false
    },
    {
        id: '8',
        title: 'Places',
        isSeelcted: false
    },
    {
        id: '9',
        title: 'Identtity',
        isSeelcted: false
    },
    {
        id: '10',
        title: 'Arts',
        isSeelcted: false
    },

    {
        id: '11',
        title: 'Hustle',
        isSeelcted: false
    },
    {
        id: '12',
        title: 'Hanging out',
        isSeelcted: false
    },
    {
        id: '13',
        title: 'Travel',
        isSeelcted: false
    },


];

const themes_array = [
    {
        "id": "1",
        "title": "Tech",
        "themes": [
            {
                "id": "100",
                "name": "Vr/Ar",
                "isSeelected": false
            },
            {
                "id": "102",
                "name": "Java",
                "isSeelected": false
            },
            {
                "id": "103",
                "name": "PHP",
                "isSeelected": false
            },
            {
                "id": "104",
                "name": "Swift",
                "isSeelected": false
            },
            {
                "id": "105",
                "name": "Wordpress",
                "isSeelected": false
            },
            {
                "id": "106",
                "name": "Laravel",
                "isSeelected": false
            }
        ]
    },
    {
        "id": "2",
        "title": "Entertainment",
        "themes": [
            {
                "id": "107",
                "name": "Music",
                "isSeelected": false
            },
            {
                "id": "108",
                "name": "Performance",
                "isSeelected": false
            },
            {
                "id": "109",
                "name": "Comedy",
                "isSeelected": false
            },
            {
                "id": "110",
                "name": "Television",
                "isSeelected": false
            },
            {
                "id": "111",
                "name": "Movies",
                "isSeelected": false
            },
            {
                "id": "112",
                "name": "Advice",
                "isSeelected": false
            }
        ]
    },
    {
        "id": "3",
        "title": "Life",
        "isSeelected": false,
        "themes": [
            {
                "id": "113",
                "name": "Travel Lover",
                "isSeelected": false
            },
            {
                "id": "114",
                "name": "Relationships",
                "isSeelected": false
            },
            {
                "id": "115",
                "name": "Parenting",
                "isSeelected": false
            },
            {
                "id": "116",
                "name": "Dating",
                "isSeelected": false
            },
            {
                "id": "117",
                "name": "Support",
                "isSeelected": false
            },
            {
                "id": "118",
                "name": "Develper",
                "isSeelected": false
            }
        ]
    }
]

const Steps = () => {
    const [step, setSteps] = useState(0)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [isCorectEmail, correctEmail] = useState(false)
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [confirm_password, setConfirmPassword] = useState("")
    const [securePassword, setSecurePassword] = useState(true)
    const [secureConfirmPassword, setSecureConfirmPassword] = useState(true)
    const [shortBio, setShortBio] = useState("")
    const [checked, setChecked] = useState(0);
    const [intrest_types, setIntrestTypes] = useState(IntrestTypes)
    const [selectthemes, setThemes] = useState(themes_array)
    const [showModal, setModal] = useState(false);
    const [showImageModal, setImageModal] = useState(false);
    const [filePath, setFilePath] = useState('');
    const [selectedIds, setSelectedIds] = useState([])
    const [selectedThemesIds, setSelectedThemesIds] = useState([])

    const lastNameRef = useRef();
    const emailRef = useRef();
    const userNameRef = useRef();
    const passwordRef = useRef();
    const confirmpasswordRef = useRef();
    const scroll_view = useRef();
    const navigation = useNavigation();


    async function saveMember(member) {
        await AsyncStorage.setItem('Member', member);
      }

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']),
        saveMember('Member')

    }, [])

    const renderItem = ({ item, index }) => (
        <View style={{ flexDirection: 'row', marginTop: 7, alignItems: 'center' }}>
            <RadioButton
                uncheckedColor={bgcolor.orange}
                color={bgcolor.orange}
                value={index}
                status={checked === index ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(index),
                index == 0 ? saveMember('Member') : saveMember('Facilator')}}
            />
            <Image
                style={{ width: 50, height: 50 }}
                source={splash} />

            <Text
                multiline={true}
                style={{ marginLeft: 5, fontSize: fontszes.font14, alignSelf: 'center', color: bgcolor.lightgray,fontFamily:'Nunito_SemiBold' }}>{item.title}</Text>
        </View>
    );

    const onPressHandler = (id) => {
        let renderData = [...intrest_types];

        for (let data of renderData) {
            if (data.id == id) {
                data.isSeelcted = (data.isSeelcted == false) ? true : !data.isSeelcted;
                break;
            }
        }
        setIntrestTypes(renderData)

        var selectedId = [...selectedIds] // clone state
        if (selectedId.includes(id))
            selectedId = selectedId.filter(_id => _id !== id)
        else
            selectedId.push(id)

        setSelectedIds(selectedId)

    }

    const onPressHandlerThemes = (id) => {
        console.log(id);
        let renderData = [...selectthemes];
        for (let data of renderData) {
            let renderThemes = [...data.themes];
            //console.log(renderThemes);
            for (let renderThemeData of renderThemes) {
                if (renderThemeData.id == id) {
                    renderThemeData.isSeelected = (renderThemeData.isSeelected == false) ? true : !renderThemeData.isSeelected;
                    break;
                }
            }
            setThemes(renderData)

            var themesId = [...selectedThemesIds] // clone state
            if (themesId.includes(id)) {
                themesId = themesId.filter(_id => _id !== id)
            }
            else {
                themesId.push(id)
            }
            setSelectedThemesIds(themesId)
            console.log('ssss ', themesId)

        }
    }

    const renderIntrestItem = ({ item, index }) => (
        <TouchableOpacity
            activeOpacity={.9}
            style={{ marginLeft: item != 0 ? 2 : 0, marginRight: item != 0 ? 2 : 0, marginTop: 10 }}
            onPress={() => {
                onPressHandler(item.id)
            }}>
            <View style={{ height: 35, flexDirection: 'row', alignItems: 'center', borderColor: bgcolor.borderGray, borderRadius: 20, borderWidth: 1, justifyContent: 'center', backgroundColor: item.isSeelcted == true ? bgcolor.orange : bgcolor.white,minWidth:85 }}>
                <Text
                    style={{ marginLeft: 15, marginRight: 15, fontSize: fontszes.font12, alignSelf: 'center', color: item.isSeelcted == true ? bgcolor.white : bgcolor.lightgray, fontFamily:'Nunito_Bold'}}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    const validations = async () => {
        const isConnected = await NetworkUtils.isNetworkAvailable()

        if (firstName == "" || firstName.length == 0) {
            commonMethod.showToast('Enter First Name')
        }
        else if (lastName == "" || lastName.length == 0) {
            commonMethod.showToast('Enter Last Name')
        }
        else if (email == "" || !commonMethod.validateEmail(email)) {
            commonMethod.showToast('Enter valid email id')
        }
        else if (userName == "" || userName.length < 5) {
            commonMethod.showToast('Enter minimum 5 digits User Name')
        }
        else if (password == "" || password.length < 5) {
            commonMethod.showToast('Enter minimum 6 characters Password')
        }
        else if (confirm_password == "" || confirm_password.length < 5) {
            commonMethod.showToast('Enter minimum 6 characters Confirm Password')
        }
        else if (password != confirm_password) {
            commonMethod.showToast('Password & Confirm Password not matched')
        }
        else if (!toggleCheckBox) {
            commonMethod.showToast('Please accept User Agreement')

        }

        else if (!isConnected) {
            commonMethod.showToast('No Internet')
        } else {
            scroll_view.current?.scrollTo({
                y: 0,
                animated: true
            });
            setSteps(1)
        }
    }

    const validationStep0 = async () => {
        const isConnected = await NetworkUtils.isNetworkAvailable()

        if (shortBio.length < 150) {
            commonMethod.showToast('Enter 150 characters short-bio')

        }
        else if (!isConnected) {
            commonMethod.showToast('No Internet')
        } else {
            scroll_view.current?.scrollTo({
                y: 0,
                animated: true
            });
            setSteps(2)
        }
    }


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

    return (
        <SafeAreaView style={commonStyles.container}>
            <View style={[commonStyles.topView]}>

                <TouchableOpacity
                    onPress={() => {
                        if (step == 3) {
                            setSteps(2)
                        }
                        else if (step == 2) {
                            setSteps(1)

                        }
                        else if (step == 1) {
                            setSteps(0)

                        } else {
                            //BackHandler.exitApp();
                            navigation.navigate('Login')
                        }
                    }}>
                    <Image
                        style={commonStyles.backArrow}
                        source={backImage} />
                </TouchableOpacity>

                <Text style={[commonStyles.topHeaderText]}>SIGN UP</Text>
            </View>

            <Text
                multiline={true}
                style={styles.centerAlign}>Hi Share your details below & get {'\n'}started to experience NYAH!
            </Text>

            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center', marginLeft: 40, marginRight: 40 }}>

                <View style={{ flexDirection: 'column', marginLeft: 5, alignItems: 'center', justifyContent: 'center', justifyContent: 'center' }}>
                    <Image
                        style={{ width: 20, height: 20, tintColor: step == 0 || step == 1 || step == 2 || step == 3 ? bgcolor.orange : bgcolor.lightgray, alignSelf: 'flex-start', marginTop: 5 }}
                        source={circle} />
                </View>

                <View style={{
                    width: 80,
                    height: 2,
                    flex: 1,
                    alignSelf: 'center',
                    backgroundColor: step == 2 || step == 3 ? bgcolor.orange : bgcolor.lightgray, marginLeft: 5, borderRadius: 5
                }}></View>

                <View style={{ flexDirection: 'column', marginLeft: 5, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', justifyContent: 'center' }}>
                    <Image
                        style={{ width: 20, height: 20, tintColor: step == 2 || step == 3 ? bgcolor.orange : bgcolor.lightgray }}
                        source={circle} />


                </View>

                <View style={{
                    width: 80,
                    height: 2,
                    flex: 1,
                    alignSelf: 'center',
                    backgroundColor: step == 3 ? bgcolor.orange : bgcolor.lightgray, marginLeft: 5, borderRadius: 5, alignItems: 'center', justifyContent: 'center', justifyContent: 'center'
                }}></View>
                <Image
                    style={{ width: 20, height: 20, tintColor: step == 3 ? bgcolor.orange : bgcolor.lightgray, marginLeft: 5 }}
                    source={circle} />
            </View>
            <View style={{ marginLeft: 40, flexDirection: 'row' }}>
                <Text style={{ flex: 1, fontSize: fontszes.font14, marginTop: 10, color: step == 0 || step == 1 || step == 2 || step == 3 ? bgcolor.orange : bgcolor.lightgray, alignSelf: 'flex-start',fontFamily:'Nunito_SemiBold'  }}>Step 1</Text>
                <Text style={{ marginLeft: 40, flex: 1, fontSize: fontszes.font14, marginTop: 10, color: step == 2 || step == 3 ? bgcolor.orange : bgcolor.lightgray, alignSelf: 'flex-start',fontFamily:'Nunito_SemiBold'  }}>Step 2</Text>
                <Text style={{ marginLeft: 50, flex: 1, fontSize: fontszes.font14, marginTop: 10, color: step == 3 ? bgcolor.orange : bgcolor.lightgray, alignSelf: 'flex-start',fontFamily:'Nunito_SemiBold'  }}>Step 3</Text>
            </View>
            <View style={{padding: 10, flex: 1}}>

            <ScrollView
            keyboardShouldPersistTaps="always"

                ref={scroll_view}
                contentContainerStyle={[styles.contentContainer, { justifyContent: 'center'}]}
             >
                <View style={{ flexDirection: 'column',height:'100%'}}>

                    {step == 0 &&
                        <View style={{ flexDirection: 'column' }}>

                            {/* <Text style={styles.headingText}>First Name</Text> */}
                            <View style={[commonStyles.ViewWithoutBorder, { marginTop: 20 }]}>
                                <TextInput
                                    style={[styles.textInputWithoutBorder,{fontFamily:'Nunito_SemiBold'}]}
                                    placeholder="Enter First Name"
                                    placeholderTextColor={bgcolor.borderGray}
                                    returnKeyType="next"
                                    value={firstName}
                                    onChangeText={value => {
                                        setFirstName(value)
                                    }}
                                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                                   
                                    selectionColor={bgcolor.orange}
                                    onSubmitEditing={() => {
                                        lastNameRef.current.focus();
                                    }}
                                    underlineColorAndroid="transparent" />
                                {firstName.length > 3 &&
                                    <Image
                                        source={tick_right}
                                        style={{ alignSelf: 'center', width: 20, height: 20, marginRight: 10 }} />
                                }
                            </View>

                            {/* <Text style={styles.headingText}>Last Name</Text> */}
                            <View style={[commonStyles.ViewWithoutBorder, { marginTop: 20 }]}>

                                <TextInput
                                    ref={lastNameRef}
                                    style={styles.textInputWithoutBorder}
                                    placeholder="Enter Last Name"
                                    placeholderTextColor={bgcolor.borderGray}
                                    returnKeyType="next"
                                    value={lastName}
                                    onChangeText={value => {
                                        setLastName(value)
                                    }}
                                   
                                    onSubmitEditing={() => {
                                        emailRef.current.focus();
                                    }}
                                    selectionColor={bgcolor.orange}
                                    underlineColorAndroid="transparent" />

                                {lastName.length > 3 &&
                                    <Image
                                        source={tick_right}
                                        style={{ alignSelf: 'center', width: 20, height: 20, marginRight: 10 }} />
                                }

                            </View>
                            {/* <Text style={styles.headingText}>Email</Text> */}

                            <View style={[commonStyles.ViewWithoutBorder, { marginTop: 20 }]}>
                                <TextInput
                                    ref={emailRef}
                                    style={styles.textInputWithoutBorder}
                                    placeholder="Enter Email"
                                    placeholderTextColor={bgcolor.borderGray}
                                    autoCapitalize='none'
                                    keyboardType='email-address'
                                    value={email}
                                    onChangeText={value => {
                                        correctEmail(commonMethod.validateEmail(value))
                                        setEmail(value)
                                    }}
                                   
                                    onSubmitEditing={() => {
                                        userNameRef.current.focus();
                                    }}
                                    selectionColor={bgcolor.orange}
                                    underlineColorAndroid="transparent" />

                                {isCorectEmail &&
                                    <Image
                                        source={tick_right}
                                        style={{ alignSelf: 'center', width: 20, height: 20, marginRight: 10 }} />
                                }

                            </View>

                            {/* <Text style={styles.headingText}>User Name</Text> */}
                            <View style={[commonStyles.ViewWithoutBorder, { marginTop: 20 }]}>

                                <TextInput
                                    ref={userNameRef}
                                    style={styles.textInputWithoutBorder}
                                    placeholder="Enter UserName"
                                    placeholderTextColor={bgcolor.borderGray}
                                    value={userName}
                                    onChangeText={value => {
                                        setUserName(value)
                                    }}

                                    onSubmitEditing={() => {
                                        passwordRef.current.focus();
                                    }}
                                    selectionColor={bgcolor.orange}
                                    underlineColorAndroid="transparent" />

                                {userName.length > 4 &&
                                    <Image
                                        source={tick_right}
                                        style={{ alignSelf: 'center', width: 20, height: 20, marginRight: 10 }} />
                                }
                            </View>

                            {/* <Text style={styles.headingText}>Password</Text> */}
                            <View style={[commonStyles.ViewWithoutBorder, { marginTop: 20 }]}>

                                <TextInput
                                    ref={passwordRef}
                                    style={[styles.textInputWithoutBorder]}
                                    placeholder="Enter Password (min 6 characters)"
                                    autoCapitalize='none'
                                    placeholderTextColor={bgcolor.borderGray}
                                    value={password}
                                    secureTextEntry={securePassword}
                                    onChangeText={value => {
                                        setPassword(value)
                                    }}
                                    
                                    onSubmitEditing={() => {
                                        confirmpasswordRef.current.focus();
                                    }}
                                    selectionColor={bgcolor.orange}
                                    underlineColorAndroid="transparent" />

                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    style={{ justifyContent: 'center' }}
                                    onPress={() => {
                                        if (securePassword) {
                                            setSecurePassword(false)
                                        } else {
                                            setSecurePassword(true)
                                        }
                                    }}
                                >
                                    <Image
                                        style={{ width: 20, height: 20, alignSelf: 'center', marginRight: 10, tintColor: bgcolor.lightgray }}
                                        source={securePassword ? eyeopen : eyeclose} />

                                </TouchableOpacity>
                            </View>
                            {/* <Text style={styles.headingText}>Confirm Password</Text> */}
                            <View style={[commonStyles.ViewWithoutBorder, { marginTop: 20 }]}>

                                <TextInput
                                    ref={confirmpasswordRef}
                                    style={styles.textInputWithoutBorder}
                                    placeholder="Confirm Password (min 6 characters)"
                                    placeholderTextColor={bgcolor.borderGray}
                                    autoCapitalize='none'
                                    value={confirm_password}
                                    secureTextEntry={secureConfirmPassword}
                                    onChangeText={value => {
                                        setConfirmPassword(value)
                                    }}
                                   
                                    selectionColor={bgcolor.orange}
                                    underlineColorAndroid="transparent" />

                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    style={{ justifyContent: 'center' }}
                                    onPress={() => {
                                        if (secureConfirmPassword) {
                                            setSecureConfirmPassword(false)
                                        } else {
                                            setSecureConfirmPassword(true)
                                        }
                                    }}>
                                    <Image
                                        style={{ width: 20, height: 20, alignSelf: 'center', marginRight: 10, tintColor: bgcolor.lightgray }}
                                        source={secureConfirmPassword ? eyeopen : eyeclose} /></TouchableOpacity>

                            </View>

                            
                            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>

                                <CheckBox
                                    tintColor={bgcolor.green}
                                    onCheckColor={bgcolor.orange}
                                    tintColors={{ true: bgcolor.green, false: bgcolor.lightgray }}
                                    disabled={false}
                                    value={toggleCheckBox}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                />

                                <Text style={{ fontSize: 14, marginLeft: 5, alignSelf: 'center',fontFamily:'Nunito_SemiBold' }}>I accept the <Text style={commonStyles.boldText14}>User Agreement.</Text></Text>
                            </View>

                    
                        </View>
                    }

                    {
                        step == 1 && <View style={styles.viewColumn}>

                            <View style={[commonStyles.viewRow, { justifyContent: 'flex-start', marginTop: 5 }]}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setImageModal(true)
                                    }}>
                                    <Image
                                        style={[commonStyles.circularImage]}
                                        source={filePath == '' ? profileplaceholder : { uri: filePath.uri }} /></TouchableOpacity>
                                {/* <TouchableOpacity
                                    onPress={() => {
                                        setImageModal(true)
                                    }}
                                    style={{ marginLeft: 5, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 15, alignSelf: 'center', fontWeight: '700', color: bgcolor.lightgray }}>Add Profile Picture</Text>
                                </TouchableOpacity> */}
                            </View>

                            <Text style={{ fontSize: 14, marginTop: 10, color: bgcolor.lightgray,fontFamily:'Nunito_Bold' }}>Your Preffered role </Text>

                            <Text style={{ fontSize: 14, marginTop: 7, color: bgcolor.lightgray,fontFamily:'Nunito_SemiBold' }}>Tell us how you wish to participate
                            </Text>

                            <FlatList
                                data={DATA}
                                renderItem={renderItem}
                                keyExtractor={item => item.id} />
                            <View style={[commonStyles.viewRow, { marginTop: 15 }]}>
                                <Text style={styles.headingTextshotBio}>Tell us about yourself</Text>
                                <Text style={commonStyles.secondaryText}> {150 - shortBio.length} characters remaining</Text>
                            </View>
                            <TextInput
                                style={[styles.textInputWithBorder150Characters, { marginTop: 10, marginBottom: 20 }]}
                                value={shortBio}
                                placeholder="short bio (minimum 150 characters)"
                                placeholderTextColor={bgcolor.borderGray}
                                onChangeText={value => {
                                    //setShortBioCharacters((shortBiochracters - value.length)),
                                    setShortBio(value)

                                }}
                                multiline={true}
                                maxLength={150}
                                selectionColor={bgcolor.orange}
                                underlineColorAndroid="transparent" />

                            {/* <Text style={{ color: bgcolor.lightgray, alignSelf: 'flex-start', marginLeft: 5, fontSize: 15, marginTop: 10 }}>{shortBiochracters} Characters Remaining</Text> */}

                        </View>
                    }

                    {
                        step == 2 && <View style={styles.viewColumn}>

                            <Text style={{ fontSize: 15, marginTop: 2, color: bgcolor.lightgray, marginLeft: 7,fontFamily:'Nunito_SemiBold' }}>Tell us more about your interests so that we can personalize your experience.</Text>

                            <FlatList
                                contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
                                style={{ marginTop: 7,flex:1,alignSelf:'center' }}
                                data={intrest_types}
                                renderItem={renderIntrestItem}
                                extraData={
                                    selectedIds    // for multiple items
                                }
                                keyExtractor={item => item.id}
                            />
                        </View>
                    }

                    {
                        step == 3 && <View style={styles.viewColumn}>

                            <Text style={{ fontSize: 15, marginTop: 2,  color: bgcolor.lightgray,fontFamily:'Nunito_SemiBold' }}>Select themes of your intrests to further personalize your experience</Text>

                            <FlatList
                                data={selectthemes}

                                style={{ marginBottom: 15 }}
                                contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
                                renderItem={({ item }) => (
                                    <View>
                                        <Text style={{ fontSize: fontszes.font15, marginTop: 10, color: bgcolor.lightgray,fontFamily:'Nunito_SemiBold' }}>{item.title}</Text>
                                        <FlatList
                                            contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
                                            style={{ marginBottom: 15 }}
                                            data={item.themes}
                                            numColumns={3}
                                            showsVerticalScrollIndicator={false}
                                            showsHorizontalScrollIndicator={false}
                                            renderItem={({ item }) => (
                                                <TouchableOpacity
                                                    activeOpacity={.9}
                                                    style={{ marginLeft: item != 0 ? 2 : 0, marginRight: item != 0 ? 2 : 0, marginTop: 10}}
                                                    onPress={() => {
                                                        onPressHandlerThemes(item.id)
                                                    }}>

                                                    <View style={{ height: 35, flexDirection: 'row', alignItems: 'center', borderColor: bgcolor.borderGray, borderRadius: 20, borderWidth: 1, justifyContent: 'center', backgroundColor: item.isSeelected == true ? bgcolor.orange : bgcolor.white, minWidth:85 }}>

                                                        <Text
                                                            multiline={true}
                                                            style={{ marginLeft: 10, marginRight: 10, fontSize: fontszes.font13, alignSelf: 'center', color: item.isSeelected == true ? bgcolor.white : bgcolor.lightgray,fontFamily:'Nunito_SemiBold' }}>{item.name}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            )}
                                            extraData={
                                                setSelectedThemesIds    // for multiple items
                                            }
                                            keyExtractor={item2 => item2.id}
                                        />
                                    </View>
                                )}

                                keyExtractor={item => item.id} />
                        </View>
                    }
                </View>
            </ScrollView>
             </View>           
            {
                step == 0 &&
                <TouchableOpacity
                    disabled={firstName.length >= 4 && lastName.length >= 4 && isCorectEmail && userName.length >= 5 && password.length >= 6 && confirm_password.length >= 6 ? false : true}
                    onPress={() => {
                        step == 0 ? validations() : validationStep0();
                    }}
                    activeOpacity={.9}
                    style={[commonStyles.btnBg, commonStyles.footer, { backgroundColor: firstName.length >= 4 && lastName.length >= 4 && isCorectEmail && userName.length >= 5 && password.length >= 6 && confirm_password.length >= 6 ? bgcolor.btncolor : bgcolor.borderGray }]}>
                    <View style={[commonStyles.btnBg, { backgroundColor: firstName.length >= 4 && lastName.length >= 4 && isCorectEmail && userName.length >= 5 && password.length >= 6 && confirm_password.length >= 6 ? bgcolor.btncolor : bgcolor.borderGray }]}>

                        <Text
                            style={[commonStyles.btnTextWhitecolor]}>Continue</Text></View></TouchableOpacity>}

            {
                step == 1 &&
                <TouchableOpacity
                    disabled={shortBio.length == 150 ? false : true}
                    onPress={() => {
                        step == 0 ? validations() : validationStep0();
                    }}
                    activeOpacity={.9}
                    style={[commonStyles.btnBg, commonStyles.footer, { backgroundColor: shortBio.length == 150 ? bgcolor.btncolor : bgcolor.borderGray }]}>
                    <View style={[commonStyles.btnBg, { backgroundColor: shortBio.length == 150 ? bgcolor.btncolor : bgcolor.borderGray }]}>

                        <Text
                            style={[commonStyles.btnTextWhitecolor]}>Continue</Text></View></TouchableOpacity>}


            {step == 2 &&
                <View style={[commonStyles.footer, { flexDirection: 'column', height: 60, width: '100%', justifyContent: 'center', alignContent: 'center', elevation: 28 }]}>

                    <TouchableOpacity
                        onPress={() => {
                            if (selectedIds.length > 0) {
                                step == 2 ? setSteps(3) : setSteps(1)

                            } else {
                                commonMethod.showToast('Select 1 interest inorder to proceed to next screen')
                            }
                        }}
                        activeOpacity={.9}
                        style={commonStyles.btnBg}>
                        <View style={[commonStyles.btnBg, { borderColor: bgcolor.btncolor, backgroundColor: bgcolor.btncolor, borderWidth: 1, borderRadius: 30, width: '100%', height: 40, justifyContent: 'center', flexDirection: 'row' }]}>

                            <Text style={{ color: bgcolor.white, alignSelf: 'center', marginLeft: 5, fontSize: 15,fontFamily:'Nunito_SemiBold' }}>Continue</Text></View>
                    </TouchableOpacity>


                    <Text
                        onPress={() => {
                            setModal(true)
                        }}
                        style={{ color: bgcolor.btncolor, alignSelf: 'center', marginLeft: 5, fontSize: 15, marginTop: 7,fontFamily:'Nunito_SemiBold' }}>SKIP</Text>

                </View>
            }
            {step == 3 && <View style={[commonStyles.footer, { flexDirection: 'column', height: 60, width: '100%', justifyContent: 'center', alignContent: 'center', elevation: 28 }]}>


                <TouchableOpacity
                    onPress={() => {
                        if (selectedThemesIds.length > 0) {
                            navigation.replace('HomeScreen');

                        } else {
                            commonMethod.showToast('Atleast select 1 theme inorder to proceed to next screen')
                        }
                    }}
                    activeOpacity={.9}
                    style={[commonStyles.btnBg, { alignSelf: 'center', marginLeft: 10 }]}>
                    <View style={[commonStyles.btnBg, { borderColor: bgcolor.btncolor, backgroundColor: bgcolor.btncolor, borderWidth: 1, borderRadius: 30, width: '100%', height: 40, justifyContent: 'center', flexDirection: 'row' }]}>

                        <Text style={{ color: bgcolor.white, alignSelf: 'center', marginLeft: 5, fontSize: 15,fontFamily:'Nunito_SemiBold' }}>{step == 2 ? 'Next' : 'Continue'}</Text></View></TouchableOpacity>



                <Text
                    onPress={() => {
                        setModal(true)
                    }}
                    style={{ color: bgcolor.btncolor, alignSelf: 'center', marginLeft: 5, fontSize: 15, marginTop: 7,fontFamily:'Nunito_SemiBold' }}>SKIP</Text>


            </View>
            }
            {
                showModal &&
                <Modal isVisible={showModal}
                    transparent={true}
                    swipeDirection={['up', 'left', 'right', 'down']}
                    style={styles.modalView}
                >
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        activeOpacity={1}
                        onPressOut={() => { setModal(false) }}>
                        <View style={commonStyles.containerStyle}>
                            <View style={[commonStyles.modal120,{height:170}]}>
                            <Text style={[commonStyles.headingText,commonStyles.header,{alignSelf:'flex-start',marginLeft:12,justifyContent:'flex-start',marginRight:12,textAlign:'left'}]}>
                                    {step == 2 ? 'Nyah personalizes your experience based on your interests.' : 'Nyah personalizes your experience based on your interests.'}
                                </Text>

                                <Text style={{ fontSize: fontszes.font14, marginTop: 10, color: bgcolor.lightgray, alignSelf: 'flex-start', marginLeft: 15, marginRight: 15,fontFamily:'Nunito_SemiBold' }}>
                                    {'Do you still wish to Skip?'}
                                </Text>
                                <View style={[commonStyles.viewRow, { justifyContent: 'flex-end', marginRight: 15,marginBottom:10 }]}>

                                    <TouchableOpacity
                                        onPress={() => {
                                            setModal(false),
                                                step == 2 ? '' : ''
                                        }}
                                        activeOpacity={.9}
                                        style={{ width: 40, marginTop: 20, alignSelf: 'center', marginLeft: 10 }}>
                                        <View style={{ backgroundColor: bgcolor.white, borderWidth: 0, borderRadius: 30, width: '100%', height: 40, justifyContent: 'center', flexDirection: 'row' }}>
                                            <Text
                                                style={{ color: bgcolor.btncolor, alignSelf: 'center', marginLeft: 5, fontSize: 15 }}>NO</Text></View></TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => {
                                            setModal(false),
                                                step == 2 ? setSteps(3) : selectedThemesIds.length > 0 ? navigation.replace('HomeScreen') : commonMethod.showToast('Atleast select 1 theme inorder to proceed to next screen')

                                        }}
                                        activeOpacity={.9}
                                        style={{ width: 40, marginTop: 20, alignSelf: 'center'}}>
                                        <View style={{ backgroundColor: bgcolor.white, borderWidth: 0, borderRadius: 30, width: '100%', height: 40, justifyContent: 'center', flexDirection: 'row' }}>
                                            <Text
                                                style={{ color: bgcolor.btncolor, alignSelf: 'center', marginLeft: 5, fontSize: 15 }}>YES</Text></View></TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>
            }
            {showImageModal &&
                <Modal isVisible={showImageModal}
                    transparent={true}
                    swipeDirection={['up', 'left', 'right', 'down']}
                    style={styless.modalView}>
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        activeOpacity={1}
                        onPressOut={() => { setImageModal(false) }}>
                        <View style={commonStyles.containerStyle}>
                            <View style={[commonStyles.modal120,{height:110}]}>
                                <Text style={[commonStyles.headingText, { marginLeft: 20, marginRight: 20, marginTop: 10,alignSelf:'flex-start' }]}>
                                    Add a Profile Photo!
                                </Text>

                                <Text
                                    onPress={() => {
                                        setImageModal(false)
                                        captureImage('photo')
                                    }}
                                    style={[commonStyles.textDarkGray14, { fontWeight: '500', marginLeft: 20, marginTop: 10, color: bgcolor.btncolor }]}>Take Photo</Text>


                                <Text
                                    onPress={() => {
                                        setImageModal(false)
                                        chooseFile('photo')
                                    }}
                                    style={[commonStyles.textDarkGray14, { fontWeight: '500', marginLeft: 20, marginTop: 10, color: bgcolor.btncolor }]}>Choose from  gallery</Text>

                                {/* <Text
                                onPress={() => {
                                    setImageModal(false)

                                }}
                                style={[commonStyles.textDarkGray14, { fontWeight: '500', marginLeft: 20, marginTop: 15 }]}>Cancel</Text> */}


                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>
            }
        </SafeAreaView>
    )
}
export default Steps;