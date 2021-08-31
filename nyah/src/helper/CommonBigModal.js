import React, { useEffect, useState, useCallback } from 'react'
import { SafeAreaView, Text, View, Image, TouchableOpacity, StyleSheet, StatusBar,Modal } from 'react-native';
import commonStyles from '/home/wv/projects/android/nyah/nyah/src/helper/CommonStyles';
import bgcolor from '/home/wv/projects/android/nyah/nyah/src/Themes/Colors'
import fonts from '/home/wv/projects/android/nyah/nyah/src/Themes/fontsize'

const CommonBigModal = (title,subject,btnname1,btnname2) =>{
//  const { title, subject, btnname1,btnname2 } = this.props;

 return(
  <Modal isVisible={true}
  transparent={true}
  swipeDirection={['up', 'left', 'right', 'down']}
  style={commonStyles.modalView}>
    
  <View style={commonStyles.containerStyle}>
    <View style={commonStyles.content}>
      <Text style={commonStyles.headingText}>
        {title}
      </Text>


      <Text style={[commonStyles.subHeadingTextGray,{marginRight: 15, marginLeft: 15, justifyContent: 'center', marginTop: 7}]}>
       {subject}
      </Text>

      <TouchableOpacity
        onPress={() => {
          setModal(false),
            navigation.replace('Steps');
        }}
        activeOpacity={.9}
        style={{ width: '50%', marginTop: 20, alignSelf: 'center' }}>
        <View style={{ backgroundColor: bgcolor.btncolor, borderWidth: 0, borderRadius: 30, width: '100%', height: 40, justifyContent: 'center', flexDirection: 'row' }}>
          <Text
            style={{ color: 'white', alignSelf: 'center', marginLeft: 5, fontSize: 15 }}>btnname1</Text></View></TouchableOpacity>
    </View>
  </View>
</Modal>
 );
}
export default CommonBigModal;