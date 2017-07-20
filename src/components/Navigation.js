import { StackNavigator, TabNavigator } from 'react-navigation';
import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';
import SalesOrderList from './SalesOrderList';
import SalesOrderItem from './SalesOrderItem';
import SalesOrderDetails from './SalesOrderDetails';

const Navigation = StackNavigator({
    PeopleList: { screen: PeopleList },
    AddPerson: { screen: AddPerson },
    CompanyList: { screen: CompanyList },
    SalesOrderList: { screen: SalesOrderList},
    SalesOrderItem: { screen: SalesOrderItem},
}, {
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: '#80cbc4',
        swipeEnabled: true,
        showLabel: true,
        style: {
            backgroundColor: '#26a69a',
        },
    },
});

export default Navigation;
