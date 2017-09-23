import firebase from 'firebase';
import secrets from 'secrets.json';

const config = {
  apiKey: secrets.apiKey,
  authDomain: secrets.authDomain,
  projectId: secrets.projectId,
  storageBucket: secrets.storageBucket,
  messagingSenderId: secrets.messagingSenderId
};

firebase.initializeApp(config);
