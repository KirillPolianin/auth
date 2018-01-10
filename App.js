import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner, CardSection } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends React.Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyALYgcohjiU_KnSAZSTJGlT25wbKO7NTNw',
      authDomain: 'auth-27119.firebaseapp.com',
      databaseURL: 'https://auth-27119.firebaseio.com',
      projectId: 'auth-27119',
      storageBucket: 'auth-27119.appspot.com',
      messagingSenderId: '983766524686'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View flexDirection="row">
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Auth'} />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
