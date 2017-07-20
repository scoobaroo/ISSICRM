import React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import Loader from './Loader';

const ApprovalButton = MKButton.coloredButton()
  .withBackgroundColor(MKColor.Teal)
  .withText('APPROVE')
  .build();

const RejectButton = MKButton.coloredButton()
  .withText('REJECT')
  .withBackgroundColor(MKColor.Red)
  .build();


const theme = getTheme();

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
  },
  title: {
      top: 20,
      left: 80,
      fontSize: 24,
  },
  image: {
      height: 100,
  },
  action: {
      backgroundColor: 'black',
      color: 'white',
  },
  icon: {
      position: 'absolute',
      top: 15,
      left: 0,
      color: 'white',
      backgroundColor: 'rgba(255,255,255,0)',
  },
});

const SalesOrderItem = (props) => {
    return (
        <ScrollView
            onPress={() => props.selectSalesOrder(props.salesorder)}
        >
            <ApprovalButton onPress = {approve} />
            <RejectButton onPress = {reject} />
            <SalesOrderDetails salesorderid={props.salesorder.salerorderid} />
        </ScrollView>
    );
};

export default connect(null, actions)(SalesOrderItem);
