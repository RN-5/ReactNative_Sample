import React, { useState, useEffect, useCallback, useRef,useFocusEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, ScrollView, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, Modal, KeyboardAvoidingView, StatusBar, ToastAndroid, Button,FlatList } from 'react-native';
import bgcolor from '/home/wv/projects/android/nyah/nyah/src/Themes/Colors'
import splash from '/home/wv/projects/android/nyah/nyah/src/assets/images/welcomeimages/ic_launcher.png'
import home from '/home/wv/projects/android/nyah/nyah/src/assets/images/home.png'
import explore from '/home/wv/projects/android/nyah/nyah/src/assets/images/explore.png'
import add from '/home/wv/projects/android/nyah/nyah/src/assets/images/add.png'
import shop from '/home/wv/projects/android/nyah/nyah/src/assets/images/shop.png'
import { useNavigation } from '@react-navigation/native';
import commonMethod from '/home/wv/projects/android/nyah/nyah/src/helper/commonMethods'
import fonts from '/home/wv/projects/android/nyah/nyah/src/Themes/fontsize'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import commonStyles from '/home/wv/projects/android/nyah/nyah/src/helper/CommonStyles';
import Login from '../login/Login';
import Signup from '../signup/Signup';
import Otp from '../otpscreen/Otp';
import ActivityHome from './home/ActivityHome.Js';
import RBSheet from "react-native-raw-bottom-sheet";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";
import Gallery from '../TabsScreens/Gallery/Gallery.Js';
import EventBus from 'react-native-event-bus'


const Tab = createBottomTabNavigator();


const DATA = [
  {
    id: '1',
    title: 'Open',
    icon: splash,
    isSeelcted: true
  },
  {
    id: '2',
    title: 'Social',
    icon: splash,
    isSeelcted: false
  },

  {
    id: '3',
    title: 'Private',
    icon: splash,
    isSeelcted: false
  },
];

