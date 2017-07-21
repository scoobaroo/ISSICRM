import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import Loader from './Loader';
import SalesOrderDetail from './SalesOrderDetail';

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
    fontSize : 16,
    fontWeight:'bold'
  },
  labelText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'darkred'
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row'
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 35,
    width: 125
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
    console.log('rejected!');
  }
  static navigationOptions = {
    title: 'Sales Order Item',
  };
  render(){
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        // onPress={() => props.selectSalesOrder({this.props.navigation.state.params.salesorder.salesorderid})}
        >
        <Text style={styles.labelText}> Sales Order ID: </Text>
        <Text style={styles.baseText}>  {this.props.navigation.state.params.salesorder.salesorderid} </Text>
        <Text style={styles.labelText}> ISSI Sales Manager: </Text>
        <Text style={styles.baseText}> {this.props.navigation.state.params.salesorder.issisalesmanager} </Text>
        <Text style={styles.labelText}> ISSI Sales Person: </Text>
        <Text style={styles.baseText}> {this.props.navigation.state.params.salesorder.issisalesperson} </Text>
        <Text style={styles.labelText}> Bill-to Customer: </Text>
        <Text style={styles.baseText}> {this.props.navigation.state.params.salesorder.customer} </Text>
        <Text style={styles.labelText}> End Customer:  </Text>
        <Text style={styles.baseText}> {this.props.navigation.state.params.salesorder.endcustomer} </Text>
        <Text style={styles.labelText}> Order Status: </Text>
        <Text style={styles.baseText}> {this.props.navigation.state.params.salesorder.orderstatus} </Text>
        <View style={styles.buttonContainer}>
          <ApprovalButton style = {styles.button} onPress ={this.approve} />
          <RejectButton style = {styles.button} onPress ={this.reject} />
        </View>
        <SalesOrderDetail />
      </ScrollView>
  );
  }
};

// export default connect(null, actions)(SalesOrderItem);
export default SalesOrderItem;
