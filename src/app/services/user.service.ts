import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  provider;

  constructor() {
    // this.googleProvider();
  }

  googleProvider(): void {
    this.provider = new firebase.auth.GoogleAuthProvider();

    this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    this.provider.setCustomParameters({
      login_hint: 'user@example.com',
    });
  }

  googleSignInPopup(): void {
    firebase
      .auth()
      .signInWithPopup(this.provider)
      .then((result: firebase.auth.UserCredential) => {
        const credential = result.credential;
        // const token = credential.accessToken;
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
      });
  }

  googleBuildAndSignIn(id_token): void {
    // [START auth_google_build_signin]
    // Build Firebase credential with the Google ID token.
    const credential = firebase.auth.GoogleAuthProvider.credential(id_token);

    // Sign in with credential from the Google user.
    firebase
      .auth()
      .signInWithCredential(credential)
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
    // [END auth_google_build_signin]
  }

  // [START auth_google_callback]
  onSignIn(googleUser): void {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!this.isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        const credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.getAuthResponse().id_token
        );

        // Sign in with credential from the Google user.
        // [START auth_google_signin_credential]
        firebase
          .auth()
          .signInWithCredential(credential)
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
          });
        // [END auth_google_signin_credential]
      } else {
        console.log('User already signed-in Firebase.');
      }
    });
  }
  // [END auth_google_callback]

  // [START auth_google_checksameuser]
  isUserEqual(googleUser, firebaseUser): boolean {
    if (firebaseUser) {
      const providerData = firebaseUser.providerData;
      for (let i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }

  getFirebaseUser() {}
}
