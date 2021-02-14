import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './Components/MainScreen';
import TableScreen from './Components/TableScreen';
import QrcodeScreen from './Components/QrcodeScreen';
import PeopleScreen from './Components/PeopleScreen';
const Stack = createStackNavigator(); 
export default class App extends React.Component {
  render(){

  
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Bienvenue à FoodHouse" component={MainScreen} />
      <Stack.Screen name="Tableaux" component={TableScreen} />
      <Stack.Screen name="Personnes" component={PeopleScreen} />
      <Stack.Screen name="Qrcode" component={QrcodeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}}