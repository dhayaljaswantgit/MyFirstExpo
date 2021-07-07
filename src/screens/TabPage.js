import React, { Component } from "react";
import { Text, View } from "react-native";
import { Header } from "../components/Header";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ImageUpload from "./ImageUpload";
import LocationPage from "./Location";
import ListPage from "./ListPage";

const Tab = createBottomTabNavigator();

export default class TabPage extends Component {
  render() {
    return (
      <>
        <Header navigation={this.props.navigation} title="Tab Page" />
        <Tab.Navigator>
          <Tab.Screen name="Image Upload" component={ImageUpload} />
          <Tab.Screen name="Location" component={LocationPage} />
          <Tab.Screen name="ListPage" component={ListPage} />
        </Tab.Navigator>
      </>
    );
  }
}
