import React, { useState, useEffect, useRef } from 'react';
import { View, Image, ScrollView, Text, TextInput, TouchableOpacity, Button, StyleSheet, StatusBar, SafeAreaView, FlatList, Switch, Modal,Dimensions } from 'react-native';
import bgcolor from '/home/wv/projects/android/nyah/nyah/src/Themes/Colors'
import splash from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/ic_launcher.png'
import profileAvatar from '/home/wv/projects/android/nyah/nyah/src/assets/images/profileplaceholder.jpg'
import peopleicon from '/home/wv/projects/android/nyah/nyah/src/assets/images/peopleicon.png'
import ceebration from '/home/wv/projects/android/nyah/nyah/src/assets/images/celebration.png'

import dropdown from '/home/wv/projects/android/nyah/nyah/src/assets/images/dropdown.png'
import { useNavigation } from '@react-navigation/native'
import commonMethod from '/home/wv/projects/android/nyah/nyah/src/helper/commonMethods'
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
import dropdownarrow from '/home/wv/projects/android/nyah/nyah/src/assets/images/dropdownarrow.png';
import { auto } from 'async';

// var calnder = {
//     days: []
// };
var calnder = [];

function GetDates(startDate, daysToAdd) {//https://stackoverflow.com/questions/54060778/react-native-key-value-array-or-hasmap
    var aryDates = [];
    for (var i = 1; i <= 7; i++) {
        var currentDate = new Date();
        currentDate.setDate(startDate.getDate() + i);
       

        calnder.push({ 
            "monthYear":MonthAsString(currentDate.getMonth()) + " " + currentDate.getFullYear()+"",
            "day"  : DayAsString(currentDate.getDay()),
            "date"  : currentDate.getDate()+"",
            "isSelected":false
        });
       
        aryDates.push(DayAsString(currentDate.getDay()) + ", " + currentDate.getDate() + " " + MonthAsString(currentDate.getMonth()) + " " + currentDate.getFullYear());
    }

    return aryDates;
}

function MonthAsString(monthIndex) {
    var d = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    return month[monthIndex];
}

function DayAsString(dayIndex) {
    var weekdays = new Array(7);
    weekdays[0] = "Sun";
    weekdays[1] = "Mon";
    weekdays[2] = "Tue";
    weekdays[3] = "Wed";
    weekdays[4] = "Thu";
    weekdays[5] = "Fri";
    weekdays[6] = "Sat";

    return weekdays[dayIndex];
}

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
    {
        id: '8',
        title: 'Maxi',
        isSeelcted: false
    },
    {
        id: '9',
        title: 'Kiki',
        isSeelcted: false
    },
    {
        id: '10',
        title: 'Sammy',
        isSeelcted: false
    },
    {
        id: '11',
        title: 'Tommmy',
        isSeelcted: false
    },

];

const viewByData = [
    {
        id: '1',
        title: 'All',
        isSeelcted: false
    },
    {
        id: '2',
        title: 'My Interest',
        isSeelcted: false
    },

    {
        id: '3',
        title: 'People | Follow',
        isSeelcted: false
    },
];


