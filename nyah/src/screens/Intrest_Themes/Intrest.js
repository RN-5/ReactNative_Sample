import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, Text, TextInput, TouchableOpacity, Button, StyleSheet, StatusBar, SafeAreaView, Modal, FlatList } from 'react-native';
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
import styles from './IntrestStyles'
import fontsize from '/home/wv/projects/android/nyah/nyah/src/Themes/fontsize';

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
        title: 'Faith',
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

const Intrest = () => {

    const [selectedIds, setSelectedIds] = useState([])
    const [intrest_types, setIntrestTypes] = useState(IntrestTypes)
    const navigation = useNavigation();
    const onPressHandler = (id) => {
        let renderData = [...intrest_types];
        console.log(id);
        for (let data of renderData) {
            if (data.id == id) {
                 console.log(data.id);
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

    const renderIntrestItem = ({ item, index }) =>
    (
        <TouchableOpacity
            activeOpacity={.9}
            style={{ flex: 1 / 3, marginLeft: item != 0 ? 5 : 0, marginRight: item != 0 ? 5 : 0 }}
            onPress={() => {
                onPressHandler(item.id)
            }}>
            <View style={{ height: 35, flexDirection: 'row', marginTop: 15, alignItems: 'center', borderColor: bgcolor.borderGray, borderRadius: 25, borderWidth: 1, justifyContent: 'center', backgroundColor: item.isSeelcted == true ? bgcolor.btncolor : bgcolor.white }}>
                <Text
                    style={{ marginLeft: 5, fontSize: fontsize.font12, fontWeight: '700', alignSelf: 'center', color: item.isSeelcted == true ? bgcolor.white : bgcolor.borderGray }}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    const validations = () =>{
        if(selectedIds.length > 0)
        {
            navigation.navigate('Associatedthemes')
        }else{
            commonMethod.showToast('Select atleast 1 Intrest')
        }
    }

    return (

        <View style={commonStyles.container}>

            <View style={[styles.viewColumn, { marginLeft: 20, marginRight: 20, marginTop: 10 }]}>

                <View style={[styles.viewRow, { justifyContent: 'flex-end' }]}>
                    {/* <Text style={styles.headingTextCenter}>Select Intrest</Text> */}
                    <TouchableOpacity
                    onPress={()=>{
                         navigation.goBack()
                    }}>
                    <Image
                        style={[commonStyles.dropDownImage, { marginLeft: 5 }]}
                        source={cross}></Image></TouchableOpacity>
                </View>

                <Text style={{ fontSize: 15, marginTop: 20, fontWeight: '700', color: bgcolor.lightgray }}>Pick Associated Intrest</Text>

                <FlatList
                 contentContainerStyle={{ paddingBottom: 20 }}
                    style={{ marginTop: 7 }}
                    data={intrest_types}
                    renderItem={renderIntrestItem}
                    numColumns={3}
                    extraData={
                        selectedIds    // for multiple items
                    }
                    keyExtractor={item => item.id}
                />

                <TouchableOpacity
                    onPress={() => {
                        validations()
                    }}
                    activeOpacity={.9}
                    style={{ width: '100%', marginTop: 7, marginBottom: 5 }}>
                    <View style={{ backgroundColor: bgcolor.btncolor, borderWidth: 0, borderRadius: 30, width: '100%', height: 40, justifyContent: 'center', flexDirection: 'row' }}>
                        <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 5, fontSize: 15 }}>CONTINUE</Text></View></TouchableOpacity>
            </View>
        </View>

    )

}
export default Intrest;