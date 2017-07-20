import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import Loader from './Loader';
import SalesOrderDetails from './SalesOrderDetails';

const ApprovalButton = MKButton.coloredButton()
  .withBackgroundColor(MKColor.Blue)
  .withText('APPROVE')
  .build();

const RejectButton = MKButton.coloredButton()
  .withText('REJECT')
  .withBackgroundColor(MKColor.Red)
  .build();


const theme = getTheme();

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    marginTop: 20
  },
  baseText: {
    fontSize : 14,
    fontWeight:'bold'
  },
  labelText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'darkred'
  }
});

class SalesOrderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  approve(){
    console.log('approved!');
  }
  reject(){
    console.log('rejected');
  }
  static navigationOptions = {
    title: 'Sales Order Item',
  };
  render(){
    return (
            <ScrollView
              contentContainerStyle={styles.container}
              onPress={() => props.selectSalesOrder(props.salesorder)}>
              <Text style={styles.labelText}> Sales Order ID</Text>
              <Text style={styles.baseText}> XXXXXX </Text>
              <ApprovalButton onPress ={this.approve} />
              <RejectButton onPress ={this.reject} />
              <SalesOrderDetails />
            </ScrollView>
    );
  }
};

export default connect(null, actions)(SalesOrderItem);
