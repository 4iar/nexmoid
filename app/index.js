import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import CredentialsForm from './screens/CredentialsForm';
import sendSms from './utils/sendSms';


export default class Nexmoid extends Component {
  constructor() {
    super();
    this.state = {
      credentials: null
    }
  }

  handleCredentials(credentials) {
    this.setState({
      credentials
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.credentials ? <View><Text>ready</Text></View> : <CredentialsForm handleSubmit={this.handleCredentials.bind(this)}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
