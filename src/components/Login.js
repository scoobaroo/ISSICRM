import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import Loader from './Loader';
import Auth0 from 'react-native-auth0';
import credentials from './auth0-credentials';
const LoginButton = MKButton.coloredButton()
    .withText('LOGIN')
    .build();

const styles = StyleSheet.create({
    form: {
        paddingBottom: 10,
        width: 200,
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Orange,
        width: 200,
    },
    loginButtonArea: {
        marginTop: 20,
    },
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
},
errorMessage: {
    marginTop: 15,
    fontSize: 15,
    color: 'red',
    alignSelf: 'center'
},
labelText :{
    fontSize : 24,
    paddingBottom: 20
}
});

export default class Login extends Component {
    constructor(props){
        super(props);
    }
    state = {
        email: '',
        password: '',
        error: '',
        loading: false,
        loggedIn: null
    };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({
            email: email.toString(),
            password: password.toString(),
            error: '',
            loading: true,
            loggedIn: false
        });
        console.log('Logins navigationOptions');
        console.log(Login.navigationOptions);
        this.onAuthSuccess();
        const auth0 = new Auth0({ domain: 'issicrm.auth0.com', clientId: '6ZiWpn7DbTHVzjtO071y82O2ktagE1h4' });
        // auth0
        //     .auth
        //     .passwordRealm({username: {email}, password: {password}, realm: "urn:auth0:issicrm"})
        //     .then(authResult =>
        //         console.log(authResult)
        //     )
        //     .catch(error =>
        //         console.error(error)
        //     )
    }

    onAuthSuccess() {
        const { navigate } = this.props.navigation;
        this.setState({
            loading: false,
            loggedIn: true
        });
        this.props.updateAppState({loggedIn: true});
        console.log(this.props.navigation);
        navigate('SalesOrderList', {updateAppState: this.props.updateAppState});
    }

    onAuthFailed() {
        this.setState({
            error: 'Authentication Failed',
            loading: false,
            loggedIn: false
        });
        this.props.updateAppState({loggedIn: false});
        this.props.navigation.navigate('App');
    }

    static navigationOptions = { header: null, };

    render() {
        const { navigate } = this.props.navigation;
        const { form, fieldStyles, loginButtonArea, errorMessage, welcome, container } = styles;
        return (
        <View style={styles.container}>
            <Text style = {styles.labelText} >Login to ISSI CRM</Text>
            <MKTextField
                text={this.state.email}
                onTextChange={email => this.setState({ email })}
                textInputStyle={fieldStyles}
                placeholder={'Email...'}
                tintColor={MKColor.Teal}
            />
            <MKTextField
                text={this.state.password}
                onTextChange={password => this.setState({ password })}
                textInputStyle={fieldStyles}
                placeholder={'Password...'}
                tintColor={MKColor.Teal}
                password={true}
            />
            <Text style={errorMessage}>
                {this.state.error}
            </Text>
            <View style={loginButtonArea}>
                <LoginButton onPress={this.onButtonPress.bind(this)} />
            </View>
        </View>
        );
    }
}