const Test = () => {
    const navigation = useNavigation();
    const [tabs, selectTabs] = useState(0);
    const [intrest_types, setIntrestTypes] = useState(IntrestTypes)
    const [selectIntretsId, setSelectedIds] = useState([])
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabledGallery, setIsEnabledGallery] = useState(false);
    const [isEnabledUnFollow, setIsEnabledUnFollow] = useState(false);
    const [isEnabledIntrest, setIsEnabledUnFollowIntrest] = useState(false);
    const [viewAll, selectedViewAll] = useState('All')
    const [monthYear, setMonthYear] = useState('');
    const [weekCalnder,setCalnder] = useState([]);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitchGallery = () => setIsEnabledGallery(previousState => !previousState);
    const toggleSwitchUnfollow = () => setIsEnabledUnFollow(previousState => !previousState);
    const toggleUnfollowIntrest = () => setIsEnabledUnFollowIntrest(previousState => !previousState);
    const refRBSheet = useRef();
    const refRBSheetMainList = useRef();
    const refSettings = useRef();
    const refWhoInside = useRef();
    const [item, setItem] = useState('');
    const [showModal, setModal] = useState(false)

    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Platform.OS === "ios" 
      ? Dimensions.get("window").height
      : 2000; // Just an high number
  
    useEffect(() => {
        StatusBar.setHidden(false, 'none');
        var date = new Date();

        // date.setDate(date.getDate() + 7);

        // var day = date.getDate(); //Date of the month: 2 in our example
        // var month = date.getMonth(); //Month of the Year: 0-based index, so 1 in our example
        // var year = date.getFullYear()
        // var dayName = date.getDay();
        // setMonthYear(monthNames[month] + " " + year)
        // console.log(day + '\n' + month + '\n' + year + daysName[dayName - 1]);

        if(tabs == 1 && weekCalnder.length == 0)
        {
            var startDate = new Date();
            var aryDates = GetDates(startDate, 7);
            //console.log(calnder);
            setMonthYear(calnder[0].monthYear);
            setCalnder(calnder);
        }
    });

    const onPressHandler = (id) => {
        let renderData = [...intrest_types];


        for (let data of renderData) {
            if (data.id == id) {
                data.isSeelcted = (data.isSeelcted == false) ? true : !data.isSeelcted;
                break;
            }
        }
        setIntrestTypes(renderData)

        var selectedId = [...selectIntretsId] // clone state
        if (selectedId.includes(id))
            selectedId = selectedId.filter(_id => _id !== id)
        else
            selectedId.push(id)

        setSelectedIds(selectedId)
        
        // for (let data of renderData) {
        //     if (data.id == id) {
        //         data.isSeelcted = (data.isSeelcted == false) ? true : !data.isSeelcted;
        //     }
        //     else {
        //         data.isSeelcted = false;
        //     }
        // }
        // setIntrestTypes(renderData)

        // var selectedId = [...selectIntretsId] // clone state
        // if (selectedId.includes(id))
        //     selectedId = selectedId.filter(_id => _id !== id)
        // else
        //     selectedId.push(id)

        // setSelectedIds(selectedId)

    }

    const onPressHandlerCalender = (id) => {
        let renderData = [...weekCalnder];

        for (let data of renderData) {
            if (data.date == id) {
                data.isSelected = (data.isSelected == false) ? true : !data.isSelected;
                setMonthYear(data.monthYear)
            }
            else {
                data.isSelected = false;
            }
        }
        setCa<Modalnder(renderData)

        // var selectedId = [...selectIntretsId] // clone state
        // if (selectedId.includes(id))
        //     selectedId = selectedId.filter(_id => _id !== id)
        // else
        //     selectedId.push(id)

        // setSelectedIds(selectedId)

    }

    const renderIntrestItem = ({ item, index }) => (
        <TouchableOpacity
            activeOpacity={.9}
            style={{ marginRight: item != 0 ? 2 : 0 }}
            onPress={() => {
                 onPressHandler(item.id)
            }}>
            <View style={{ height: 35, flexDirection: 'column', alignItems: 'center', borderColor: bgcolor.borderGray, borderRadius: 20, borderWidth: 1, justifyContent: 'center', backgroundColor: item.isSeelcted == true ? bgcolor.orange : bgcolor.white, minWidth: 85 }}>
                <Text
                    style={{ marginLeft: 15, marginRight: 15, fontSize: fontSize.font12, alignSelf: 'center', color: item.isSeelcted == true ? bgcolor.white : bgcolor.lightgray, fontFamily: 'Nunito_Bold' }}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    const renderList = ({ item, index }) => (

        <TouchableOpacity
            activeOpacity={.9}
            onPress={() => {
                setItem(item),
                    refRBSheetMainList.current.open();
            }}>
            <CardView

                style={{ width: '100%', marginTop: 10 }}
                cardElevation={2}
                cardMaxElevation={2}
                useCompatPadding={true}
                cornerRadius={5}>

                <View style={{ margin: 20, flexDirection: 'column' }}>

                    <View style={{ flexDirection: 'row' }}>

                        <Text style={commonStyles.textDarkGray14}>ALL INTEREST</Text>

                        <Image
                            style={[commonStyles.cardImage]}
                            source={home} />

                    </View>

                    <View style={{ flexDirection: 'row' }}>

                        <Text style={commonStyles.boldText14, { fontSize: fontSize.font18,fontFamily:'Nunito_SemiBold' }}>Town Hall Recap</Text>

                        <Image style={[commonStyles.cardImageWithouttint]}
                        source={ceebration} />

                        <Text style={commonStyles.textDarkGray14, { fontSize: fontSize.font12, marginLeft: 10 }}>1hr</Text>


                    </View>

                    <View style={{ flexDirection: 'row' }}>

                        <Image
                            style={[commonStyles.circularImage18, { marginTop: 5 }]}
                            source={profileAvatar} />

                        <Text style={[commonStyles.headingGray14, { color: bgcolor.lightgray, marginLeft: 5, alignSelf: 'center' }]}>Lizzy Cookie</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>

                        <Image
                            style={[commonStyles.circularImage18, { marginTop: 5 }]}
                            source={profileAvatar} />

                        <Text style={[commonStyles.headingGray14, { color: bgcolor.lightgray, marginLeft: 5, alignSelf: 'center' }]}>Aiofe Cookie</Text>

                    </View>

                    <View style={{ flexDirection: 'row' }}>

                        <Image
                            style={[commonStyles.circularImage18, { marginTop: 5 }]}
                            source={profileAvatar} />

                        <Text style={[commonStyles.headingGray14, { color: bgcolor.lightgray, marginLeft: 5, alignSelf: 'center' }]}>Jacques Bastien</Text>

                    </View>

                    <View style={{ flexDirection: 'row' }}>

                        <Image
                            style={[commonStyles.circularImage18, { marginTop: 5 }]}
                            source={profileAvatar} />

                        <Text style={[commonStyles.headingGray14, { color: bgcolor.lightgray, marginLeft: 5, alignSelf: 'center' }]}>Hope</Text>
                        <Text style={[commonStyles.headingGray14, { color: bgcolor.borderGray, marginLeft: 5, alignSelf: 'center', fontSize: fontSize.font12, flex: 1,textAlign:'left' }]}>+ 3 Friends</Text>

                        <Text style={[commonStyles.headingGray14, { color: bgcolor.borderGray, marginLeft: 5, alignSelf: 'center' }]}>545</Text>

                        <Image
                            style={[commonStyles.imaeg10,{width:8,height:8}]}
                            source={peopleicon} />

                        <Text style={[commonStyles.headingGray14, { color: bgcolor.borderGray, marginLeft: 5, alignSelf: 'center', marginLeft: 10 }]}>9</Text>

                        <Image
                            style={[commonStyles.imaeg10, { marginRight: 5,width:8,height:8 }]}
                            source={home} />
                    </View>

                </View>
            </CardView>
        </TouchableOpacity>
    );

    const renderCalnder = ({ item, index }) => (
        console.log('1->',item),
        <TouchableOpacity
            activeOpacity={.9}
            style={{ marginRight: 10,marginLeft:10,height:60}}
            onPress={() => {
                onPressHandlerCalender(item.date)
            }}>
            <View style={{ flex:1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Text
                    style={{ fontSize: fontSize.font12, alignSelf: 'center', color: bgcolor.lightgray, fontFamily: 'Nunito_SemiBold' }}>{item.day}</Text>
                       
                       <View style={item.isSelected == true ? [commonStyles.circleShape22,{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center',marginTop:5} ]: { flexDirection: 'column', alignItems: 'center', justifyContent: 'center',marginTop:5}}>

            <Text
                    style={{ fontSize: fontSize.font12, alignSelf: 'center', color: item.isSelected == true ? bgcolor.white : bgcolor.lightgray, fontFamily: 'Nunito_SemiBold' }}>{item.date}</Text>
           </View>
            </View>
        </TouchableOpacity>
    );


    const renderViewBy = ({ item, index }) => (
        <View style={[commonStyles.viewColumnWithoutTop]}>
 <TouchableOpacity
        style={{height:40}}
            onPress={() => {
                selectedViewAll(item.title),
                    refRBSheet.current.close()
            }}>
            <View style={[commonStyles.viewColumnWithoutTop, { justifyContent: 'center' }]}>
                <View style={{ justifyContent: 'center'}}>
                    <Text
                        style={[commonStyles.textDarkGray14, { marginLeft: 10,color:item.title == viewAll ? bgcolor.orange : bgcolor.lightgray,fontFamily: item.title == viewAll ? 'Nunito_Bold' : 'Nunito_SemiBold' }]}>{item.title}</Text>
                </View>
              
            </View>
        </TouchableOpacity>
        {
                    index != viewByData.length -1 &&
                    <View style={[commonStyles.line]} />
                }
        </View>
       
    );


    const renderParticipants = ({ item, index }) => (
        <TouchableOpacity
            style={{ marginTop: 10, marginRight: 20 }}
            activeOpacity={.9}
            onPress={() => {

            }}>

            <View style={{ flexDirection: 'column' }}>


                <Image
                    style={[commonStyles.circularImage18, { width: 50, height: 50,marginRight:11 }]}
                    source={participants} />

                <Text style={[commonStyles.subHeadingTextGray, { marginTop: 0 }]}>{item.title}</Text>

            </View>
        </TouchableOpacity>
    );

    const renderFacilators = ({ item, index }) => (
        <TouchableOpacity
            style={{ marginTop: 10, marginRight: 20 }}
            activeOpacity={.9}
            onPress={() => {

            }}>

            <View style={{ flexDirection: 'column' }}>


                <Image
                    style={[commonStyles.circularImage18, { width: 50, height: 50 }]}
                    source={participants} />

                    <View style={[commonStyles.viewRowWithoutFlex]}>

                    <Image
                    style={[commonStyles.imaeg13,{tintColor:bgcolor.green,height:10,width:10,marginRight:5}]}
                    source={onliencircle} />
                <Text style={[commonStyles.subHeadingTextGray, { marginTop: 0 }]}>{item.title}</Text>
                </View>

            </View>
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

                <Text style={[commonStyles.topHeaderText, { marginTop: -2 }]}>GALLERY</Text>
            </View>

            <View style={[commonStyles.viewRowWithoutFlex, { justifyContent: 'center', marginTop: 25, marginLeft: 25, marginRight: 25 }]}>

                <Text
                    onPress={() => {
                        selectTabs(0)
                    }}
                    style={[commonStyles.headingText, { color: tabs == 0 ? bgcolor.orange : bgcolor.lightgray, flex: 1 }]}>Ongoing</Text>

                <Text
                    onPress={() => {
                        selectTabs(1)
                    }}
                    style={[commonStyles.headingText, { color: tabs == 1 ? bgcolor.orange : bgcolor.lightgray, flex: 1 }]}>Upcoming</Text>

            </View>

        <FlatList
                        contentContainerStyle={{ flexDirection: "row",height:78 }}
                        style={{ marginTop: 20, alignSelf: 'center',marginLeft:25,marginRight:25 }}
                        data={intrest_types}
                        renderItem={renderIntrestItem}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        extraData={
                            selectIntretsId    // for multiple items
                        }
                        keyExtractor={item => item.id} />

{tabs == 1 && <View style={[commonStyles.viewColumnWithoutFlex, { justifyContent: 'center', marginTop: 10, marginBottom:10,marginLeft: 25, marginRight: 25 }]}>

<View style={[commonStyles.viewRowWithoutFlex]}>

    <Image style={commonStyles.cardImageWithouttint}
        source={calndar} />

    <Text style={[commonStyles.textDarkGray14, { marginLeft: 10, fontFamily: 'Nunito_Bold' }]}>{monthYear}</Text>

</View>


 <View style={{backgroundColor:bgcolor.white,marginTop: 10, }}>
     
<FlatList
    contentContainerStyle={{ flexDirection: "row" }}
    style={{ alignSelf: 'center' }}
    data={weekCalnder}
    renderItem={renderCalnder}
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    numColumns={7}
    keyExtractor={item => item.date} />
    </View>
</View>
}

<View style={[commonStyles.viewRowWithoutFlex, { justifyContent: 'center',marginLeft:25,marginRight:25 }]}>

<View style={[commonStyles.viewRowWithoutFlex, { flex: 1, justifyContent: 'flex-start', flexWrap: 'wrap' }]}>

    <Text

        style={[commonStyles.secondaryText, { color: bgcolor.lightgray, textAlign: 'left', marginLeft: 10, alignSelf: 'center' }]}>View By:</Text>

    <Text

        style={[commonStyles.boldText14, { color: bgcolor.lightgray, textAlign: 'left', marginLeft: 5, alignSelf: 'center',fontFamily:'Nunito_Bold' }]}>{viewAll.toUpperCase()}</Text>
    <TouchableOpacity
        style={{ width: 10, height: 10, alignSelf: 'center', alignItems: 'center', marginLeft: 5, tintColor: bgcolor.lightgray }}

        onPress={() => {
            refRBSheet.current.open()

        }}>
        <Image
            style={[commonStyles.dropDownArrow,{marginLeft:3}]}
            source={dropdownarrow} />
    </TouchableOpacity>
</View>

{/* <View style={[commonStyles.viewRowWithoutFlex, { flex: 1, justifyContent: 'center',flexWrap: 'wrap',marginLeft:10}]}>

    <Text

        style={[commonStyles.secondaryText, { color: bgcolor.lightgray, flex: 1, alignSelf: 'center' }]}>Hidden Rooms</Text>

    <Switch
        trackColor={{ false: bgcolor.lightgray, true: bgcolor.orange }}
        thumbColor={isEnabled ? bgcolor.orange : bgcolor.white}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled} />

</View> */}
</View>

            <ScrollView
                contentContainerStyle={[commonStyles.contentContainer, { marginLeft: 25, marginRight: 25 }]}>
                <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', alignContent: 'center', flexDirection: 'column', width: '100%', marginLeft: 25, marginRight: 25 }}>


                    <FlatList
                        style={{ marginTop: 0, flex: 1, width: '100%' }}
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
                                height: 145,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10
                            }
                        }}>

                        <View style={[commonStyles.viewColumnWithoutTop]}>


                            <FlatList
                                style={{flex: 1, width: '100%'}}
                                data={viewByData}
                                renderItem={renderViewBy}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={item => item.id} />
                        </View>
                    </RBSheet>


                    <RBSheet
                        ref={refRBSheetMainList}

                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        animationType={'slide'}
                        height={210}
                        closeOnDragDown
                        customStyles={{
                            wrapper: {
                                backgroundColor: 'rgba(52, 52, 52, 0.8)'
                            },
                            draggableIcon: {
                                backgroundColor: "#000"
                            },
                            container: {
                                // height: 250,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10
                            }
                        }}>

                        <View style={[commonStyles.viewColumnWithoutTop]}>

                            <View style={{ margin: 20, flexDirection: 'column' }}>

                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'row', flex: 1 }}>

                                        {/* <Text style={commonStyles.boldText14}>{item.t}</Text> */}
                                        <Text style={[commonStyles.boldText14,]}>ALL INTEREST</Text>
                                        <Image
                                            style={[commonStyles.cardImage]}
                                            source={home} />

                                    </View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            refSettings.current.open();
                                        }}>
                                        <Image
                                            style={[commonStyles.cardImage]}
                                            source={settings} />
                                    </TouchableOpacity>


                                </View>
                                <View style={{ flexDirection: 'row' }}>

                                    <Text style={[commonStyles.textDarkGray14, { fontSize: fontSize.font17 }]}>Town Hall Recap</Text>

                                    <Image style={[commonStyles.cardImageWithouttint]}
                        source={ceebration} />


                                    <Text style={commonStyles.textDarkGray14, { fontSize: fontSize.font14, marginLeft: 10 }}>1h</Text>


                                </View>



                                <View style={{ flexDirection: 'row' }}>

                                    {/* <Image
                                        style={[commonStyles.circularImage18, { marginTop: 5 }]}
                                        source={splash} /> */}

                                    <Text style={[commonStyles.headingGray14, { color: bgcolor.lightgray, alignSelf: 'center' }]}>Recapping and discussing the latest</Text>

                                </View>

                                <View style={{ flexDirection: 'row', marginTop: 5 }}>

                                    {/* <Image
                                        style={[commonStyles.circularImage18, { marginTop: 5 }]}
                                        source={splash} /> */}

                                    <Text style={[commonStyles.headingGray14, { color: bgcolor.lightgray, alignSelf: 'center', flex: 1 }]}>Townhall with Q&As.</Text>

                                    <Text style={[commonStyles.headingGray14, { color: bgcolor.borderGray, alignSelf: 'center' }]}>545</Text>

                                    <Image
                                        style={[commonStyles.imaeg13,{width:10,height:10}]}
                                        source={home} />

                                    <Text style={[commonStyles.headingGray14, { color: bgcolor.borderGray, alignSelf: 'center', marginLeft: 10 }]}>9</Text>

                                    <Image
                                        style={[commonStyles.imaeg13, { marginRight: 5,width:10,height:10 }]}
                                        source={home} />
                                </View>

                                <View style={{ flexDirection: 'row', marginTop: 20 }}>

                                    <TouchableOpacity
                                        onPress={() => {
                                        }}
                                        activeOpacity={.9}
                                        style={{ width: 150, alignSelf: 'center', height: 40, flex: 1, marginRight: 30 }}>
                                        <View style={{ borderRadius: 30, width: '100%', height: 40, backgroundColor: bgcolor.btncolor, justifyContent: 'center', flexDirection: 'row' }}>

                                            <Text style={commonStyles.btnTextWhitecolor}>Join Activity</Text></View></TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => {
                                            //refWhoInside.current.open();
                                            //refRBSheetMainList.current.close();
                                            setModal(true)
                                        }}
                                        activeOpacity={.9}
                                        style={{ width: 120, alignSelf: 'center', height: 40, flex: 1 }}>
                                        <View style={{ borderWidth: 1, borderRadius: 30, width: '100%', height: 40, borderColor: bgcolor.btncolor, justifyContent: 'center', flexDirection: 'row' }}>

                                            <Text style={commonStyles.btnTextBluecolor}>Participants</Text></View></TouchableOpacity>
                                </View>
                           
                            </View>

                        </View>
                    </RBSheet>

                    <RBSheet
                        ref={refSettings}

                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        animationType={'slide'}
                        height={250}
                        closeOnDragDown
                        customStyles={{
                            wrapper: {
                                backgroundColor: 'rgba(52, 52, 52, 0.8)'
                            },
                            draggableIcon: {
                                backgroundColor: "#000"
                            },
                            container: {
                                // height: 250,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10
                            }
                        }}>

                        <View style={[commonStyles.viewColumnWithoutTop, commonStyles.header]}>

                            <View style={[commonStyles.viewRowWithoutFlex, { backgroundColor: bgcolor.white, marginLeft: 20, marginRight: 20 }]}>

                                <TouchableOpacity
                                    onPress={() => {
                                        refSettings.current.close();
                                    }}>
                                    <Image
                                        style={commonStyles.backArrow}
                                        source={backImage} />
                                </TouchableOpacity>

                                <Text style={[commonStyles.topHeaderText]}>ACTIVITY SETTINGS</Text>

                            </View>

                            <View style={[commonStyles.line, { marginTop: 10 }]} />

                            <View style={[commonStyles.viewRowWithoutFlex, { backgroundColor: bgcolor.white, marginLeft: 20, marginRight: 20, justifyContent: 'center', alignContent: 'center', height: 40 }]}>

                                <Text style={[commonStyles.textDarkGray14, { flex: 1, alignSelf: 'center' }]}>Get Notifications For This Activity</Text>


                                <Switch
                                    trackColor={{ false: bgcolor.lightgray, true: bgcolor.orange }}
                                    thumbColor={isEnabled ? bgcolor.orange : bgcolor.white}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled} />

                            </View>

                            <View style={[commonStyles.line]} />


                            <View style={[commonStyles.viewRowWithoutFlex, { backgroundColor: bgcolor.white, marginLeft: 20, marginRight: 20, justifyContent: 'center', alignContent: 'center', height: 40 }]}>

                                <Text style={[commonStyles.textDarkGray14, { flex: 1, alignSelf: 'center' }]}>Hide This Activity From Gallery</Text>


                                <Switch
                                    trackColor={{ false: bgcolor.lightgray, true: bgcolor.orange }}
                                    thumbColor={isEnabledGallery ? bgcolor.orange : bgcolor.white}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitchGallery}
                                    value={isEnabledGallery} />

                            </View>

                            <View style={[commonStyles.line]} />

                            <View style={[commonStyles.viewRowWithoutFlex, { backgroundColor: bgcolor.white, marginLeft: 20, marginRight: 20, justifyContent: 'center', alignContent: 'center', height: 40 }]}>

                                <Text style={[commonStyles.textDarkGray14, { flex: 1, alignSelf: 'center' }]}>Unfollow This Theme</Text>


                                <Switch
                                    trackColor={{ false: bgcolor.lightgray, true: bgcolor.orange }}
                                    thumbColor={isEnabledUnFollow ? bgcolor.orange : bgcolor.white}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitchUnfollow}
                                    value={isEnabledUnFollow} />
                            </View>

                            <View style={[commonStyles.line]} />


                            <View style={[commonStyles.viewRowWithoutFlex, { backgroundColor: bgcolor.white, marginLeft: 20, marginRight: 20, justifyContent: 'center', alignContent: 'center', height: 40 }]}>

                                <Text style={[commonStyles.textDarkGray14, { flex: 1, alignSelf: 'center' }]}>Unfollow This Interest</Text>


                                <Switch
                                    trackColor={{ false: bgcolor.lightgray, true: bgcolor.orange }}
                                    thumbColor={isEnabledIntrest ? bgcolor.orange : bgcolor.white}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleUnfollowIntrest}
                                    value={isEnabledIntrest} />

                            </View>
                        </View>
                    </RBSheet>
                    {showModal &&

                        <Modal isVisible={showModal}
                            transparent={true}
                         
                            swipeDirection={['up', 'left', 'right', 'down']}
                            style={{ margin: 40 }}>
                           
                                {/* <View style={[commonStyles.containerStyle,{flex:1}]}> */}
                                    <View style={[commonStyles.modalInfiniteHeight,{position:'absolute',bottom:0,top:40,flexWrap:'wrap'}]}>

                                        <View style={[commonStyles.viewColumnWithoutTop, commonStyles.header]}>

                                            <View style={[commonStyles.viewRowWithoutFlex, { backgroundColor: bgcolor.white, marginLeft: 20, marginRight: 20 }]}>

                                                <View style={[commonStyles.viewColumnWithoutTop]}>
                                                    <Text style={[commonStyles.boldText14, { alignSelf: 'flex-start' }]}>COMMUNITY CLUB</Text>
                                                    <Text style={[commonStyles.headingGray14, { alignSelf: 'flex-start', fontFamily: 'Nunito_Bold' }]}>TOWNHALL RECAP
                                                        <Text style={[commonStyles.headingGray14, { alignSelf: 'flex-start', color: bgcolor.borderGray }]}>    1 h</Text>
                                                    </Text>

                                                </View>

                                                <TouchableOpacity
                                                    onPress={() => {
                                                        setModal(false)
                                                    }}>
                                                    <Image
                                                        style={[commonStyles.backArrow,{width:15,height:15}]}
                                                        source={crossSign} />
                                                </TouchableOpacity>
                                            </View>

                                            <ScrollView
                                            
                                                bounces={false}
                                                contentContainerStyle={[commonStyles.contentContainer, { marginLeft: 25, marginRight: 25 }]}
                                                showsVerticalScrollIndicator={false}
                                                nestedScrollEnabled={false}
                                            >

                                                <Text style={{ fontSize: 15, marginTop: 2, color: bgcolor.lightgray, marginLeft: 7, fontFamily: 'Nunito_Bold', alignSelf: 'center', marginTop: 10 }}>People you follow</Text>

                                                <FlatList
                                                    columnWrapperStyle={{justifyContent: 'space-between'}}
                                                    style={{ marginTop: 7, flexGrow: 0, flex: 1, minHeight: 120, alignSelf: 'center' }}
                                                    data={PeoplesFollow}
                                                    renderItem={renderParticipants}
                                                    numColumns={4}
                                                    keyExtractor={item => item.id}
                                                />

                                                <Text style={{ fontSize: 15, marginTop: 10, color: bgcolor.lightgray, marginLeft: 7, fontFamily: 'Nunito_Bold', alignSelf: 'center', marginTop: 10 }}>Facilators</Text>

                                                <FlatList
                                                    columnWrapperStyle={{justifyContent: 'space-between'}}

                                                    style={{ marginTop: 7, flexGrow: 0, flex: 1, minHeight: 120, alignSelf: 'center' }}
                                                    data={PeoplesFollow}
                                                    renderItem={renderFacilators}
                                                    numColumns={4}
                                                    keyExtractor={item => item.id}
                                                />
                                            </ScrollView>

                                        </View>
                                        <View style={[commonStyles.btnBg,{ flexDirection: 'row', marginTop: 20, marginBottom: 25, justifyContent: 'center', alignSelf: 'center' }]}>

                                            <TouchableOpacity
                                                onPress={() => {
                                                }}
                                                activeOpacity={.9}
                                                style={[commonStyles.btnBg,{ alignSelf: 'center', height: 40, flex: 1, marginRight: 30, alignSelf: 'center' }]}>
                                                <View style={[commonStyles.btnBg,{ borderRadius: 30, width: '100%', height: 40, backgroundColor: bgcolor.btncolor, justifyContent: 'center', flexDirection: 'row' }]}>

                                                    <Text style={commonStyles.btnTextWhitecolor}>Join Activity</Text></View></TouchableOpacity>

                                        </View>

                                    </View>
                                {/* </View> */}
                        </Modal>
                    }

                    <RBSheet
                        ref={refWhoInside}
                        closeOnDragDown={false}
                        closeOnPressMask={false}
                        animationType={'slide'}
                        closeOnDragDown
                        height={auto}
                        customStyles={{
                            wrapper: {
                                backgroundColor: 'rgba(52, 52, 52, 0.8)'
                            },
                            draggableIcon: {
                                backgroundColor: "#000"
                            },
                            container: {
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10
                            }
                        }}>

                        <View style={[commonStyles.viewColumnWithoutTop, commonStyles.header, { flex: 1 }]}>

                            <View style={[commonStyles.viewRowWithoutFlex, { backgroundColor: bgcolor.white, marginLeft: 20, marginRight: 20 }]}>

                                <View style={[commonStyles.viewColumnWithoutTop]}>
                                    <Text style={[commonStyles.boldText14, { alignSelf: 'flex-start' }]}>COMMUNITY CLUB</Text>
                                    <Text style={[commonStyles.headingGray14, { alignSelf: 'flex-start', fontFamily: 'Nunito_Bold' }]}>TOWNHALL RECAP
                                        <Text style={[commonStyles.headingGray14, { alignSelf: 'flex-start', color: bgcolor.borderGray }]}>    1 h</Text>
                                    </Text>

                                </View>

                                <TouchableOpacity
                                    onPress={() => {
                                        refWhoInside.current.close();
                                    }}>
                                    <Image
                                        style={commonStyles.backArrow}
                                        source={crossSign} />
                                </TouchableOpacity>
                            </View>

                            <ScrollView
                                bounces={false}
                                contentContainerStyle={[commonStyles.contentContainer, { marginLeft: 25, marginRight: 25 }]}
                                showsVerticalScrollIndicator={false}
                                nestedScrollEnabled={false}
                            >

                                <Text style={{ fontSize: 15, marginTop: 2, color: bgcolor.lightgray, marginLeft: 7, fontFamily: 'Nunito_Bold', alignSelf: 'center', marginTop: 10 }}>People you follow</Text>

                                <FlatList
                                    style={{ marginTop: 7, flexGrow: 0, flex: 1, minHeight: 120, alignSelf: 'center' }}
                                    data={PeoplesFollow}
                                    renderItem={renderParticipants}
                                    numColumns={4}
                                    keyExtractor={item => item.id}
                                />

                                <Text style={{ fontSize: 15, marginTop: 10, color: bgcolor.lightgray, marginLeft: 7, fontFamily: 'Nunito_Bold', alignSelf: 'center', marginTop: 10 }}>Facilators</Text>

                                <FlatList
                                    style={{ marginTop: 7, flexGrow: 0, flex: 1, minHeight: 120, alignSelf: 'center' }}
                                    data={PeoplesFollow}
                                    renderItem={renderParticipants}
                                    numColumns={4}
                                    keyExtractor={item => item.id}
                                />
                            </ScrollView>

                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 25, justifyContent: 'center', width: 150, alignSelf: 'center' }}>

                            <TouchableOpacity
                                onPress={() => {
                                }}
                                activeOpacity={.9}
                                style={{ alignSelf: 'center', height: 40, flex: 1, marginRight: 30, alignSelf: 'center' }}>
                                <View style={{ borderRadius: 30, width: '100%', height: 40, backgroundColor: bgcolor.btncolor, justifyContent: 'center', flexDirection: 'row' }}>

                                    <Text style={commonStyles.btnTextWhitecolor}>Join Activity</Text></View></TouchableOpacity>

                        </View>
                    </RBSheet>


                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default Test;
