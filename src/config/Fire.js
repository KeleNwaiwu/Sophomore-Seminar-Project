import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';


const config = {
    apiKey: "AIzaSyC3IW9R-5CYJPOR3Zu2mpLEkBLacnCs9DI",
    authDomain: "budgetpal-4df30.firebaseapp.com",
    databaseURL: "https://budgetpal-4df30-default-rtdb.firebaseio.com",
    projectId: "budgetpal-4df30",
    storageBucket: "budgetpal-4df30.appspot.com",
    messagingSenderId: "1008073633304",
    appId: "1:1008073633304:web:84abd9ce1151eaca981d6d",
    measurementId: "G-N4830NCV49"
}

const fire = firebase.initializeApp(config);
export default fire;