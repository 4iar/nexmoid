import React, { Component } from 'react';
import { View } from 'react-native';
import { RkButton, RkTextInput, RkStyleSheet, RkText } from 'react-native-ui-kitten';
import { scaleVertical } from '../utils/scale';


export default class CredentialsForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      apiKey: "null",
      apiSecret: "null",
    }
  }

  handleSubmit () {
    this.props.handleSubmit({
      apiKey: this.state.apiKey,
      apiSecret: this.state.apiSecret,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <RkText>Nexmo.com credentials</RkText>

        <RkTextInput label="API Key" name="apiKey"
                     onChangeText={text => this.setState({apiKey: text})}
        />

        <RkTextInput label="API Secret" name="apiSecret"
                     onChangeText={text => this.setState({apiSecret: text})}
        />

        <View style={styles.buttons}>
          <RkButton onPress={this.handleSubmit.bind(this)} label="Save">
            <RkText>Save</RkText>
          </RkButton>
        </View>
      </View>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  container: {
    paddingHorizontal: 17,
    paddingBottom: scaleVertical(22),
    alignItems: 'center',
    flex: -1
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: scaleVertical(24)
  }
}));
