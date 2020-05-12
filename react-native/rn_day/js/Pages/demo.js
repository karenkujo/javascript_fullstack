import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showText: 'hello'
    }
  }
  componentDidMount() {
    const timer = setTimeout(() => {
      this.setState({
        showText: 'world'
      })
    }, 3000)
  }
  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}>{this.state.showText}</Text>
        <Test nameTest={'shiroha'} />
      </View>
    );
  }
}

class Test extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Text style={style.text}>{this.props.nameTest}</Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "blue"
  },
  item: {
    flex: 1,
    backgroundColor: 'aqua',
    marginLeft: 5,
    marginRight: 5
  },
  itemCenter: {
    justifyContent: 'center'
  },
  text: {
    color: '#fff'
  }
})

export default App;