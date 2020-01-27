/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {App,startProcessForTemp} from './App';
import {name as appName} from './app.json';


// var argv = {
//     a: 'New Delhi',
//     gapi_key: localconfig.GMAP_KEY,
//     dapi_key: localconfig.DARK_SKY_API_KEY,
//   };

//startProcessForTemp(argv);


AppRegistry.registerComponent(appName, () => App);
