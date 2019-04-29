import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import ExcusaPicker from '../ExcusaPicker'
import { first, second, third, fourth } from '../../constants/excusas'
import POSITION from '../../constants/excusasArrayPositions'

export default class PickerGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      excusaCompleta: [
        first[0].name,
        ', ',
        second[0].name,
        ' ',
        third[0].name,
        ' porque ',
        fourth[0].name
      ]
    }
  }

  updateExcusa = (value, position) => {
    let newExcusaCompleta = this.state.excusaCompleta
    newExcusaCompleta[position] = value
    this.setState(
      { excusaCompleta: newExcusaCompleta },
      this.props.showResult(this.state.excusaCompleta)
    )
  }

  render() {
    return (
      <View>
        <ExcusaPicker
          updateExcusa={(value, position = POSITION.PRIMERO) => this.updateExcusa(value, position)}
          excusas={first}
        />
        <ExcusaPicker
          updateExcusa={(value, position = POSITION.SEGUNDO) => this.updateExcusa(value, position)}
          excusas={second}
        />
        <ExcusaPicker
          updateExcusa={(value, position = POSITION.TERCERO) => this.updateExcusa(value, position)}
          excusas={third}
        />
        <Text h5>porque</Text>
        <ExcusaPicker
          updateExcusa={(value, position = POSITION.CUARTO) => this.updateExcusa(value, position)}
          excusas={fourth}
        />
      </View>
    )
  }
}
