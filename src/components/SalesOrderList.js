import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/EvilIcons';
import SalesOrderDetails from './SalesOrderDetails';
import { loadInitialSalesOrders } from '../actions';
import SalesOrderBox from './SalesOrderBox';

var sampleSalesOrderRequest = require('../reducers/sampleSalesOrderRequest.json');
console.log(sampleSalesOrderRequest);
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
        issisalesmanager: this.props.issisalesmanager,
        issisalesperson: this.props.issisalesperson,
        salesorderid: this.props.salesorderid,
        customer: this.props.customer,
        endcustomer: this.props.endcustomer,
        orderstatus: this.props.orderstatus,
        loading:false
      }
    }
    static navigationOptions = {
        tabBarLabel: 'Sales Orders List',
    }

    // componentWillMount() {
    //   this.props.loadInitialSalesOrders();
    // }

  renderInitialView() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(sampleSalesOrderRequest);

    if (this.props.detailView === true) {
      return (
        <SalesOrderDetails />
      );
    } else {
      return (
        <ListView
          enableEmptySections={true}
          dataSource={this.dataSource}
          renderRow={(rowData) =>
            <View>
              <SalesOrderBox salesorder={rowData} />
            </View>
          }
        />
      );
    }
  }
  render() {
    return (
      <View style = {styles.container}>
        {this.renderInitialView()}
        {/* <View style={styles.titleText}>
          <Text style={styles.titleText}> Sales Orders </Text>
        </View>
        <View style={styles.baseText}>
          <SalesOrderBox salesorder={this.state} />
          <Text style={styles.baseText}> ISSI Sales Manager: {this.props.issisalesmanager} </Text>
          <Text style={styles.baseText}> ISSI Sales Person: {this.props.issisalesperson} </Text>
          <Text style={styles.baseText}> Sales Order ID: {this.props.salesorderid} </Text>
          <Text style={styles.baseText}> Bill-to Customer: {this.props.customer} </Text>
          <Text style={styles.baseText}> End Customer: {this.props.endcustomer} </Text>
          <Text style={styles.baseText}> Order Status: {this.props.orderstatus} </Text>
        </View> */}
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
  const salesorders = _.map(state.salesorders, (val, uid) => {
    return { ...val, uid};
  });

  return {
    salesorders,
    detailView: state.detailView,
 };
};

export default connect(mapStateToProps, { loadInitialSalesOrders })(SalesOrderList);
