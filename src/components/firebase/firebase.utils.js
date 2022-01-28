import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
	apiKey: "AIzaSyCq64jQ6G4JsOu_JMRswvr082VSlKdCUbU",
	authDomain: "crown-db-f32e1.firebaseapp.com",
	projectId: "crown-db-f32e1",
	storageBucket: "crown-db-f32e1.appspot.com",
	messagingSenderId: "808185594936",
	appId: "1:808185594936:web:fd9e9745631d2a3a20d2cd",
	measurementId: "G-MVNMQ3N4JX"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase




