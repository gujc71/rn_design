import React from 'react';
import {AsyncStorage, Image, StyleSheet, View} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    const navigation = this.props.navigation;
    setTimeout(function() {
      navigation.navigate(userToken ? 'App' : 'Auth');
    }, 1000);
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../images/splash.png')} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },  
} ); 