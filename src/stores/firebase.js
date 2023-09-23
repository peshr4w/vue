import { initializeApp } from 'firebase/app';
import { getFirestore collection } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDFBqzzg8rSz4XjTCURBN8RX7-EjRE71_8",
    authDomain: "firbasevue-717a3.firebaseapp.com",
    projectId: "firbasevue-717a3",
    storageBucket: "firbasevue-717a3.appspot.com",
    messagingSenderId: "378403902494",
    appId: "1:378403902494:web:447bacc6e9c31a05ceca0f",
    measurementId: "G-0M9EP0LBK0"
}
initializeApp(firebaseConfig);
const db = getFirestore();

export const colRef = collection(db, 'books')