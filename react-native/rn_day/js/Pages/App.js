import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Button,
  Image
} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Button
          onPress={() => { alert('hello world') }}
          title="Learn More"
        />
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
        />
        <Image
          source={require('../../img/logo.png')}
        />
      </View>
    );
  }
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
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