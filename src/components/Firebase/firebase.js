import app from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBL7MNIBq13tXRS2kzsuqS0A3kEnnCkyr0",
    authDomain: "students-hub-43906.firebaseapp.com",
    projectId: "students-hub-43906",
    storageBucket: "students-hub-43906.appspot.com",
    messagingSenderId: "1017369401673",
    appId: "1:1017369401673:web:7431f28c1076b9cd4ba298",
    measurementId: "G-X7GXSH3QJV"
  };

  class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);

      this.auth = app.auth();
    }
      //SignUp API
      doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    //SignIn API
    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
    
    //SignOut
    doSignOut = () => this.auth.signOut();

    //Reset Password
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    //Change Password
    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
  }
   
  export default Firebase;