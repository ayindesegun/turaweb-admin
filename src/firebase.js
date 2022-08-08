import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "tura-9baed.firebaseapp.com",
    projectId: "tura-9baed",
    storageBucket: "tura-9baed.appspot.com",
    messagingSenderId: "222518013983",
    appId: "1:222518013983:web:95a13796b1dd85f0d0652a",
    measurementId: "G-QCZ6MRTGQY"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth()
export const storage = getStorage(app)
