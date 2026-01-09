import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from '../screens/WelcomeScreen';
import FormularioScreen from '../screens/FormularioScreen';
import JuegosScreen from '../screens/JuegosScreen';
import MusicaScreen from '../screens/MusicaScreen';
import PeliculasScreens from '../screens/PeliculasScreens';
import { NavigationContainer } from '@react-navigation/native';

const Top = createMaterialTopTabNavigator()
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Welcome' component={WelcomeScreen} />
      <Stack.Screen name='Drawer' component={MyDrawer} />
    </Stack.Navigator>
  );
}

function MyDrawer(){
  return(
    <Drawer.Navigator initialRouteName='Multimedia'>
      <Drawer.Screen name='Formulario' component={FormularioScreen}/>
      <Drawer.Screen name='Multimedia' component={MyTop}/>
    </Drawer.Navigator>
  )
}

function MyTop(){
  return(
    <Top.Navigator>
      <Top.Screen name='Pelicula' component={ PeliculasScreens }/>

      <Top.Screen name='Juegos' component={ JuegosScreen }/>
      <Top.Screen name='Musica' component={ MusicaScreen }/>
    </Top.Navigator>
  )
}

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )}
    