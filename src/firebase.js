// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBlUQakWLxWqs6-MTwaQ3vEIcPeKISOBL0",
    authDomain: "clone-fb79b.firebaseapp.com",
    projectId: "clone-fb79b",
    storageBucket: "clone-fb79b.appspot.com",
    messagingSenderId: "72117507667",
    appId: "1:72117507667:web:21dffa888f7f813d5118a6",
    measurementId: "G-F2RD1YBJWQ"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();


  export {db,auth};