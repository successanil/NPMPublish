/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, TextInput, Button,Text} from 'react-native';
import {Component} from 'react';
import App from 'publishdemolib';

export default class AppWrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var argv = {
      a: '',
      gapi_key: '<ADD GAPI KEY>',
      dapi_key: '<ADD DAPI KEY>',
    };
    return (
      <View style={{flex: 1}}>
       <App argv={argv} />
      </View>
    );
  }
}
