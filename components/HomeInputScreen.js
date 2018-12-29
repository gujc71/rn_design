import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements'


export default class HomeInputScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {};

  render() {
    return (
      <View>
        <View><Text>Write your post!</Text></View>
        <TextInput style={{height: 40, borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          maxLength = {40}
          underlineColorAndroid = "transparent" placeholder = "Title" placeholderTextColor = "#9a73ef" autoCapitalize = "none"
        />        
        <TextInput
          multiline = {true}
          numberOfLines = {10}
          onChangeText={(Contents) => this.setState({Contents})}
          value={this.state.Contents}
          editable = {true} 
          underlineColorAndroid = "transparent" placeholder = "Contents" placeholderTextColor = "#9a73ef" autoCapitalize = "none"
        />
        <Button raised title='Save' icon={{name: 'save'}} buttonStyle={{backgroundColor:'orange'}}
              onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    );
  }
  
}

