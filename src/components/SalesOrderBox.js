import React, { Component } from 'react';
import { Text, Button, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import Loader from './Loader';

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
    fontWeight: 'bold'
  }
});

class SalesOrderBox extends Component {
  constructor(props){
    super(props);
    this.state={
      issisalesmanager: this.props.issisalesmanager,
      issisalesperson: this.props.issisalesperson,
      salesorderid: this.props.salesorderid,
      customer: this.props.customer,
      endcustomer: this.props.endcustomer,
      orderstatus: this.props.orderstatus,
    }
  }
  render() {
    return (
      <TouchableHighlight
        underlayColor='black'
        activeOpacity={0.7}>
        <View style = {styles.button}>
          <Text style={styles.buttonText}> ISSI Sales Manager: {this.state.salesorder.issisalesmanager} </Text>
          <Text style={styles.buttonText}> ISSI Sales Person: {this.state.salesorder.issisalesperson} </Text>
          <Text style={styles.buttonText}> Sales Order ID: {this.state.salesorder.salesorderid} </Text>
          <Text style={styles.buttonText}> Bill-to Customer: {this.state.salesorder.customer} </Text>
          <Text style={styles.buttonText}> End Customer: {this.state.salesorder.endcustomer} </Text>
          <Text style={styles.buttonText}> Order Status: {this.state.salesorder.orderstatus} </Text>
        </View>
      </TouchableHighlight>
    );
  }
};

export default connect(null, actions)(SalesOrderBox);
