import React, { Component } from 'react';
import faker from 'faker';
import {FlatList, View, TouchableOpacity, StyleSheet} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'

const randomUsers = (count = 10) => {
  const arr = [];
  for (let i = 0; i < count; i ++) {
    arr.push({
      key: faker.random.uuid(),
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
    });
  }

  return arr;
};

export default class HomeTab extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {
    refreshing: false,
    data: randomUsers(20),
  };

  onEndReached = () => {
    this.setState(state => ({
      data: [
        ...state.data,
        ...randomUsers(),
      ]
    }));
  };

  onRefresh = () => {
    this.setState({
      data: randomUsers(20),
    });
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => {
            return (
              <ListItem title={item.name} roundAvatar avatar={{uri: item.avatar}} hideChevron={true} 
                  onPress={() => this.props.navigation.navigate('Details', {title: item.name})} />
            );
          }}
        />
        <TouchableOpacity style={styles.floatingButton}>
          <Icon name='plus' type='font-awesome' size={20} color="#01a699" onPress={() => this.props.navigation.navigate('NewScreen')} />
        </TouchableOpacity>        
      </View>        
    );
  }
}

styles = StyleSheet.create({
  floatingButton: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    height:50,
    width:50,
    position: 'absolute',                                          
    bottom: 10,                                                    
    right: 10,
    backgroundColor:'#fff',
    borderRadius:100,
  },
})