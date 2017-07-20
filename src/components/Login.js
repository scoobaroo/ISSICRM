/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import Loader from './Loader';

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
});

export default class Login extends Component {
  state = {
      email: '',
      password: '',
      error: '',
      loading: false,
  };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({error: '', loading: true});
    var webAuth = new auth0.WebAuth({
      domain:       'issicrm.auth0.com',
      clientID:     '6ZiWpn7DbTHVzjtO071y82O2ktagE1h4'
    });
    webAuth.client.login({
      realm: 'CRM',
      username: {email},
      password: {password},
      // scope: 'openid profile',
      // audience: 'urn:test'
    }, function(err, authResult) {
      if (authResult) {
        // Save the tokens from the authResult in local storage or a cookie
        console.log(authResult);
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
      } else if (err) {
        // Handle errors
        console.log(err);
      }
    });
  }

  onAuthSuccess() {
      this.setState({
        email: '',
        password: '',
        error: '',
        loading: false,
      });
  }

  onAuthFailed() {
      this.setState({
          error: 'Authentication Failed',
          loading: false,
      });
  }

  render() {
    const { form, fieldStyles, loginButtonArea, errorMessage, welcome, container } = styles;
    return (
      <View style={form}>
        <Text>Login to ISSI CRM</Text>
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
