// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAvxkvj9bqUVdgFKGq4V1M1uDcQd9sTD8o',
	authDomain: 'nawah-35333.firebaseapp.com',
	projectId: 'nawah-35333',
	storageBucket: 'nawah-35333.firebasestorage.app',
	messagingSenderId: '222165457966',
	appId: '1:222165457966:web:2e64c9842250d1aa5193bf'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it
export const db = getFirestore(app);

// Import and initialize Firebase Authentication
export const auth = getAuth(app);
