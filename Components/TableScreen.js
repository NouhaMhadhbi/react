import React from 'react'

import { Button, View } from 'react-native';
import { Tile } from 'react-native-elements';
import { Alert,StyleSheet,Text,Dimensions } from 'react-native';
const { width } = Dimensions.get("window");
const tables=[];
 

class TableScreen extends React.Component {
  

    render() {
 
        const tileDimensions = calcTileDimensions(90, 2)  // -> change this number and see!
        const tiles = '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40'.split(' ')
        return (
          <View style={styles.container}>
            {tiles.map(i => Item({...tileDimensions, text: i} ) ) } 
            
                    <Button
                   title="Précédent"
                   onPress={() => () => navigation.goBack()}
                />

                <Button title="suivante" onPress={() => this.props.navigation.navigate(('Chosir le nombre des personnes'),{ tables: tables })
       
          } />
          </View>);
        
      
    }
}
const Item = ({size, margin, text}) => (
    <View style={[styles.item, {width: size, height: size, marginHorizontal: margin}]}>
      <Text style={styles.itemText} onPress={() => {tables.push(text +' '), Alert.alert(
    
    'Confirmation',
   
    'tableaux selectionnées sont : '+ tables,
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
      backgroundColor: 'green',  
       alignSelf: "flex-start",
       alignItems: 'center',
       justifyContent: 'center',
       marginBottom: 20
    },
    itemText: {
      fontSize: 20
    }
  });
export default TableScreen