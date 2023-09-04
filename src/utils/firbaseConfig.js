import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Initialize Firebase
const app = initializeApp({
    apiKey: "AIzaSyBwAKGsPKX8S-WT86IoGpzxkPk1Flck7RY",
    authDomain: "reduximages-1cc66.firebaseapp.com",
    projectId: "reduximages-1cc66",
    storageBucket: "reduximages-1cc66.appspot.com",
    messagingSenderId: "566158115846",
    appId: "1:566158115846:web:03b12b9c3b88985d4f6f87"
});
// Firebase storage reference
const storage = getStorage(app);
export default storage;
