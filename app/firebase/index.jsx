import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAwhVc2xm2sVPJJ5WwzYB_5xY4zVsBU_sk",
    authDomain: "social-tech-app.firebaseapp.com",
    databaseURL: "https://social-tech-app.firebaseio.com",
    projectId: "social-tech-app",
    storageBucket: "social-tech-app.appspot.com",
    messagingSenderId: "1063863987369"
  };
} catch(e) {
  console.error("Firebase error occured:", e);
}
firebase.initializeApp(config);

export var firebaseRef = firebase.database().ref();

export default firebase;
