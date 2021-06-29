import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../screens/Home";
import CartPage from "../screens/CartPage";
import OrderPage from "../screens/OrderPage";
import ProductView from "../screens/ProductView";

const Stack = createStackNavigator();

export default function Root () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={ProductView} />
      <Stack.Screen name="Cart" component={CartPage} />
      <Stack.Screen name="Order" component={OrderPage} />
    </Stack.Navigator>
  );
};