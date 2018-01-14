import LocalStorageManager from 'utils/LocalStorageManager';
import AuthActions from './actions';
import { auth, firebaseLogin, firebaseLogout } from "../../shared/firebase.config";

export default class AuthMiddleware {

	// Signin Functions Starts
	static signin( credentials ) {
		console.log( 'test ', credentials );
		return ( dispatch ) => {
			dispatch( AuthActions.signin() );
			AuthMiddleware.signinWithUserCredentials( dispatch, credentials );
		};
	}

	static signinWithUserCredentials( dispatch, credentials ) {
		// fake login
		if ( credentials ) {
			console.log( 'credentials for firebase :: ', credentials.email, credentials.password)

			auth.signInWithEmailAndPassword( credentials.email, credentials.password ).then( ( res ) => {
				dispatch( AuthActions.signinSuccessful( res.data ) );
			} ).catch( ( err ) => {
				console.log( err )
				dispatch( AuthActions.signinRejected( err.message ) )
			} );
		}
	}

	// Signin Functions Ends

	// Logout Functions Starts
	static logout() {
		return ( dispatch ) => {
			dispatch( AuthActions.logout() );
			AuthMiddleware.logoutFromAPI( dispatch );
		};
	}

	static logoutFromAPI( dispatch ) {
		//LocalStorageManager.removeUserToken();
		//LocalStorageManager.clearLocalStorage();
		auth.signOut().then( ( res ) => {
			dispatch( AuthActions.logoutSuccessful() );
		} ).catch( ( err ) => {

		} );
	}

	// Logout Functions Ends

	// isLoggedIn
	static isLoggedIn() {
		return ( dispatch ) => {
			auth.onAuthStateChanged( ( user ) => {
				if ( user ) {
					AuthMiddleware.ensureAuthenticated( dispatch, user.email );
				}
				else {
					console.log( 'not logged in ' );
					dispatch( AuthActions.isLoggedInFailure() );
				}
			} );

		};
	}

	// ensureAuthenticated
	static ensureAuthenticated( dispatch, email ) {
		if ( email ) {
			console.log( 'authentication successfull ' );
			dispatch( AuthActions.isLoggedInSuccess() );
		}
		else {
			// never gonna happen
			console.log( 'authentication error ' );
			dispatch( AuthActions.signinRejected( 'no user info retrieved' ) );
		}
	}
}
