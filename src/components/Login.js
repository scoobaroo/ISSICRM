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
      loggedIn: null
  };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({
        email: {email},
        password: {password},
        error: '',
        loading: true,
        loggedIn: false
    });
    var webAuth = new auth0.WebAuth({
      domain:       'issicrm.auth0.com',
      clientID:     '6ZiWpn7DbTHVzjtO071y82O2ktagE1h4'
    });
    webAuth.client.login({
      realm: 'crm',
      username: {email},
      password: {password},
      // scope: 'openid profile',
      // audience: 'urn:test'
    }, function(err, authResult) {
      if (authResult) {
        // Save the tokens from the authResult in local storage or a cookie
        alert("logged in!!");
        console.log(authResult);
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        this.onAuthSuccess();
      } else if (err) {
        console.log(err);
        this.onAuthFailed();
      }
    });
  }

  onAuthSuccess() {
      this.setState({
        email: '',
        password: '',
        error: '',
        loading: false,
        loggedIn: true
      });
  }

  onAuthFailed() {
      this.setState({
          error: 'Authentication Failed',
          loading: false,
          loggedIn: false
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
