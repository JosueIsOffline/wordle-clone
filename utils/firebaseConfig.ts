import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'


// Initialize Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB33yCtglnK1gta98BgXjhfpsxuOOMAa_U",
    authDomain: "wordle-clone-47293.firebaseapp.com",
    projectId: "wordle-clone-47293",
    storageBucket: "wordle-clone-47293.appspot.com",
    messagingSenderId: "642534503866",
    appId: "1:642534503866:web:3a39d699206cda42621983"
  };

const app = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(app);