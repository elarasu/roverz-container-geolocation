import React from 'react';
import {
  View,
  StatusBar,
 } from 'react-native';

import BackgroundGeolocation from 'react-native-background-geolocation';
import Config from './components/config';
import HomeView from './components/HomeView';

global.BackgroundGeolocation = BackgroundGeolocation;


export default class MapTracking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drawer: undefined,
    };
  }

  componentWillMount() {
    StatusBar.setBarStyle('default');
    this.setState({
      drawer: this.refs.drawer,
    });
  }

  render() {
    return (
      <View style={{ backgroundColor: Config.colors.light_blue, flex: 1, paddingTop: 1 }}>
        <HomeView />
      </View>
    );
  }

}
