import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBw9P_qLwHgCh_NbkN5j9b6tmtVxpP9Rsc",
    authDomain: "crwn-db-63786.firebaseapp.com",
    databaseURL: "https://crwn-db-63786.firebaseio.com",
    projectId: "crwn-db-63786",
    storageBucket: "crwn-db-63786.appspot.com",
    messagingSenderId: "68058899564",
    appId: "1:68058899564:web:c3f7e2d47d170f9b606449",
    measurementId: "G-GVRCDJZNNG"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;



