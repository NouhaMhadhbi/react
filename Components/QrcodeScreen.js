import React,{useState} from 'react'
import {StyleSheet,View,Text, Picker} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

class QrcodeScreen extends React.Component {  
   
   
      render() {
        var tables=this.props.route.params.tabs;
       var people=this.props.route.params.person;
      
      
       
      var value= "les tables à fusionner sont: " + tables + "Le nombre des personnes est:" +people;
      return (
            <View style={styles.container}>  
           <QRCode 
            value=  {value}
            size={300}
           
            
            /> 
           </View>  
            );
      };
    }
     
  
     
    
export default QrcodeScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
     
     
    
 
  },
  
  });
