import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB0ns3D1IL9KKwIHqMfGRsOT1sLVVwW5aM',
  authDomain: 'work-from-roam.firebaseapp.com',
  projectId: 'work-from-roam',
  storageBucket: 'work-from-roam.appspot.com',
  messagingSenderId: '557150824247',
  appId: '1:557150824247:web:d1039c98226ce543b69cb2',
  measurementId: 'G-NEQR59RYHK'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { auth };
