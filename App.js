/* eslint-disable linebreak-style */
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Header, Text } from 'react-native-elements'

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
          <View>
            <Text>My fixed footer</Text>
          </View>
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
    height: 50,
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  }
})
