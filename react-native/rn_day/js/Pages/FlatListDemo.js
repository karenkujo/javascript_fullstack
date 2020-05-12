import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput
} from 'react-native'
import { WebView } from 'react-native-webview'


export default class FlatList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'shiroha',
      age: 18,
      url: 'https://www.baidu.com'
    }
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {/* <View style={{
          flex: 1,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text 
            style={{ color: '#fff', fontSize: 20 }}
            numberOfLines={1}
            ellipsizeMode="head"
          >
            {this.state.age}
          </Text>
          <TextInput 
          style={{padding: 0, height: 40, width: 200, borderColor: '#fff', borderWidth: 1}}
          keyboardType="number-pad"
          onChangeText={(val) => this.setState({
            age: val
          })}
          ></TextInput>
        </View> */}
        <WebView source={{ uri: this.state.url }} />
      </SafeAreaView>
    )
  }
}

const style = StyleSheet.create({

})