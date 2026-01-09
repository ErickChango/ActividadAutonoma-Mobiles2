import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import WelcomeScreen from "../screens/Welcomescreen";
import FormularioScreen from "../screens/FormularioScreen";
import ImcScreen from "../screens/ImcScreen";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Formulario" component={FormularioScreen} />
      <Tab.Screen name="IMC" component={ImcScreen} />
    </Tab.Navigator>
  );
} 