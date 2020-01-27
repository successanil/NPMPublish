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
const app = require('rg-weather-app-node');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      temperature:'00.00',
    };
    this.inputCity = '';
  }
  componentDidMount() {}

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{flex: 1, paddingLeft: 16, paddingRight: 16, paddingTop: 16}}>
          <TextInput
            style={{borderWidth: 1}}
            placeholder="Enter city name"
            editable
            onChangeText={text => this.inputCity = text}
            maxLength={40}
          />
          <View style={{marginTop: 16}}></View>
          <Button
            title="Fetch temperature"
            color="#f194ff"
            onPress={() => {
              var argvL = this.state.props.argv;
              argvL.a = this.inputCity;
              this.startProcessForTemp(argvL);
            }}
          />
        </View>         
         <View style={{flex: 1, borderWidth: 1,justifyContent:'center',alignItems:'center'}}>
          <Text>Temperature in input city is {this.state.temperature} Fahrenheit</Text>
        </View>
      </View>
    );
  }
  startProcessForTemp(argv) {
    // console.log('Test params');
    // console.log(argv);
    var p = app.getGeoCoding(argv);
    p
    .then((result)=>{
      return app.getWeather(argv,result);
    })
    .then((result)=>{
      this.setState({
            temperature:result.tempreture
          });
    })
    .catch((err)=>{
      console.log(err);
    })
    

    // app.startProcess(argv, result => {
    //   this.setState({
    //     temperature:10
    //   });
    // });
  }
}
