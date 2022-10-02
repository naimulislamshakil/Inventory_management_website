// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBTrWDro7JTFUwtZUv4P3eFWtDHpHHlbTw',
	authDomain: 'kanakata-front-end.firebaseapp.com',
	projectId: 'kanakata-front-end',
	storageBucket: 'kanakata-front-end.appspot.com',
	messagingSenderId: '434674606350',
	appId: '1:434674606350:web:7f8ea69e73a7615d9ef75f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
