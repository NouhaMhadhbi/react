import React,{useState} from 'react'
import {StyleSheet,Button,View,Text, Picker} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

class QrcodeScreen extends React.Component {  
   
   
      render() {
        var tables=this.props.route.params.tabs;
       var people=this.props.route.params.person;
      
      
       
      var value= "les tables à fusionner sont: " + tables + "Le nombre des personnes est:" +people;
      return (
            <View style={styles.container}>  
             <Text style={styles.txt}>Voici votre Qrcode :{"\n"}</Text>
          
           <QRCode  
            value=  {value}
            size={300}
           
            
            />
               <View style={styles.multiButtonContainer}>
        
          <Button
            onPress={() => this.props.navigation.push(('Bienvenue à FoodHouse'))}
            title=" Retour à L'accueil "
            color="#009933"
          />
        </View> 
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
     
     marginTop:-100
    
 
  },
  txt:{
fontSize:20
  }
  ,


  multiButtonContainer: {
    margin: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
  });
