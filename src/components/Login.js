import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import Loader from './Loader';
import axios from 'axios';

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
        username: '',
        password: '',
        error: '',
        loading: false,
        loggedIn: null
    };

    onButtonPress() {
        const { username, password } = this.state;
        this.setState({
            error: '',
            loading: true,
            loggedIn: false
        });
        this.onAuthSuccess();
        // let config = {
        //     headers : {
        //         "Accept" : "application/json",
        //         "Content-type" : "application/json; charset=utf-8"
        //     }
        // }
        // axios.post('https://crmdev.issi.com/XRMServices/2011/OrganizationData.svc', {
        //     username : {username},
        //     password : {password},
        // }, config)
        // .then(function (response) {
        //     console.log(response);
        //     console.log('successfully authenticated');
        //     this.onAuthSuccess();
        // })
        // .catch(function (error) {
        //     console.log('there was an error');
        //     console.log(error);
        // });
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

    render() {
        const { navigate } = this.props.navigation;
        const { form, fieldStyles, loginButtonArea, errorMessage, welcome, container } = styles;
        return (
        <View style={styles.container}>
            <View style = {{paddingBottom: 15}}>
                <Image
                    style={{width: 100, height: 70}}
                    source={require('../images/logo.png')}
                />
            </View>
            <Text style = {styles.labelText} >Login to ISSI CRM</Text>
            <MKTextField
                text={this.state.username}
                onTextChange={username => this.setState({ username })}
                textInputStyle={fieldStyles}
                placeholder={'Username...'}
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
