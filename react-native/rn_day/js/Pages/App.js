import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{
        flexDirection: 'row',
        height: 200,
        backgroundColor: 'pink',
        // justifyContent: 'center', 
        // alignItems: 'center'
      }}>
        <View style={style.item}>
          <View>
            <Text>1</Text>
          </View>
          <View style={style.item}>
            <Text>2</Text>
          </View>
          <View style={[style.item, style.itemCenter]}>
            <Text style={style.text}>3</Text>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
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
    color: '#000000'
  }
})

export default App;