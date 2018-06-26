import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
    apiKey: "AIzaSyByHAPE_bJIKfgeW8nxVj7AdC62skg0_Kw",
    authDomain: "equity-prod.firebaseapp.com",
    databaseURL: "https://equity-prod.firebaseio.com",
    projectId: "equity-prod",
    storageBucket: "equity-prod.appspot.com",
    messagingSenderId: "282912310233"
};

const devConfig = {
    apiKey: "AIzaSyAOpzMwglGn6r37YKpBeIq_QM5UAj1a5Fg",
    authDomain: "equity1beta.firebaseapp.com",
    databaseURL: "https://equity1beta.firebaseio.com",
    projectId: "equity1beta",
    storageBucket: "equity1beta.appspot.com",
    messagingSenderId: "958720201321"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
