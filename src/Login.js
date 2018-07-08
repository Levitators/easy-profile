import React, { Component } from 'react';

class Login extends Component {
  componentDidMount() {
    this._loadGoogleAuthASync()
    this._loadSdkAsynchronously()
  }

  _loadGoogleAuthASync = () => {
    ((d, s, id, cb) => {
      const element = d.getElementsByTagName(s)[0]
      const fjs = element
      let js = element
      js = d.createElement(s)
      js.id = id
      js.src = 'https://apis.google.com/js/platform.js'
      if (fjs && fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs)
      } else {
        d.head.appendChild(js)
      }
      js.onload = cb
    })(document, 'script', 'google-login', () => {
      window.gapi.signin2.render('g-signin2', {
        scope: 'profile email',
        width: 255,
        height: 45,
        longtitle: true,
        theme: 'dark',
        onsuccess: this._googleSigninHandler
      });
    })
  }


  _loadSdkAsynchronously = () => {
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.0&appId=FACEBOOKAPPID&autoLogAppEvents=1';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    new Promise((resolve, _) => {
      window.fbAsyncInit = resolve(
        window.FB.init({
          appId: 'FACEBOOKAPPID',
          status: true,
          xfbml: true,
          version: 'v3.0'
        }));
    }).then(() => {
      window.FB.getLoginStatus((response) => {
        this._facebookSigninHandler(response)
      })
      window.FB.Event.subscribe('auth.statusChange', this._facebookSigninHandler);
    });
  }


  _facebookSigninHandler({ authResponse, status }) {
    if (status === 'connected') {
      // TODO Pass the token to backend server through raphql mutation
      console.log(`Access Token: ${authResponse.accessToken}`);
    }
  }


  _googleSigninHandler(googleUser) {
    // TODO Pass the token to backend server through raphql mutation
    const id_token = googleUser.getAuthResponse().id_token;
    console.log(`ID Token: ${id_token}`);
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eaeaff'
      }}>
        <div id="g-signin2" s
          tyle={{ marginBottom: '2%' }}
          dataOnSuccess={this._googleSigninHandler}
        />
        <div class="fb-login-button"
          data-max-rows="1"
          data-size="large"
          data-button-type="continue_with"
          data-show-faces="false"
          data-auto-logout-link="false"
          data-use-continue-as="false"
        />
      </div>
    );
  }
}

export default Login;
