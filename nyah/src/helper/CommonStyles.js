import { StyleSheet } from 'react-native';
import bgcolor from '/home/wv/projects/android/nyah/nyah/src/Themes/Colors'
import fontSize from '/home/wv/projects/android/nyah/nyah/src/Themes/fontsize';
import fontsize from '/home/wv/projects/android/nyah/nyah/src/Themes/fontsize'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:bgcolor.background,
    },
    header:{
       alignSelf: 'stretch',
      textAlign: 'center',
      alignSelf: 'stretch', 
      textAlign: 'center', 
      marginTop: 25
    },
    headerview:{
      marginTop: 25,
      flexDirection:'row'
    },
    headerColumn:{
      marginTop: 25,
      flexDirection:'column'
    },
    footer:{
      marginBottom:25
    },
    follow30:{
      borderRadius:30,
      borderWidth:1,
      borderColor:bgcolor.orange,
      justifyContent:'center'
    },
    topHeaderText:{
       textAlign: 'center', 
       flex: 1,
       marginTop:-4,
       color: bgcolor.orange, 
       fontSize: fontsize.font18, 
       alignSelf: 'stretch',
      textAlign: 'center',
      fontFamily:'Nunito_Bold',
    },
    headingText:{
      color: bgcolor.orange, 
       fontFamily:'Nunito_Bold',
       fontSize: fontsize.font18, 
       alignSelf: 'stretch',
      textAlign: 'center'
    },
    topView:{
      marginTop:25,
      marginLeft:20,
      marginRight:20,
      justifyContent:'center',
      alignContent:'center',
      flexDirection:'row',
    },
    secondaryText:{
      color: bgcolor.borderGray, 
      fontSize: fontsize.font13,
      fontFamily:'Nunito_Semibold'
    },
    btnWidth:{
      width: '70%',
      alignSelf:'center'
    },
    boldText14:{
      color: bgcolor.orange, 
      fontSize: fontsize.font14, 
      fontFamily:'Nunito_Bold',
    },
    btnTextBluecolor:{
      color: bgcolor.btncolor, 
      alignSelf: 'center', 
      fontSize: fontSize.font15,
      fontFamily:'Nunito_SemiBold',

    },
    btnTextWhitecolor:{
      color: bgcolor.white, 
      alignSelf: 'center', 
      fontSize: fontSize.font15,
      fontFamily:'Nunito_SemiBold',
    },
    hintText:{
      color:bgcolor.lightgray,
      fontSize:fontsize.font14,
      fontFamily:'Nunito_SemiBold',
    },
    ViewWithBorder:{
      marginTop: 10,
       borderColor: bgcolor.lightgray, 
       borderWidth: 1, 
       borderRadius: 10, 
       width: '100%', 
       backgroundColor: '#FFFFFF', 
       height:50,
       flexDirection:'row'
  },
  ViewWithoutBorder:{
     marginTop: 10,
     borderColor: bgcolor.lightgray, 
     borderWidth: 0, 
     borderRadius: 10, 
     width: '100%', 
     backgroundColor: '#FFFFFF', 
     height:45,
     flexDirection:'row',
},
  ViewWitthHeight90:{
    marginTop: 10,
   borderColor: bgcolor.lightgray, 
   borderWidth: 1, 
   borderRadius: 10, 
   width: '100%', 
   height:90,
   flexDirection:'column',
   backgroundColor: bgcolor.white, 
   textAlignVertical:'top',
   justifyContent:'center'
},
      backArrow:{
        width: 18, 
      height: 18,
       tintColor: bgcolor.lightgray
      },
      notificationBell:{
        width: 18, 
      height: 18,
       tintColor: bgcolor.orange,
      position:'absolute'
      },
    headingTextCenter:{
      fontSize:fontsize.font20,
      color:bgcolor.orange,
      alignItems:'center',
      alignSelf:'center',
      textAlign:'center',
      alignContent:'center',
      fontFamily:'Nunito_SemiBold',
    },
    dropDownImage:{
      width:15,
      height:15,
      alignSelf:'center',
      tintColor:bgcolor.lightgray
    },
    crossSign:{
      width:15,
      height:15,
      alignSelf:'flex-end'
    },
    line:{
      width:'100%',
      height:0.5,
      backgroundColor:bgcolor.borderGray,
  },
  imageRight:{
    position:'absolute',
    zIndex:1,
    alignSelf:'flex-end',
    top: 0,
    alignContent:'flex-end',
    bottom: 0,
    left: 0,
    right: 0,
  },
    containerCenter:{
      flex: 1,
      justifyContent: 'center'
  },
    viewRow:{
        flex:1,
        flexDirection:'row',
    },
    viewColumn:{
        flex:1,
        flexDirection:'column',
        marginTop:20
    },
    viewColumnWithoutTop:{
      flex:1,
      flexDirection:'column',
  },
    viewRowWithoutFlex:{
      flexDirection:'row',
  },
  viewColumnwithMargin:{
    marginLeft:20,
    marginRight:20,
    flex:1
},
btnBg:{
  backgroundColor: bgcolor.btncolor, 
  borderWidth: 0, 
  borderRadius: 25, 
  width: '60%', 
  height: 45, 
  alignSelf:'center',
  justifyContent: 'center', 
  flexDirection: 'row'
},
subHeadingTextGray:{
  color: bgcolor.lightgray, 
  marginTop: 20, 
  alignSelf: 'center', 
  fontSize: fontSize.font15, 
  fontFamily:'Nunito_SemiBold',
},
  viewColumnWithoutFlex:{
    flexDirection:'column',
},
dropDownArrow:{
  width: 12, 
  height: 12, 
  alignSelf: 'center',
   alignItems: 'center',
    tintColor: bgcolor.lightgray
},
headingGray14:{
  color: bgcolor.lightgray, 
  alignSelf: 'center', 
  fontSize: 14, 
  fontFamily:'Nunito_SemiBold',
},
    circularImage: {
      width: 90,
      height: 90,
      borderRadius: 150 / 2,
      overflow: "hidden",
      borderWidth: 0.5,
      borderColor: bgcolor.borderGray
    },
    circularImage18: {
      width: 18,
      height: 18,
      borderRadius: 150 / 2,
      overflow: "hidden",
      borderWidth: 0.5,
      alignSelf:'center',
      alignItems:'center',
      borderColor: bgcolor.borderGray
    },
    
    modalView: {
        margin: 0,
        justifyContent: 'flex-end',
      },
      containerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
      },
      modal120:{
         width: '85%',
        height: 120,
        backgroundColor: bgcolor.white,
        overflow: 'hidden',
        borderRadius: 10,
      },
      modalInfiniteHeight:{
        width: '100%',
       backgroundColor: bgcolor.white,
       overflow: 'hidden',
       borderTopLeftRadius: 10,
       borderTopRightRadius: 10,
     },
      content: {
        width: '85%',
        height: 120,
        backgroundColor: bgcolor.white,
        overflow: 'hidden',
        borderRadius: 10,
      },
      textInputWithBorder150Characters:{
        marginTop: 7,
         borderColor: bgcolor.lightgray, 
         borderWidth: 0, 
         borderRadius: 10, 
         width: '100%', 
         height:110,
         fontFamily:'Nunito_SemiBold',
         backgroundColor: '#FFFFFF', 
         paddingLeft: 10,
         paddingRight:10,
         textAlignVertical:'top'
    },
    viewSearch:{
       marginTop: 10,
       borderColor: bgcolor.lightgray, 
       borderWidth: 0, 
       borderRadius: 10, 
      
       height:45,
       fontFamily:'Nunito_SemiBold',
       backgroundColor: '#FFFFFF', 
       textAlignVertical:'top'
  },
    modalViewRowEnd:{
      marginRight: 15, 
      marginLeft: 15, 
      justifyContent:'flex-end', 
      marginTop: 7
    },
    modalBodycolor:{
      fontSize: fontSize.font14, 
      color: bgcolor.lightgray, 
      marginRight: 15, 
      marginLeft: 15, 
      justifyContent: 'center',
      marginTop:15,
      fontFamily:'Nunito_SemiBold' 
    },
    modalBtnText:{
      color: bgcolor.btncolor, 
      marginLeft: 5, 
      fontSize: fontsize.font15,
      fontFamily:'Nunito_SemiBold',
    },
    Imagecontent: {
      width: '85%',
      height: '22%',
      backgroundColor: bgcolor.white,
      overflow: 'hidden',
      borderRadius: 5,
    },
    textDarkGray14:{
      fontSize: fontsize.font14,
      color:bgcolor.lightgray,
      alignItems:'center',
      fontFamily:'Nunito_SemiBold',
    },
    cardImage:{
      width: 15, 
      height: 15, 
      alignSelf: 'center', 
      alignItems: 'center', 
      marginLeft: 5, 
      tintColor: bgcolor.lightgray
    },
    cardImageWithouttint:{
      width: 18, 
      height: 18, 
      alignSelf: 'center', 
      alignItems: 'center', 
      marginLeft: 5
    },
    imaeg10:{
      width: 10, 
      height: 10, 
      alignSelf: 'center', 
      alignItems: 'center', 
      marginLeft: 3, 
      tintColor: bgcolor.lightgray
    },
    
    circleShape22: {
      width: 22,
      height: 22,
      borderRadius: 150 / 2,
      backgroundColor: bgcolor.orange,
    },
});
