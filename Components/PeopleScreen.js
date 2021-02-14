import React from 'react'

import { Button, View } from 'react-native';
import { Alert,StyleSheet,Text,Dimensions } from 'react-native';
const { width } = Dimensions.get("window");

var people;
class PeopleScreen extends React.Component {  
    render() {
      var tables=this.props.route.params.tables;
      
        const tileDimensions = calcTileDimensions(66, 1.1)  // -> change this number and see!
        const tiles = '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30'.split(' ')
        return (
          <View >
             <Text style={styles.txt}>{"\n"}Chosir le nombre des Personnes:</Text>
           
             <View style={styles.container}>
            {tiles.map(i => Item({...tileDimensions, text: i} ) ) } 
            </View>
            
    
      <View style={styles.multiButtonContainer}>
          <Button
            onPress={() => this.props.navigation.goBack(null)}
            title="Précédent"
            color="#009933"
          />
          <Button
            onPress={() => this.props.navigation.push(('Qrcode'),{tabs : tables , person: people })}
            title=" suivante "
            color="#009933"
          />
        </View>
        </View>);
        
      
    }
}
const Item = ({size, margin, text}) => (
    <View style={[styles.item, {width: size, height: size, marginHorizontal: margin}]}>
      <Text style={styles.itemText} onPress={() => {people=text, Alert.alert(
    
    'Confirmation',
   
    'Le nombre de person est : '+ people,
    [
      { text: 'Ok', onPress: () => console.log('Yes Pressed') },
      
    ],
    { cancelable: false }
    
  )}}>{text}</Text>
    </View>
  )
  
  const calcTileDimensions = (deviceWidth, tpr) => {
    const margin = deviceWidth / (tpr * 10);
    const size = (deviceWidth - margin * (tpr * 2)) / tpr;
    return { size, margin };
  };
  
  const styles = StyleSheet.create({
    container: {
       justifyContent: "flex-start", flexDirection: "row", flexWrap: "wrap", marginTop: 30
    },
    item: {
      backgroundColor: 'red',  
       alignSelf: "flex-start",
       alignItems: 'center',
       justifyContent: 'center',
       marginBottom: 20
    },
    itemText: {
      fontSize: 20
    },
   multiButtonContainer: {
      margin: 80,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20
    },
    txt:{
fontSize:20
    }
  });
  
   
export default PeopleScreen