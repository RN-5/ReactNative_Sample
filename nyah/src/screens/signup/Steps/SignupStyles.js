import { StyleSheet } from 'react-native';
import fontSize from '../../../Themes/fontsize';
import bgcolor from '/home/wv/projects/android/nyah/nyah/src/Themes/Colors';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:bgcolor.background,
         width: '100%'
    },
    contentContainer: {
        flexGrow:1,
        marginLeft:20,
        marginRight:20,
        alignContent: 'center',
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
        marginTop:10
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
         paddingLeft: 10,
         fontFamily:'Nunito_SemiBold' ,
         color:bgcolor.lightgray,
         fontSize:fontSize.font12,
         fontWeight:'400'
         
    },
    ViewWithBorder:{
        marginTop: 12,
         borderColor: bgcolor.lightgray, 
         borderWidth: 1, 
         borderRadius: 10, 
         width: '100%', 
         backgroundColor: '#FFFFFF', 
         height:50,
         flexDirection:'row'
    },
    headingText:{
        color:bgcolor.lightgray,
        marginTop:20,
        fontSize:15,
        marginLeft:3,        
         fontFamily:'Nunito_SemiBold' 

    },
    headingTextshotBio:{
      color:bgcolor.lightgray,
      fontSize:14,
      marginLeft:3,
      fontFamily:'Nunito_SemiBold' 
    },
    centerAlign:{
        color:bgcolor.lightgray,
        marginTop:10,
        fontSize:fontSize.font14,
        marginLeft:3,
        textAlign:'center',
        alignSelf:'center',
        fontFamily:'Nunito_SemiBold' 
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
         borderWidth: 0, 
         borderRadius: 10, 
         width: '100%', 
         height:110,
         backgroundColor: '#FFFFFF', 
         paddingLeft: 10,
         paddingRight:10,
         textAlignVertical:'top',
         color:bgcolor.lightgray,
         fontFamily:'Nunito_SemiBold',
         fontSize:fontSize.font12,
         fontWeight:'500'
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
        height: '42%',
        backgroundColor: bgcolor.white,
        overflow: 'hidden',
        borderRadius: 10,
      },
      skipContent: {
        width: '85%',
        height: 140,
        backgroundColor: bgcolor.white,
        borderRadius: 5,
      },
});