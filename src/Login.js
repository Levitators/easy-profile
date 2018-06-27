/* global gapi */
import React, { Component } from 'react';

class Login extends Component {
  componentDidMount() {
    gapi.signin2.render('g-signin2', {
      scope: 'profile email',
      width: 200,
      height: 50,
      longtitle: true,
      theme: 'dark',
      onsuccess: this.onSignIn,
    });
  }

  onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log(`ID: ${profile.getId()}`);
    console.log(`Full Name: ${profile.getName()}`);
    console.log(`Given Name: ${profile.getGivenName()}`);
    console.log(`Family Name: ${profile.getFamilyName()}`);
    console.log(`Image URL: ${profile.getImageUrl()}`);
    console.log(`Email: ${profile.getEmail()}`);
    // The ID token you need to pass to your backend:
    const id_token = googleUser.getAuthResponse().id_token;
    console.log(`ID Token: ${id_token}`);
  }

  render() {
    return (
      <div>
        <div id="g-signin2" data-onsuccess={this.onSignIn} />
      </div>
    );
  }
}

export default Login;
