import React, { useState, useEffect, useRef } from 'react';
import { View, Image, ScrollView, Text, TextInput, TouchableOpacity, Button, StyleSheet, StatusBar, SafeAreaView, FlatList, Switch, Modal, Dimensions } from 'react-native';
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
import crossSign from '/home/wv/projects/android/nyah/nyah/src/assets/images/crosssign.png';
import participants from '/home/wv/projects/android/nyah/nyah/src/assets/images/particpants.jpeg';
import onliencircle from '/home/wv/projects/android/nyah/nyah/src/assets/images/fullcircle.png';
import search from '/home/wv/projects/android/nyah/nyah/src/assets/images/search.png';
import { auto } from 'async';
import profileAvatar from '/home/wv/projects/android/nyah/nyah/src/assets/images/profileplaceholder.jpg'
import ceebration from '/home/wv/projects/android/nyah/nyah/src/assets/images/celebration.png'


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

const PeoplesFollow = [
    {
        id: '0',
        title: 'Lizzy',
        isSeelcted: false
    },
    {
        id: '1',
        title: 'Aoife',
        isSeelcted: false
    },
    {
        id: '2',
        title: 'Jacques',
        isSeelcted: false
    },

    {
        id: '3',
        title: 'Hope',
        isSeelcted: false
    },
    {
        id: '4',
        title: 'Maxi',
        isSeelcted: false
    },
    {
        id: '5',
        title: 'Kiki',
        isSeelcted: false
    },
    {
        id: '6',
        title: 'Sammy',
        isSeelcted: false
    },
    {
        id: '7',
        title: 'Tommmy',
        isSeelcted: false
    },


];

const People = [
    {
        id: '0',
        title: 'Lizzy',
        isSeelcted: false
    },
    {
        id: '1',
        title: 'Aoife',
        isSeelcted: false
    },
    {
        id: '2',
        title: 'Jacque',
        isSeelcted: false
    },

    {
        id: '3',
        title: 'Nick',
        isSeelcted: false
    },
    {
        id: '34',
        title: 'Nick',
        isSeelcted: false
    },

    {
        id: '5',
        title: 'Nick',
        isSeelcted: false
    },


    {
        id: '36',
        title: 'Nick',
        isSeelcted: false
    },

    {
        id: '7',
        title: 'Nick',
        isSeelcted: false
    },
    {
        id: '732',
        title: 'Nick',
        isSeelcted: false
    },

];

const viewByData = [
    {
        id: '1',
        title: 'Trending',
        isSeelcted: false
    },
    {
        id: '2',
        title: 'Suggested for u',
        isSeelcted: false
    },

    {
        id: '3',
        title: 'Happening now',
        isSeelcted: false
    },

    {
        id: '4',
        title: 'Upcoming',
        isSeelcted: false
    },
];


const viewMutualfollowers = [
    {
        id: '1',
        title: 'Tiffany Grant',
        desc: 'Head of Design at TEDX'
    },
    {
        id: '2',
        title: 'Milles Barker',
        desc: 'UX Designer, NYC'
    },

    {
        id: '3',
        title: 'Maddie Koss',
        desc: 'Digital Journalist'
    },
];

const mainListData = [
    {
        "id": "1",
        "title": "Trending",
        "themes": [
            {
                "id": "100",
                "name": "VC Fireside Chat",
                "time": "1h",
                "desc": "Today we're speaking with Rahul Vohra, founder and CEO of Superhuman, the fastest email in this world."
            },
        ]
    },
    {
        "id": "2",
        "title": "Suggested for u",
        "themes": [
            {
                "id": "107",
                "name": "VC Fireside Chat",
                "time": "1h",
                "desc": "Today we're speaking with Rahul Vohra, founder and CEO of Superhuman, the fastest email in this world."
            },
        ]
    },
    {
        "id": "3",
        "title": "Happening now",
        "themes": [
            {
                "id": "108",
                "name": "VC Fireside Chat",
                "time": "1h",
                "desc": "Today we're speaking with Rahul Vohra, founder and CEO of Superhuman, the fastest email in this world."
            },
        ]
    },
    {
        "id": "4",
        "title": "Upcoming",
        "themes": [
            {
                "id": "109",
                "name": "VC Fireside Chat",
                "time": "1h",
                "desc": "Today we're speaking with Rahul Vohra, founder and CEO of Superhuman, the fastest email in this world."
            },
        ]
    },
]

