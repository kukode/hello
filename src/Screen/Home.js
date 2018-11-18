
import React, {Component} from 'react';
import {Text,View} from 'react-native';




export default class Home extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View>
            <Text>Home</Text>
        </View>
    
    );
  }
}


