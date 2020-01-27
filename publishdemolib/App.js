/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import {Component} from 'react';

const app = require('rg-weather-app-node');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
    };
  }
  componentDidMount() {
    
  }

  render() {
    return <View></View>;
  }
}

var startProcessForTemp = (argv) => {
  console.log('Test params');
  console.log(argv);
  app.startProcess(argv);
}

module.exports = {
  App,
  startProcessForTemp
};
