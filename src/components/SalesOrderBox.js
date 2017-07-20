import React, { Component } from 'react';
import { Text, Button, View, StyleSheet, Image, TouchableHighlight, NavigatorIOS } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import Loader from './Loader';
import { StackNavigator } from 'react-navigation';

const theme = getTheme();

const styles = StyleSheet.create({
  baseText: {
    paddingLeft: 0,
    fontFamily: 'Arial',
    fontSize: 14,
  },
  titleText: {
    paddingTop: 20,
    fontSize: 32,
    alignItems: 'center',
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: 'orangered',
    borderColor: 'orangered',
    borderWidth: 10,
    borderRadius: 10,
    padding: 3
  },
  buttonText: {
    fontSize : 14,
    fontWeight:'bold'
  },
  labelText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'darkred'
  }
});

class SalesOrderBox extends Component {
  constructor(props){
    super(props);
    this.onPress = this._onPress.bind(this);
  }
  _onPress() {
    console.log('navigating to SalesOrderItem!');
    navigate('SalesOrderItem', {});
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <TouchableHighlight
        onPress = {this._onPress}
        underlayColor='black'
        activeOpacity={0.7}>
        <View style = {styles.button}>
          <Text style={styles.labelText}> Sales Order ID: </Text>
          <Text style={styles.buttonText}>  {this.props.salesorder.salesorderid} </Text>
          <Text style={styles.labelText}> ISSI Sales Manager: </Text>
          <Text style={styles.buttonText}> {this.props.salesorder.issisalesmanager} </Text>
          <Text style={styles.labelText}> ISSI Sales Person: </Text>
          <Text style={styles.buttonText}> {this.props.salesorder.issisalesperson} </Text>
          <Text style={styles.labelText}> Bill-to Customer: </Text>
          <Text style={styles.buttonText}> {this.props.salesorder.customer} </Text>
          <Text style={styles.labelText}> End Customer:  </Text>
          <Text style={styles.buttonText}> {this.props.salesorder.endcustomer} </Text>
          <Text style={styles.labelText}> Order Status: </Text>
          <Text style={styles.buttonText}> {this.props.salesorder.orderstatus} </Text>
        </View>
      </TouchableHighlight>
    );
  }
};

export default connect(null, actions)(SalesOrderBox);
