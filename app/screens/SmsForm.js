import React, { Component } from 'react';
import { View } from 'react-native';
import { RkButton, RkTextInput, RkStyleSheet, RkText } from 'react-native-ui-kitten';
import { scaleVertical } from '../utils/scale';


export default class SmSForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      to: "",
      from: "",
      text: ""
    }
  }

  handleSubmit () {
    this.props.handleSubmit({
      from: this.state.from,
      to: this.state.to,
      text: this.state.text
    });

    this.setState({
      to: "",
      from: "",
      text: ""
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <RkText>SMS Composer</RkText>

        <RkTextInput label="To"
                     onChangeText={text => this.setState({to: text})}
        />

        <RkTextInput label="From"
                     onChangeText={text => this.setState({from: text})}
        />

        <RkTextInput label="Text"
                     onChangeText={text => this.setState({text: text})}
        />

        <View style={styles.buttons}>
          <RkButton onPress={this.handleSubmit.bind(this)} label="Send" rkType="success">
            <RkText>Send</RkText>
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
