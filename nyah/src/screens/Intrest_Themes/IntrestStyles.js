import { StyleSheet } from 'react-native';
import bgcolor from '/home/wv/projects/android/nyah/nyah/src/Themes/Colors';
import fontsize from '/home/wv/projects/android/nyah/nyah/src/Themes/fontsize'

export default StyleSheet.create({
  contentContainer: {
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignContent: 'center',
    flexGrow:1,
},
container: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
},
headingTextCenter:{
  fontSize:fontsize.font20,
  color:bgcolor.orange,
  alignItems:'center',
  alignSelf:'center',
  textAlign:'center',
  alignContent:'center',
},
    viewRow:{
        width:'100%',
        flexDirection:'row',
    },
    viewRowWithJustify:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'center'
    },
    viewColumnWithJustify:{
      width:'100%',
      flexDirection:'column',
      justifyContent:'center'
  },
    box: {
        width: 300,
        height: 300,
        backgroundColor: "red",
        marginBottom: 30,
      },
    viewColumn:{
        flex:1,
        flexDirection:'column',
    },
    circles:{
        width: 20, 
        height: 20,
    },
    line:{
        width:80,
        height:20,
        alignSelf:'center',
    },
    textInputWithoutBorder:{
         borderColor: bgcolor.lightgray, 
         borderWidth: 0, 
         borderRadius: 10, 
         width: '100%', 
         flex:1,
         backgroundColor: '#FFFFFF', 
         paddingLeft: 10
         ,flexDirection:'row'
    },
    ViewWithBorderWithRow:{
        marginTop: 12,
         borderColor: bgcolor.lightgray, 
         borderWidth: 1, 
         borderRadius: 10, 
         width: '100%', 
         backgroundColor: '#FFFFFF', 
         height:50,
         flexDirection:'row'
    },
    ViewWithBorderWithColumn:{
      marginTop: 12,
       borderColor: bgcolor.lightgray, 
       borderWidth: 1, 
       borderRadius: 10, 
       width: '100%', 
       backgroundColor: '#FFFFFF', 
       height:50,
       flexDirection:'column'
  },
    headingText:{
        color:bgcolor.lightgray,
        marginTop:20,
        fontSize:fontsize.font15,
        marginLeft:3
    },
    textSmallSizeRight:{
      color:bgcolor.borderGray,
      marginTop:5,
      alignSelf:'flex-end',
      fontSize:fontsize.font13,
      },
      textSmallHeading:{
        color:bgcolor.lightgray,
        marginTop:5,
        alignSelf:'flex-start',
        fontSize:fontsize.font13,
        },
    centerAlign:{
        color:bgcolor.lightgray,
        marginTop:10,
        fontSize:15,
        fontWeight:'700',
        marginLeft:3,
        textAlign:'center',
        alignSelf:'center'
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: "center",
      },
      textInputWithBorder150Characters:{
        marginTop: 7,
         borderColor: bgcolor.lightgray, 
         borderWidth: 1, 
         borderRadius: 10, 
         width: '100%', 
         height:110,
         backgroundColor: '#FFFFFF', 
         paddingLeft: 10,
         paddingRight:10,
         textAlignVertical:'top'
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
    content: {
      width: '90%',
      height: '25%',
      backgroundColor: bgcolor.white,
      overflow: 'hidden',
      borderRadius: 10,
    },
      skipContent: {
        width: '90%',
        height: '30%',
        backgroundColor: bgcolor.white,
        overflow: 'hidden',
        borderRadius: 10,
      },
});