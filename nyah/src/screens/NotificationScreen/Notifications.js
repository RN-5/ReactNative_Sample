import React, { useState, useEffect, useRef } from 'react';
import { View, Image, ScrollView, Text, TextInput, TouchableOpacity, Button, StyleSheet, StatusBar, SafeAreaView, FlatList, Switch, Touchable } from 'react-native';
import bgcolor from '/home/wv/projects/android/nyah/nyah/src/Themes/Colors'
import splash from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/ic_launcher.png'

import dropdown from '/home/wv/projects/android/nyah/nyah/src/assets/images/dropdownarrow.png'
import { useNavigation } from '@react-navigation/native'
import commonMethod from '/home/wv/projects/android/nyah/nyah/src/helper/commonMethods'
import NetworkUtils from '../../helper/NetworkUtils';
import commonStyles from '/home/wv/projects/android/nyah/nyah/src/helper/CommonStyles';
import backImage from '/home/wv/projects/android/nyah/nyah/src/assets/images/back.png';
import tick_right from '/home/wv/projects/android/nyah/nyah/src/assets/images/tickright.png'
import RBSheet from "react-native-raw-bottom-sheet";
import notificationIcon from '/home/wv/projects/android/nyah/nyah/src/assets/images/bell.png'
import fontSize from '/home/wv/projects/android/nyah/nyah/src/Themes/fontsize';
import CardView from 'react-native-cardview'
import home from '/home/wv/projects/android/nyah/nyah/src/assets/images/home.png';
import calndar from '/home/wv/projects/android/nyah/nyah/src/assets/images/calendarcolorful.png';
import settings from '/home/wv/projects/android/nyah/nyah/src/assets/images/settings.png';
import profileAvatar from '/home/wv/projects/android/nyah/nyah/src/assets/images/profileplaceholder.jpg'

const IntrestTypes = [
    {
        id: '0',
        title: 'All Interest',
        isSeelcted: false
    },
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

const viewByData = [
    {
        id: '1',
        title: 'All Notifications',
        isSeelcted: false
    },
    {
        id: '2',
        title: 'New Followers',
        isSeelcted: false
    },

    {
        id: '3',
        title: 'Activity Notifications',
        isSeelcted: false
    },
    {
        id: '4',
        title: 'From People You Follow',
        isSeelcted: false
    },
];

const Notifications = () => {

    const navigation = useNavigation();
    const [intrest_types, setIntrestTypes] = useState(IntrestTypes)
    const [viewAll, selectedViewAll] = useState('ALL NOTIFICATIONS')

    const refRBSheet = useRef();

    const renderList = ({ item, index }) => (

        <TouchableOpacity
            activeOpacity={.9}
            style={{marginBottom : index == intrest_types.length -1 ? 10 : 0}}
            onPress={() => {
                //setItem(item),
                    refRBSheetMainList.current.open();
            }}>
          

                <View style={{ marginTop: 20, flexDirection: 'row' }}>


                    <Image
                        style={[commonStyles.circularImage18, {width:50,height:50 }]}
                        source={profileAvatar} />

                        <View style={commonStyles.viewRowWithoutFlex,{marginLeft:5}}>
                        <Text style={[commonStyles.subHeadingTextGray,{marginTop:0}]}>Reminder
                        <Text style={[commonStyles.boldText14,{marginTop:0}]}> Welcome Michelle Obama</Text>
                        </Text>
                        <Text style={[commonStyles.subHeadingTextGray,{marginTop:0,alignSelf:'flex-start'}]}>starts soons 
                        <Text style={[commonStyles.secondaryText,{marginTop:0,alignSelf:'flex-start'}]}> 5 m</Text>
                        </Text>

                        </View>

                </View>
        </TouchableOpacity>
    );


    const renderViewBy = ({ item, index }) => (
        <View style={[commonStyles.viewColumnWithoutTop]}>
        <TouchableOpacity
        style={{backgroundColor : item.title == viewAll ? bgcolor.orange : bgcolor.white,height:40}}
        activeOpacity={.9}
            onPress={() => {
                selectedViewAll(item.title),
                    refRBSheet.current.close()
            }}>
            <View style={[commonStyles.viewColumnWithoutTop, { justifyContent: 'center' }]}>
                <View style={{ justifyContent: 'center' }}>
                    <Text
                        style={[commonStyles.textDarkGray14, { marginLeft: 10,color:item.title == viewAll ? bgcolor.white : bgcolor.lightgray,fontFamily: item.title == viewAll ? 'Nunito_Bold' : 'Nunito_SemiBold' }]}>{item.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
        {index != viewByData.length -1 &&
                    <View style={[commonStyles.line]} />
                }
        </View>
    );

    return (

        <SafeAreaView style={[commonStyles.container]}>
            <View style={[commonStyles.topView,{flexDirection:'column',flex:1}]}>
            <View style={[commonStyles.topView,{marginLeft:0,marginRight:0,marginTop:0}]}>

                <TouchableOpacity
                    style={[commonStyles.backArrow, {position:'absolute',left:0,top:0}]}
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <Image
                        style={[commonStyles.backArrow,{position:'absolute',flex:1}]}
                        source={backImage} />
                </TouchableOpacity>

                <Text style={[commonStyles.topHeaderText, { marginTop: -2,flex:0,textTransform:'uppercase',textAlign: 'right', alignSelf: 'stretch' }]}>{viewAll}
               
                </Text>
                <TouchableOpacity
                    style={[commonStyles.dropDownArrow, { zIndex: 1,marginLeft:5, }]}
                    onPress={() => {
                        refRBSheet.current.open();
                    }}>
                    <Image
                        style={[commonStyles.dropDownArrow,{marginLeft:5}]}
                        source={dropdown} />
                </TouchableOpacity>

            </View>


                    <FlatList
                        style={{ marginTop: 20, flex: 1, width: '100%'}}
                        data={intrest_types}
                        renderItem={renderList}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id} />

                    <RBSheet
                        ref={refRBSheet}

                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        animationType={'slide'}

                        closeOnDragDown
                        customStyles={{
                            wrapper: {
                                backgroundColor: 'rgba(52, 52, 52, 0.8)'
                            },
                            draggableIcon: {
                                backgroundColor: "#000"
                            },
                            container: {
                                height: 192,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10
                            }
                        }}>

                        <View style={[commonStyles.viewColumnWithoutTop]}>


                            <FlatList
                                style={{ marginTop: 5, flex: 1, width: '100%'}}
                                data={viewByData}
                                renderItem={renderViewBy}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={item => item.id} />
                        </View>
                    </RBSheet>


                    </View>
        </SafeAreaView>
    );
}
export default Notifications;