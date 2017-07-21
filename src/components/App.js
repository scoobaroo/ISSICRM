import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import Login from './Login';
import Loader from './Loader';
import reducers from '../reducers/SalesOrderReducer';
import Thunk from 'redux-thunk';
import AppNavigator from '../../index.ios'
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(Thunk));

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = { loggedIn: null};

  renderInitialView() {
    switch (this.state.loggedIn) {
      case true:
        return <AppNavigator />
      case false:
        return <Login />;
      default:
        return <AppNavigator />;
    }
  }
  render() {

    return (
      <Provider store={store}>
          <View style={styles.container}>
            {this.renderInitialView()}
          </View>
      </Provider>
    );
  }
}
