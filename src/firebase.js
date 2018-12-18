import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCdHxTjIsdVy2UA5akuJwXdk9pZPx9ewis",
  authDomain: "itemmap-app.firebaseapp.com",
  databaseURL: "https://itemmap-app.firebaseio.com",
  projectId: "itemmap-app",
  storageBucket: "itemmap-app.appspot.com",
  messagingSenderId: "1000990563122"
};
firebase.initializeApp(config);

export {
  firebase
}
