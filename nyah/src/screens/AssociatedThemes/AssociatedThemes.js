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
import styles from './AssociatedThemesStyles'
import fontsize from '/home/wv/projects/android/nyah/nyah/src/Themes/fontsize';

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
                "name": "Saas",
                "isSeelected": false
            },
            {
                "id": "103",
                "name": "Saas",
                "isSeelected": false
            },
            {
                "id": "104",
                "name": "Saas",
                "isSeelected": false
            },
            {
                "id": "105",
                "name": "Saas",
                "isSeelected": false
            },
            {
                "id": "106",
                "name": "Saas",
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
                "name": "Travelling",
                "isSeelected": false
            },
            {
                "id": "114",
                "name": "Relationships",
                "isSeelected": false
            },
            {
                "id": "115",
                "name": "Paraenting",
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

const AssociatedThemes = () => {

    const [selectedThemesIds ,setSelectedThemesIds] = useState([])
    const [selectthemes, setThemes] = useState(themes_array)
    const navigation = useNavigation();
    
    const onPressHandlerThemes = (id) => {
        let renderData = [...selectthemes];
        for (let data of renderData) {
            let renderThemes = [...data.themes];
            //console.log(renderThemes);
            for (let renderThemeData of renderThemes){
                if (renderThemeData.id == id) {
                    renderThemeData.isSeelected = (renderThemeData.isSeelected == false) ? true : !renderThemeData.isSeelected;
                    break;
                }
            }
        setThemes(renderData)

        var themesId = [...selectedThemesIds] // clone state
        if(themesId.includes(id)){
            themesId = themesId.filter(_id => _id !== id)
        }
      else {
        themesId.push(id)
      }
      setSelectedThemesIds(themesId)
        console.log('ssss ',themesId)
       
    }
    }



    const validations = () =>{
        if(selectedThemesIds.length > 0)
        {

        }else{
            commonMethod.showToast('Select atleast 1 themes')
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

                <Text style={{ fontSize: 15, marginTop: 2, fontWeight: '700',color:bgcolor.lightgray }}>Pick Associated Themes</Text>

<FlatList
    style={{ marginBottom: 10 }}
    data={selectthemes}
    renderItem={({ item }) => (
        <View>
            <Text style={{fontSize: fontsize.font20, marginTop: 10,color:bgcolor.lightgray }}>{item.title}</Text>
            <FlatList
                data={item.themes}
                renderItem={({ item }) => (
                    <TouchableOpacity
                    activeOpacity={.9}
                        style={{ flex: 1 / 3, marginLeft: 5, marginRight: 5 }}
                        onPress={() => {
                           onPressHandlerThemes(item.id)
                        }}>

                        <View style={{ height: 35, flexDirection: 'row', marginTop: 15, alignItems: 'center', borderColor: bgcolor.borderGray, borderRadius: 25, borderWidth: 1, justifyContent: 'center', backgroundColor:item.isSeelected == true ? bgcolor.btncolor : bgcolor.white }}>

                            <Text
                                multiline={true}
                                style={{ marginLeft: 5, fontSize: fontsize.font13, fontWeight: 'bold', alignSelf: 'center', color: item.isSeelected == true ? bgcolor.white : bgcolor.borderGray}}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                numColumns={3}
                 extraData={
       setSelectedThemesIds    // for multiple items
      }
                keyExtractor={item2 => item2.id}
            />
        </View>
    )}

    keyExtractor={item => item.id} />

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
export default AssociatedThemes;