import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, NavigatorIOS } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/EvilIcons';
import SalesOrderDetails from './SalesOrderDetails';
import { loadInitialSalesOrders } from '../actions';
import SalesOrderBox from './SalesOrderBox';
import { StackNavigator } from 'react-navigation';

var sampleSalesOrderRequest = require('../reducers/sampleSalesOrderRequest.json');
console.log(sampleSalesOrderRequest);
sampleSalesOrderRequest.map((order)=>{
  order.issisalesmanager = order.am_SalesManager.Name;
  order.issisalesperson = order.am_ISSISalesPerson.Name;
  order.salesorderid = order.SalesOrderId;
  order.customer = order.CustomerId.Name;
  order.endcustomer = order.am_EndCustomer.Name;
  order.orderstatus = order.am_OrderStatus.Value;
  return order
});
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
  }
});
class SalesOrderList extends Component {
  constructor(props){
    super(props);
    this.state= {
      sampleSalesOrderRequest,
      // issisalesmanager: this.props.issisalesmanager,
      // issisalesperson: this.props.issisalesperson,
      // salesorderid: this.props.salesorderid,
      // customer: this.props.customer,
      // endcustomer: this.props.endcustomer,
      // orderstatus: this.props.orderstatus,
      loading:false
    }
  }

  static navigationOptions = {
      title: 'Sales Orders',
  }

    // componentWillMount() {
    //   this.props.loadInitialSalesOrders();
    // }

  renderInitialView() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(sampleSalesOrderRequest);
    return (
        <ListView
          enableEmptySections={true}
          dataSource={this.dataSource}
          renderRow={
            (rowData) =>
              <SalesOrderBox
                navigation={this.props.navigation}
                salesorder={rowData} />
          }
        />
      );
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {styles.container}>
        {this.renderInitialView()}
      </View>
    );
  }
}

SalesOrderList.defaultProps = {
  issisalesmanager: sampleSalesOrderRequest[0].am_SalesManager.Name,
  issisalesperson: sampleSalesOrderRequest[0].am_ISSISalesPerson.Name,
  salesorderid: sampleSalesOrderRequest[0].SalesOrderId,
  customer: sampleSalesOrderRequest[0].CustomerId.Name,
  endcustomer: sampleSalesOrderRequest[0].am_EndCustomer.Name,
  orderstatus: sampleSalesOrderRequest[0].am_OrderStatus.Value
}


const mapStateToProps = state => {
  const salesorders = _.map(state.sampleSalesOrderRequest, (val, uid) => {
    return { ...val, uid};
  });

  return {
    sampleSalesOrderRequest,
    detailView: state.detailView,
 };
};

export default connect(mapStateToProps)(SalesOrderList);
