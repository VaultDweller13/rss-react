import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: 'backlog-app-e2faa.firebaseapp.com',
  projectId: 'backlog-app-e2faa',
  storageBucket: 'backlog-app-e2faa.appspot.com',
  messagingSenderId: '672316513345',
  appId: '1:672316513345:web:fa1d42937bcba7a7b9fac0',
};

const app = initializeApp(firebaseConfig);
