import React from 'react';
import { View, Text} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import SignInScreen from './components/member/SignInScreen';
import AuthLoadingScreen from './components/member/AuthLoadingScreen';

import HomeTab from './components/HomeTab';
import HomeInputScreen from './components/HomeInputScreen';
import SettingsTab from './components/SettingsTab';
import ModalScreen from './components/ModalScreen';

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Details Screen'),
    };
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

const defaultNavigationOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#3F51B5',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
};

const HomeStack = createStackNavigator({
  Home: { screen: HomeTab },
  Details: { screen: DetailsScreen },
  HomeInput: {screen: HomeInputScreen},
}, defaultNavigationOptions);

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsTab },
  Details: { screen: DetailsScreen },
}, defaultNavigationOptions);

const AuthStack = createStackNavigator({ SignIn: SignInScreen },{
  headerMode: 'none',
});

const TabStack = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
  }, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'Settings') {
          iconName = `cog`; 
        }

        return <Icon name={iconName} size={30}  color={tintColor}/>
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'black',
      inactiveTintColor: 'lightgray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);

const ModalStack = createStackNavigator({
  Main: {screen: TabStack },
  NewScreen: {screen: ModalScreen },
},{
  mode: 'modal',
  headerMode: 'none',
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: ModalStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