const TestDiscover = () => {

    const navigation = useNavigation();
    const [tabs, selectTabs] = useState(0);
    const [searchKeyword, setSearchKeyword] = useState("")
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabledGallery, setIsEnabledGallery] = useState(false);
    const [isEnabledUnFollow, setIsEnabledUnFollow] = useState(false);
    const [isEnabledIntrest, setIsEnabledUnFollowIntrest] = useState(false);
    const [viewAll, selectedViewAll] = useState('Trending')

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitchGallery = () => setIsEnabledGallery(previousState => !previousState);
    const toggleSwitchUnfollow = () => setIsEnabledUnFollow(previousState => !previousState);
    const toggleUnfollowIntrest = () => setIsEnabledUnFollowIntrest(previousState => !previousState);
    const refRBSheet = useRef();
    const refRBSheetMainList = useRef();
    const refSettings = useRef();
    const refWhoInside = useRef();
    const [showModal, setModal] = useState(false)

    const renderList = ({ item, index }) => (
        <View style={[commonStyles.viewColumn, { marginLeft: 20, marginRight: 20 }]}>

            <View style={commonStyles.viewRow}>
                <Text style={[commonStyles.boldText14, { textAlign: 'left', flex: 1 }]}>{item.title}</Text>
                <Text style={[commonStyles.textDarkGray14, { fontSize: 12 }]}>SEE ALL</Text>
            </View>
            <FlatList
                style={{ marginTop: 0, width: '100%' }}
                data={item.themes}
                renderItem={renderInnerList}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id} />
        </View>
    );

    const renderInnerList = ({ item, index }) => (

        <TouchableOpacity
            activeOpacity={.9}
            onPress={() => {
                // setItem(item)
                refRBSheet.current.open();
            }}>
            <CardView
                style={{ width: '100%', marginTop: 10 }}
                cardElevation={2}
                cardMaxElevation={2}
                useCompatPadding={true}
                cornerRadius={5}>

                <View style={{ marginLeft: 20, marginRight: 20, marginBottom: 20, marginTop: 10, flexDirection: 'column' }}>

                    <View style={{ flexDirection: 'row' }}>

                        <Text style={[commonStyles.boldText14, { marginTop: 0 }]}>{item.name.toUpperCase()}</Text>
                        <Text style={[commonStyles.textDarkGray14, { fontSize: fontSize.font12, marginLeft: 5 }]}>{item.time}</Text>

                    </View>

                    <Text style={commonStyles.textDarkGray14}>MODERATING:</Text>
                    <ScrollView
                        contentContainerStyle={[commonStyles.contentContainer]}>
                        <FlatList
                            style={{ marginTop: 10, width: '100%' }}
                            data={People}
                            nestedScrollEnabled={false}
                            renderItem={renderPhoto}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            keyExtractor={item => item.id} />
                    </ScrollView>

                    <Text style={[commonStyles.headingGray14, { color: bgcolor.borderGray, marginTop: 10, alignSelf: 'flex-start' }]}>{item.desc}</Text>

                </View>
            </CardView>
        </TouchableOpacity>
    );

    const renderPhoto = ({ item, index }) => (

        <TouchableOpacity
            onPress={() => {
                commonMethod.showToast('Hello')
            }}>
            <View style={{ flexDirection: 'row', height: 50, flex: 1, minWidth: 60, maxWidth: 60 }}>

                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>

                    <Image
                        style={[commonStyles.circularImage18, { width: 30, height: 30 }]}
                        source={profileAvatar} />
                    <Text style={[commonStyles.subHeadingTextGray, { marginTop: 0 }]}>{item.title}</Text>

                </View>
            </View>
        </TouchableOpacity>
    );


    const renderMutualFollowers = ({ item, index }) => (
        <TouchableOpacity
            style={{ marginTop: 10, marginRight: 20,marginLeft:20 }}
            activeOpacity={.9}
            onPress={() => { }}>
            <CardView
                style={{ width: '100%', marginTop: 10 }}
                cardElevation={2}
                cardMaxElevation={2}
                useCompatPadding={true}
                cornerRadius={5}>

                <View style={[commonStyles.viewRow,{margin:20}]}>


                    <Image
                        style={[commonStyles.circularImage18, { width: 60, height: 60 }]}
                        source={profileAvatar} />

                    <View style={[commonStyles.viewColumnWithoutFlex, { marginLeft: 10,justifyContent:'center',flex:1 }]}>

                        <Text style={[commonStyles.subHeadingTextGray, { marginTop: 0,textAlign:'left',alignSelf:'flex-start' }]}>{item.title}</Text>
                        <Text style={[commonStyles.subHeadingTextGray, { marginTop: 0,textAlign:'left',alignSelf:'flex-start' }]}>{item.desc}</Text>

                    </View>

                    <View style={[commonStyles.follow30,{width:80,marginRight:10,height:30,alignSelf:'center'}]}>
                    <Text style={[commonStyles.boldText14,{alignSelf:'center'}]}>Follow</Text>

                    </View>

                </View>

            </CardView>
        </TouchableOpacity>
    );

    const renderActiveNow = ({ item, index }) => (
        <TouchableOpacity
            style={{ marginTop: 10, marginRight: 20,marginLeft:20 }}
            activeOpacity={.9}
            onPress={() => { }}>
            <CardView
                style={{ width: '100%', marginTop: 10 }}
                cardElevation={2}
                cardMaxElevation={2}
                useCompatPadding={true}
                cornerRadius={5}>

                <View style={[commonStyles.viewColumn,{margin:20}]}>


                <View style={[commonStyles.viewRow,]}>


                    <Image
                        style={[commonStyles.circularImage18, { width: 60, height: 60 }]}
                        source={profileAvatar} />

                    <View style={[commonStyles.viewColumnWithoutFlex, { marginLeft: 10,justifyContent:'center',flex:1 }]}>

                        <Text style={[commonStyles.subHeadingTextGray, { marginTop: 0,textAlign:'left',alignSelf:'flex-start' }]}>THE SPEAKEASY</Text>
                        <Text style={[commonStyles.secondaryText, { marginTop: 0,textAlign:'left',alignSelf:'flex-start' }]}>1337 Members</Text>

                    </View>

                    <View style={[commonStyles.follow30,{width:75,height:30,alignSelf:'center'}]}>
                    <Text style={[commonStyles.boldText14,{alignSelf:'center'}]}>Follow</Text>

                    </View>

                </View>
                <Text style={[commonStyles.textDarkGray14, { marginTop: 10,textAlign:'left',alignSelf:'flex-start',marginBottom:10 }]}>A virtual cocktail lounge where we sip, mingle, and keep the conversartions (and drinks) flow...</Text>

                </View>
            </CardView>
        </TouchableOpacity>
    );

    return (

        <SafeAreaView style={[commonStyles.container]}>
            <View style={[commonStyles.header, commonStyles.topView, { justifyContent: 'flex-end' }]}>

                <TouchableOpacity
                    style={[commonStyles.notificationBell, { zIndex: 1 }]}
                    onPress={() => {
                        navigation.navigate('Noti')
                    }}>
                    <Image
                        style={[commonStyles.notificationBell]}
                        source={notificationIcon} />
                </TouchableOpacity>

                <Text style={[commonStyles.topHeaderText, { marginTop: -2 }]}>EXPLORE</Text>
            </View>

            <View style={[commonStyles.viewSearch, { marginLeft: 25, marginRight: 25, justifyContent: 'center', flexDirection: 'row' }]}>


                <Image
                    style={[commonStyles.cardImage, { tintColor: bgcolor.lightgray, marginLeft: 10 }]}
                    source={search} />

                <TextInput
                    style={{ flex: 1 }}
                    placeholder="Search by keynam or keyword"
                    placeholderTextColor={bgcolor.borderGray}
                    value={searchKeyword}
                    onChangeText={value => {
                        setSearchKeyword(value)
                    }}
                    selectionColor={bgcolor.orange}
                    underlineColorAndroid="transparent" />
            </View>

            <View style={[commonStyles.viewRowWithoutFlex, { justifyContent: 'center', marginTop: 25, marginLeft: 25, marginRight: 25 }]}>

                <Text
                    onPress={() => {
                        selectTabs(0)
                    }}
                    style={[commonStyles.headingText, { color: tabs == 0 ? bgcolor.orange : bgcolor.lightgray, flex: 0.7, textAlign: 'left' }]}>All</Text>

                <Text
                    onPress={() => {
                        selectTabs(1)
                    }}
                    style={[commonStyles.headingText, { color: tabs == 1 ? bgcolor.orange : bgcolor.lightgray, flex: 1.1, textAlign: 'left' }]}>Activity</Text>

                <Text
                    onPress={() => {
                        selectTabs(2)
                    }}
                    style={[commonStyles.headingText, { color: tabs == 2 ? bgcolor.orange : bgcolor.lightgray, flex: 1.1, textAlign: 'left' }]}>People</Text>

                <Text
                    onPress={() => {
                        selectTabs(3)
                    }}
                    style={[commonStyles.headingText, { color: tabs == 3 ? bgcolor.orange : bgcolor.lightgray, flex: 1.1, textAlign: 'left' }]}>Intrest</Text>

            </View>


            <TouchableOpacity
                activeOpacity={.9}
                style={{ width: 110, marginTop: 20, marginLeft: 20, marginRight: 20 }}
                onPress={() => {
                    // onPressHandler(item.id)
                }}>
                <View style={{ height: 35, flexDirection: 'column', alignItems: 'center', borderColor: bgcolor.borderGray, borderRadius: 20, borderWidth: 1, justifyContent: 'center', backgroundColor: bgcolor.white, minWidth: 85 }}>
                    <Text
                        style={{ marginLeft: 15, marginRight: 15, fontSize: fontSize.font12, alignSelf: 'center', color: bgcolor.lightgray, fontFamily: 'Nunito_Bold' }}>Filters</Text>
                </View>
            </TouchableOpacity>

            <View style={[commonStyles.viewRowWithoutFlex, { justifyContent: 'center', marginTop: 15, marginLeft: 25, marginRight: 25 }]}>

                <View style={[commonStyles.viewRowWithoutFlex, { flex: 1, justifyContent: 'flex-start', flexWrap: 'wrap' }]}>

                    <Text

                        style={[commonStyles.secondaryText, { color: bgcolor.lightgray, textAlign: 'left', alignSelf: 'center' }]}>View By</Text>

                    <Text

                        style={[commonStyles.boldText14, { color: bgcolor.lightgray, textAlign: 'left', marginLeft: 5, alignSelf: 'center' }]}>{viewAll.toUpperCase()}</Text>
                    <TouchableOpacity
                        style={{ width: 10, height: 10, alignSelf: 'center', alignItems: 'center', marginLeft: 5, tintColor: bgcolor.lightgray }}

                        onPress={() => {
                            refRBSheet.current.open()

                        }}>
                        <Image
                            style={{ width: 15, height: 15, alignSelf: 'center', alignItems: 'center', marginLeft: 3, tintColor: bgcolor.lightgray, marginTop: -2 }}
                            source={dropdown} />
                    </TouchableOpacity>
                </View>

            </View>



            <FlatList
                style={{ marginTop: 0, width: '100%' }}
                data={mainListData}
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
                        height: 280,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }
                }}>

                <View style={[commonStyles.viewColumnWithoutTop, { marginTop: 10, marginLeft: 20, marginRight: 20 }]}>

                    <Text style={[commonStyles.boldText14, { fontFamily: 'Nunito_Bold' }]}>TOMMORROW, 12:30 PM</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <Text style={[commonStyles.textDarkGray14, { fontFamily: 'Nunito_Bold' }]}>Welcome Michele Obama</Text>

                        <Image style={[commonStyles.cardImageWithouttint]}
                            source={ceebration} />
                    </View>

                    <Text style={[commonStyles.textDarkGray14, { marginTop: 10 }]}>Join us in welcoming Former First Lady and best selling author Michele Obama to CH!</Text>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>

                        <TouchableOpacity
                            onPress={() => {
                            }}
                            activeOpacity={.9}
                            style={{ width: 150, alignSelf: 'center', height: 40, flex: 1, marginRight: 30 }}>
                            <View style={{ borderRadius: 30, width: '100%', height: 40, backgroundColor: bgcolor.btncolor, justifyContent: 'center', flexDirection: 'row' }}>

                                <Text style={commonStyles.btnTextWhitecolor}>Send to Gallery</Text></View></TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {

                            }}
                            activeOpacity={.9}
                            style={{ width: 120, alignSelf: 'center', height: 40, flex: 1 }}>
                            <View style={{ borderWidth: 1, borderRadius: 30, width: '100%', height: 40, borderColor: bgcolor.btncolor, justifyContent: 'center', flexDirection: 'row' }}>

                                <Text style={commonStyles.btnTextBluecolor}>View Facilators</Text></View></TouchableOpacity>
                    </View>

                    <View style={[commonStyles.viewRow, { justifyContent: 'space-between', marginTop: 10 }]}>

                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', height: 40, flex: 1 }}>

                                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>

                                    <Image
                                        style={[commonStyles.circularImage18, { width: 30, height: 30 }]}
                                        source={profileAvatar} />
                                    <Text style={[commonStyles.subHeadingTextGray, { marginTop: 0 }]}>Add to call</Text>

                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', height: 40, flex: 1 }}>

                                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>

                                    <Image
                                        style={[commonStyles.circularImage18, { width: 30, height: 30 }]}
                                        source={profileAvatar} />
                                    <Text style={[commonStyles.subHeadingTextGray, { marginTop: 0 }]}>Share</Text>

                                </View>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', height: 40, flex: 1 }}>

                                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>

                                    <Image
                                        style={[commonStyles.circularImage18, { width: 30, height: 30 }]}
                                        source={profileAvatar} />
                                    <Text style={[commonStyles.subHeadingTextGray, { marginTop: 0 }]}>Tweet</Text>

                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', height: 40, flex: 1 }}>

                                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>

                                    <Image
                                        style={[commonStyles.circularImage18, { width: 30, height: 30 }]}
                                        source={profileAvatar} />
                                    <Text style={[commonStyles.subHeadingTextGray, { marginTop: 0 }]}>Copy Link</Text>

                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>


                </View>
            </RBSheet>







        </SafeAreaView>
    );
}
export default TestDiscover;
