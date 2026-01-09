import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListaLocalScreen from "../screens/ListaLocalScreen";
import ListaExternaScreen from "../screens/ListaExternaScreen";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Local" component={ListaLocalScreen} />
      <Stack.Screen name="Externa" component={ListaExternaScreen} />
    </Stack.Navigator>
  );
}
