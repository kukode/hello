import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class TutorialScreen extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://kukode.github.io/css/#/?id=definisi-css'}}
        style={{marginTop: 20}}
      />
    );
  }
}