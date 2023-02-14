import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB22PORAzXml6JHas95Z2GdAC9hOoAqWfQ",
    authDomain: "netflix-clone-2-c6e99.firebaseapp.com",
    projectId: "netflix-clone-2-c6e99",
    storageBucket: "netflix-clone-2-c6e99.appspot.com",
    messagingSenderId: "251075020985",
    appId: "1:251075020985:web:d5002b52b56399ba793368"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export { auth };
  export default db;