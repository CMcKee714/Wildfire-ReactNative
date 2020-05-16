import React, { Component } from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/drawer/HomeComponent";
import Location from './src/drawer/LocationComponent';
import Menu from './src/drawer/MenuComponent';
import Contact from './src/drawer/ContactComponent';

import { DrawerContent } from './src/drawer/DrawerContent'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

createDrawer = () => {
  return(
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

class App extends Component {
  createContactStack = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            title: "Contact",
            headerTitleAlign: 'center'
          }}
        />
      </Stack.Navigator>
    );
  }

  createLocationStack = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen
          name="Location"
          component={Location}
          options={{
            title: "Location",
            headerTitleAlign: 'center'
          }}
        />
      </Stack.Navigator>
    );
  }

  createMenuStack = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            title: "Menu",
            headerTitleAlign: 'center'
          }}
        />
      </Stack.Navigator>
    )
  }

  createHomeStack = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerTitleAlign: 'center'
          }}
        />
      </Stack.Navigator>
    );
  }
  render(){
    return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
          <Drawer.Screen name="Home" children={this.createHomeStack} />
          <Drawer.Screen name="Menu" children={this.createMenuStack} />
          <Drawer.Screen name="Location" component={this.createLocationStack} />
          <Drawer.Screen name="Contact" component={this.createContactStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
