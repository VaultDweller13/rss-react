import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: 'backlog-app-e2faa.firebaseapp.com',
  projectId: 'backlog-app-e2faa',
  storageBucket: 'backlog-app-e2faa.appspot.com',
  messagingSenderId: '672316513345',
  appId: '1:672316513345:web:fa1d42937bcba7a7b9fac0',
};

initializeApp(firebaseConfig);
const auth = getAuth();

export const createUser = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
  }
};

export const logIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
  }
};

export const logOut = async () => {
  try {
    signOut(auth);
  } catch (error) {
    console.error(error);
  }
};
