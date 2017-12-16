# react-native-rem-stylesheet
Tool to build all-device-capatible styles.


### Install

```bash
yarn add react-native-rem-stylesheet
```
or 

```bash
npm i --save react-native-rem-stylesheet
```

## Demo

```js
import React, { Component } from "react";
import { View, Text } from "react-native";
import StyleSheet from "react-native-rem-stylesheet";

export default class SomeComponent extends Component {
  render() {
    return (
      <View>
        <Text>Some text</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: 320, //100% width
    height: 20, // will be 40 in 640 width device.
    padding: 10,
  },
  text: {
    fontSize: 12,
  },
});

```
