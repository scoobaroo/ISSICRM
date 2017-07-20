import {
  AppRegistry,
} from 'react-native';
import App from './src/components/App';
import { StackNavigator } from 'react-navigation';
import SalesOrderList from './src/components/SalesOrderList';
import SalesOrderItem from './src/components/SalesOrderItem';

const AppNavigator = StackNavigator({
  SalesOrderList : { screen: SalesOrderList },
  SalesOrderItem : { screen: SalesOrderItem }
});

AppRegistry.registerComponent('issicrm', () => AppNavigator);

export default AppNavigator;
