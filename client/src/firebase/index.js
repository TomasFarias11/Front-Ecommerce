import firebase from "firebase/compat/app";

import 'firebase/compat/firestore' // la base de datos practicamente
import "firebase/compat/auth" // carpeta de auntenticasion <---- ;) ;) 

// FIREBASE HIZO UNA ACTUALIZACION POR LO TANTO HAY NUEVAS MANERAS DE USARLO PERO SIN EMBARGO
// EN LAS CARPETAS COMPAT TIENE LOS METODOS DE LA VERSION PASADA!
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBdPzIjaOefpuoYDyDlQhoepDHgxZ9s1I",
    authDomain: "igroup-6.firebaseapp.com",
    projectId: "igroup-6",
    storageBucket: "igroup-6.appspot.com",
    messagingSenderId: "238360141998",
    appId: "1:238360141998:web:b342571ea851cb07854d3f",
    measurementId: "G-GJHBC36J24"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore() 
const googleAuthProvider = new firebase.auth.GoogleAuthProvider() 

export { firebase , db , googleAuthProvider }