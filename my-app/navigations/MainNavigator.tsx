import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListaLocalScreen from "../screens/ListaLocalScreen";
import ListaExternaScreen from "../screens/ListaExternaScreen";
import ImcScreen from "../screens/ImcScreen";
import FormularioScreen from "../screens/FormularioScreen";
import WelcomeScreen from '../screens/Welcomescreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="IMC" component={ImcScreen} />
      <Tab.Screen name="Formulario" component={FormularioScreen} />
    </Tab.Navigator>
  );
}

export default function MainNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />
        
        <Stack.Screen name="Local" component={ListaLocalScreen} />
        <Stack.Screen name="Externa" component={ListaExternaScreen} />
        
        <Stack.Screen name="MainTabs" component={MyTabs} options={{ title: 'Menú Principal' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
