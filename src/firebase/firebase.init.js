
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDz0aEEk7xMTjtz6PN03CEg2S3AA3BHriM',
  authDomain: 'q-bistro-boos.firebaseapp.com',
  projectId: 'q-bistro-boos',
  storageBucket: 'q-bistro-boos.firebasestorage.app',
  messagingSenderId: '364751195660',
  appId: '1:364751195660:web:e5aee266c88a0f7a7b2829',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

