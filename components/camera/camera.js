import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import pick from '../api/picker.js'

export default class Camera extends Component {
  constructor(props){
      super(props);
      this.state = {
          avatarSource: null
      }
  }  
  render() {
      let img = this.state.avatarSource == null? null:
        <Image
            source={this.state.avatarSource}
            style={{height:200, width: 200}}
        />
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Hello</Text>
        <TouchableOpacity
        onPress={this.Show.bind(this)}>
        <Text>Click Here</Text>
        </TouchableOpacity>
        {img}
      </View>
    )
  }
  Show(){
    pick(source => this.setState({avatarSource: source}))
  }
}
