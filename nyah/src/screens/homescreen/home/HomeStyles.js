import { StyleSheet } from 'react-native';
import bgcolor from '/home/wv/projects/android/nyah/nyah/src/Themes/Colors'
import fontsize from '/home/wv/projects/android/nyah/nyah/src/Themes/fontsize'

export default StyleSheet.create({
    container:{
        backgroundColor: bgcolor.white, 
        alignItems: 'center', 
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
    textCenter:{
      marginTop:5,
      color:bgcolor.orange,
      fontSize:fontsize.font20,
      fontFamily:'Nunito_SemiBold'
    }
});