import React from 'react'
import { Picker, StyleSheet } from 'react-native'

export default class ExcusaPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      excusa: ''
    }
  }

  componentDidMount() {
    this.setState({ excusa: this.props.excusas[0].name }, () =>
      this.props.updateExcusa(this.state.excusa)
    )
  }

  handleValueChange = value => {
    this.setState({ excusa: value }, () => this.props.updateExcusa(this.state.excusa))
  }

  render() {
    const { excusas } = this.props
    return (
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={this.state.excusa}
        onValueChange={itemValue => this.handleValueChange(itemValue)}
      >
        {excusas.map(excusa => (
          <Picker.Item key={excusa} label={excusa.name} value={excusa.name} />
        ))}
      </Picker>
    )
  }
}

const styles = StyleSheet.create({
  picker: {
    width: '100%',
    alignContent: 'center',
    backgroundColor: '#FFF0E0',
    borderColor: 'black',
    borderWidth: 1
  },
  pickerItem: {
    color: 'red'
  }
})
