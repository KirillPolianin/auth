import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends React.Component {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyALYgcohjiU_KnSAZSTJGlT25wbKO7NTNw',
			authDomain: 'auth-27119.firebaseapp.com',
			databaseURL: 'https://auth-27119.firebaseio.com',
			projectId: 'auth-27119',
			storageBucket: 'auth-27119.appspot.com',
			messagingSenderId: '983766524686'
		});
	}

	render() {
		return (
			<View>
				<Header headerText={'Auth'} />
				<LoginForm />
			</View>
		);
	}
}

export default App;
