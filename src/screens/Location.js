import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "../components";
import * as Location from "expo-location";

export default class LocationPage extends Component {
  state = {
    location: null,
  };

  getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  render() {
    const { location } = this.state;

    return (
      <View>
        <Button title="Get My Location" onPress={this.getLocation} />
        {location ? <Text>location = {JSON.stringify(location)}</Text> : null}
      </View>
    );
  }
}
