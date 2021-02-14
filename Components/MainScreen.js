
import React from 'react'

import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';

class MainScreen extends React.Component {
    
  render() {
    return (
      <View>


         <TouchableOpacity style = {styles.ecran} activeOpacity = { .5 } >
 
 <Image source={require('../assets/images/logo.jpg')} style = {styles.ImageClass} />
 
</TouchableOpacity>

        <Text  style={styles.green} onPress={() => this.props.navigation.push('Chosir la liste des Tableaux')} >  {"\n"}{"\n"}{"\n"}     Touchez {"\n"}l'écran</Text>
        
      </View>
    )
  }
}
export default MainScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
     
    },
    green: {
        fontSize:40,
     marginLeft:40,
      color: '#008000'
      
    },
    ImageClass:
  {
    
    width: 250,
    height: 200,
    
 
  },
  ecran:{
     marginTop:100 
  }
  });