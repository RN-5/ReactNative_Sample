import { StyleSheet } from 'react-native';
import bgcolor from '/home/wv/projects/android/nyah/nyah/src/Themes/Colors'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:bgcolor.background,
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
        height: '50%',
        backgroundColor: bgcolor.white,
        overflow: 'hidden',
        borderRadius: 10,
      },
      
      Imagecontent: {
        width: '90%',
        height: '25%',
        backgroundColor: bgcolor.white,
        overflow: 'hidden',
        borderRadius: 10,
      },
      circularImage: {
        width: 75,
        height: 75,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 2,
        marginRight:7,
        borderColor: bgcolor.lightgray
      }
});