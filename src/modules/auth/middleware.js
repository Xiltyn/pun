import AuthActions from './actions';
import { auth, firebaseLogin, firebaseLogout } from "../../shared/firebase.config";
import { logger } from "../../utils/consoleLogger";

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
		if ( credentials ) {
			logger( 'credentials for firebase :: ', 'info',
				{ email: credentials.email, password: credentials.password } )

			auth.signInWithEmailAndPassword( credentials.email, credentials.password ).then( ( res ) => {
				dispatch( AuthActions.signinSuccessful( res ) );
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
					AuthMiddleware.ensureAuthenticated( dispatch, user );
				}
				else {
					console.log( 'not logged in ' );
					dispatch( AuthActions.isLoggedInFailure() );
				}
			} );

		};
	}

	// ensureAuthenticated
	static ensureAuthenticated( dispatch, user ) {
		if ( user ) {
			console.log( 'authentication successfull ' );
			dispatch( AuthActions.isLoggedInSuccess( user ) );
		}
		else {
			// never gonna happen
			console.log( 'authentication error ' );
			dispatch( AuthActions.signinRejected( 'no user info retrieved' ) );
		}
	}
}
