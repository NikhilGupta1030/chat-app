import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyAfzqQLTTaXKF1_8tzx0LDvp4RaKCtI1us',
  authDomain: 'chat-web-app-6aea3.firebaseapp.com',
  databaseURL:
    'https://chat-web-app-6aea3-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-web-app-6aea3',
  storageBucket: 'chat-web-app-6aea3.appspot.com',
  messagingSenderId: '988300422009',
  appId: '1:988300422009:web:4f5cd1b3e46b7f01f65da8',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
