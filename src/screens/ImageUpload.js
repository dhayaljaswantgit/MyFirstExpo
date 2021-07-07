import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Button } from "../components";

import * as ImagePicker from "expo-image-picker";
import * as Linking from "expo-linking";

export default class ImageUpload extends Component {
  state = {
    image: null,
  };

  pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    console.log("status => ", status);

    if (status !== "granted") {
      // alert("Sorry, we need camera roll permissions to make this work!");
      Linking.openSettings();
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({
        image: result.uri,
      });
    }
  };

  render() {
    const { image } = this.state;

    return (
      <View>
        <Button title="Upload Image" onPress={this.pickImage} />

        {image ? (
          <Image source={{ uri: image }} style={{ height: 200, width: 200 }} />
        ) : null}
      </View>
    );
  }
}
