  import {
    AppRegistry,
  } from 'react-native';
  import App from './src/components/App';
  import { StackNavigator } from 'react-navigation';
  import SalesOrderList from './src/components/SalesOrderList';
  import SalesOrderItem from './src/components/SalesOrderItem';

  const routeConfiguration = {
    SalesOrderList : { screen: SalesOrderList },
    SalesOrderItem : { screen: SalesOrderItem }
  };
  const stackNavigatorConfiguration = {
    initialRouteName: 'SalesOrderList'
  }

  export const AppNavigator = StackNavigator(routeConfiguration,stackNavigatorConfiguration)

  AppRegistry.registerComponent('issicrm', () => AppNavigator);