const HomeScreen = () => {
  const [isSelected, setSelected] = useState(false)
  const refRBSheet = useRef();
  const [open, SetOpen] = useState("")
  const [homeData, setHomeData] = useState(DATA)
  const [activityName, setActivityName] = useState('Open')
  const [title,setTitle] = useState('Gallery')
  const isFocused = useIsFocused();

  const onPressHandler = (item,id) => {
    let renderData = [...homeData];

    for (let data of renderData) {
        if (data.id == id) {
            data.isSeelcted = (data.isSeelcted == false) ? true : !data.isSeelcted;
            setActivityName(item.title)
        }else{
          data.isSeelcted = (data.isSeelcted == false) ? false : !data.isSeelcted
        }
    }
    setHomeData(renderData)
}

const renderItem = ({ item, index }) => (
  <TouchableOpacity
  activeOpacity={.9}
      style={{ flex: 1 / 3, marginLeft: 5, marginRight: 5 }}
      onPress={() => {
          onPressHandler(item,item.id)
      }}>
  <View style={{flex: 1,flexDirection: 'column',marginLeft:5,marginRight:5, overflow: 'hidden',borderRadius:7,borderTopEndRadius:7,backgroundColor:item.isSeelcted ? bgcolor.borderGray : bgcolor.white}}>

  <View style={{margin:7}}>
    <Image
      style={styles.circularImage}
      source={item.icon} />

    <Text style={{fontSize: fonts.font14, color: bgcolor.lightgray, alignSelf: 'center', marginTop:5,fontFamily:'Nunito_Bold'}}>{item.title}</Text>

  </View>
  </View>
  </TouchableOpacity>
);
  useEffect(() => {
    getAllKeys()
},[])

  async function getAllKeys() {
    const member = await AsyncStorage.getItem('Member');
    setSelected(member == 'Member' ? true : false);
  }
  return (
   <View style={[commonStyles.headerColumn,{flex:1,marginTop:0}]}>
   
    <Tab.Navigator initialRouteName={'Gallery'}
      screenOptions={{
        tabBarLabelStyle: { fontSize: fonts.font11,marginBottom:5,inactiveTintColor:bgcolor.lightgray,activeTintColor:bgcolor.orange,fontFamily:'Nunito_SemiBold' },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: { backgroundColor: bgcolor.background,height:60,},
        tabBarOptions:{
          style:{backgroundColor:bgcolor.background},
          flex:1
        }
       
      }}>        
      <Tab.Screen name="Gallery" component={Gallery} options={{ headerShown: false,
tabBarLabel: ({size,focused,color}) => {
  return (
    <Text style={{color : focused ? bgcolor.orange : bgcolor.lightgray,fontSize:fonts.font11,marginBottom:5,marginTop:-5,fontFamily:'Nunito_SemiBold' }}>Gallery</Text>
  );
}, 
      tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: 20, height: 20,tintColor: focused ? bgcolor.orange : bgcolor.lightgray}}
                  source={
                    home
                  }
                />
              );
            }, }} />
      <Tab.Screen name="Explore" component={ActivityHome} options={{ headerShown: false,
      tabBarLabel: ({size,focused,color}) => {
        return (
          <Text style={{color : focused ? bgcolor.orange : bgcolor.lightgray,fontSize:fonts.font11,marginBottom:5,marginTop:-5,fontFamily:'Nunito_SemiBold' }}>Explore</Text>
        );
      }, 
      tabBarIcon: ({size,focused,color}) => {
              return (
                
                <Image
                  style={{ width: 20, height: 20,tintColor: focused ? bgcolor.orange : bgcolor.lightgray }}
                  source={
                    explore
                  }
                />
              );
            }, }} />
      <Tab.Screen name="Setup Activity" component={ActivityHome} 
      listeners={{
        tabPress: e => {
         
            if(isSelected){
              refRBSheet.current.open()

            }
            e.preventDefault();
          
        },
      }}
      options={{ headerShown: false,
       
       tabBarLabel: ({size,focused,color}) => {
        return (
          <Text style={{color : focused ? bgcolor.lightgray : bgcolor.lightgray,fontSize:fonts.font11,marginBottom:5,marginTop:-5,fontFamily:'Nunito_SemiBold' }}>Setup Activity</Text>
        );
      }, 
       
       tabBarOptions: {
        activeTintColor: bgcolor.orange,
  },
      tabBarIcon: ({size,focused,color}) => {
              return (
                <View style={{flexDirection:'column'}}>
                <Image
                  style={{ width: 20, height: 20,tintColor: focused ? bgcolor.lightgray : bgcolor.lightgray }}
                  source={
                    shop
                  }
                />

                </View>
                
              );
            }, }} />
      <Tab.Screen name="Insights" component={ActivityHome} options={{ headerShown: false,
      
      tabBarLabel: ({size,focused,color}) => {
        return (
          <Text style={{color : focused ? bgcolor.orange : bgcolor.lightgray,fontSize:fonts.font11,marginBottom:5,marginTop:-5,fontFamily:'Nunito_SemiBold' }}>Insights</Text>
        );
      }, 
      tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: 20, height: 20,tintColor: focused ? bgcolor.orange : bgcolor.lightgray }}
                  source={
                    add
                  }
                />
              );
            }, }} />
      <Tab.Screen name="Shop" component={ActivityHome} options={{ headerShown: false,
       tabBarLabel: ({size,focused,color}) => {
        return (
          <Text style={{color : focused ? bgcolor.orange : bgcolor.lightgray,fontSize:fonts.font11,marginBottom:5,marginTop:-5,fontFamily:'Nunito_SemiBold' }}>Shop</Text>
        );
      }, 
      tabBarIcon: ({size,focused,color}) => {
              return (
                <View style={{flexDirection:'column'}}>
                <Image
                  style={{ width: 20, height: 20,tintColor: focused ? bgcolor.orange : bgcolor.lightgray }}
                  source={
                    shop
                  }/>
                </View>
              );
            }, }} />
    </Tab.Navigator>
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
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
        }
      }}>

      <View style={styles.viewColumn}>

        <View style={styles.viewRow}>

          <FlatList
          style={{height:120}}
            data={homeData}
            numColumns = {3}
            renderItem={renderItem}
            keyExtractor={item => item.id} />
        </View>

        <View style={styles.viewLine}></View>
        {activityName == 'Open' &&
        <Text style={{ fontSize: fonts.font15, color: bgcolor.orange, alignSelf: 'center',fontFamily:'Nunito_SemiBold' }}>Start an activity open to everyone</Text>
        }
         {activityName == 'Social' &&
        <Text style={{ fontSize: fonts.font15, color: bgcolor.orange, alignSelf: 'center',fontFamily:'Nunito_SemiBold' }}>Start an activity with people I follow</Text>
      }
      {activityName == 'Private' &&
        <Text style={{ fontSize: fonts.font15, color: bgcolor.orange, alignSelf: 'center',fontFamily:'Nunito_SemiBold'}}>Start an activity for people I choose</Text>
      }
      

        <TouchableOpacity
          onPress={() => {
            
             // navigation.navigate('OpenForm')
          }}
          activeOpacity={.9}
          style={[commonStyles.btnBg,commonStyles.footer,{justifyContent:'center',marginTop:20}]}>
          <View style={[commonStyles.btnBg,{justifyContent:'center'}]}>

            <Text style={commonStyles.btnTextWhitecolor}>Continue</Text></View></TouchableOpacity>
      </View>
    </RBSheet>
  </View>
  )
}
export default HomeScreen;
const styles = StyleSheet.create({
  viewColumn: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: bgcolor.white,
    justifyContent: 'center',
    margin: 15
  },
  viewRow: {
    height:120,
    flexDirection: 'row',
    backgroundColor: bgcolor.white,
    
  },
  circularImage: {
    width: 70,
    height: 70,
    marginTop:10,
    borderRadius: 150 / 2,
    overflow: "hidden",
    alignSelf: 'center',
    borderWidth:1,
    borderColor: bgcolor.white,
  },
  viewColumnFlex: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: bgcolor.white,
    justifyContent: 'center'
  },
  flatListIcon: {
    flex: 1,
    flexDirection: 'column',
    marginLeft:5,
    marginRight:5,
    overflow: 'hidden',
    backgroundColor:bgcolor.white,
    borderRadius:7,
    borderTopEndRadius:7,
  },
  viewRowFlex: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: bgcolor.white,
    justifyContent: 'center'
  },
  headingText: {
    fontSize: fonts.font14,
    color: bgcolor.lightgray,
    alignSelf: 'center',
    marginTop:5,
    fontFamily:'Nunito_SemiBold'
  },
  viewLine: {
    backgroundColor: bgcolor.lightgray,
    marginTop: 10,
    marginBottom: 10,
    height: 0.5,
    width: '100%'
  },
  btnbg: {
    backgroundColor: bgcolor.btncolor,
    borderWidth: 0,
    borderRadius: 30,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  selectContainer: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: bgcolor.dimorange,
    overflow: 'hidden'
  }
});
