/* eslint-disable linebreak-style */
import React from 'react'
import { StyleSheet, View } from 'react-native'
import * as SendIntentAndroid from 'react-native-send-intent'
import { Header, Text, Button } from 'react-native-elements'

import PickerGroup from './components/PickerGroup'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: []
    }
  }

  handleNewResult = newResult => {
    this.setState({ result: newResult })
  }

  onDoTheMagic = () => {
    console.log(SendIntentAndroid)
    SendIntentAndroid.openChooserWithOptions(
      {
        subject: 'Story Title',
        text: 'Message Body'
      },
      'Share Story'
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          placement="left"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{
            text: 'Excusador premium',
            style: { color: '#fff' }
          }}
        />
        <PickerGroup showResult={newResult => this.handleNewResult(newResult)} />
        <Text>Resultado: {this.state.result.join('')}</Text>
        <View style={styles.footer}>
          <Button
            onPress={this.onDoTheMagic}
            large
            icon={{ name: 'magic', type: 'font-awesome' }}
            title="DO THE MAGIC"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  footer: {
    width: '100%',
    height: 80,
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  }
})
