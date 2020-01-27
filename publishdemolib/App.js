/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
} from 'react-native';


const app = require('rg-weather-app-node');
const localconfig = require('./localconfig');

const App: () => React$Node = () => {
  var argv = {
    a:"New Delhi", 
    gapi_key:localconfig.GMAP_KEY,
    dapi_key:localconfig.DARK_SKY_API_KEY
  };
app.startProcess(argv);
  return (
    <View>

    </View>
  );
};


export default App;
