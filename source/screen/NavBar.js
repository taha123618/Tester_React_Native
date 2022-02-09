import React from 'react';
import Login from './Login';
import Register from './Register';
import Home from './Home';

// for Navigation
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const AuthNavaigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="drawer"
        component={DrawerNavaigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const DrawerStack = createDrawerNavigator();

const DrawerNavaigation = () => {
  return (
    <DrawerStack.Navigator initialRouteName="TabNavaigation">
      <DrawerStack.Screen
        name="TabNavaigation"
        component={TabNavaigation}
        options={{headerShown: false}}
      />
      {/* <DrawerStack.Screen
        name="home"
        component={Home}
      /> */}
      <DrawerStack.Screen
        name="register"
        component={Register}
        options={{headerShown: false}}
      />
      <DrawerStack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
    </DrawerStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabNavaigation = () => (
  <Tab.Navigator>
    <Tab.Screen name="home" component={Home} options={{headerShown: false}} />
    <Tab.Screen name="login" component={Login} options={{headerShown: false}} />
    <Tab.Screen
      name="register"
      component={Register}
      options={{headerShown: false}}
    />
  </Tab.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthNavaigation />
    </NavigationContainer>
  );
};

const NavBar = ({navigation}) => {
  // const { top, bottom } = useSafeAreaInsets();

  return <Navigation />;
};

export default NavBar;
