import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyCs88Od4QAxANwxYEGedhpJR_XkrMaQ-ic",
	authDomain: "punishers-32850.firebaseapp.com",
	databaseURL: "https://punishers-32850.firebaseio.com",
	projectId: "punishers-32850",
	storageBucket: "punishers-32850.appspot.com",
	messagingSenderId: "825817497866"
};

const Firebase = firebase.initializeApp( config );

export const auth = firebase.auth();
