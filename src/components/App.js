import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect, Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import Login from './Login';
import Loader from './Loader';
import reducers from '../reducers/SalesOrderReducer';
import Thunk from 'redux-thunk';
import AppNavigator from '../../index.ios';
import { StackNavigator, NavigationActions } from 'react-navigation';
import { createLogger } from 'redux-logger';
import SalesOrderList from './SalesOrderList';
import SalesOrderItem from './SalesOrderItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

// let initialNavState = AppNavigator.router.getStateForAction(
//   NavigationActions.init()
// );

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(Thunk));

console.log(store.getState());

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = { loggedIn: null};

  renderView() {
    switch (this.refs.Login.state.loggedIn) {
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
          {this.renderView()}
        </View>
      </Provider>
    );
  }
}

export default connect()(App);
