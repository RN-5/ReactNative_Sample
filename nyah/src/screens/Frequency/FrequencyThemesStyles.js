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
scroll_container:{
  flex:1,
  backgroundColor:bgcolor.background,
   width: '100%'
},
scroll_contentContainer: {
flexGrow:1,
 
  alignContent: 'center',
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
        marginTop:10,
        flexDirection:'row',
    },
    radioText:{
      alignSelf:'center',
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
      viewRowFlex1:{
        flexDirection:'row',
        justifyContent:'center',
        flex:1
      },
    viewColumn:{
        flex:1,
        flexDirection:'column',
    },
   
    ViewWitthHeight110:{
        marginTop: 10,
       borderColor: bgcolor.lightgray, 
       borderWidth: 1, 
       borderRadius: 10, 
       width: '100%', 
       height:110,
       flexDirection:'column',
       backgroundColor: bgcolor.white, 
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