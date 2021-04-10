
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDtVRnaBSspwV_3KWzu4NYUo-lHH8Q0FX0",
    authDomain: "social-website-30047.firebaseapp.com",
    databaseURL: "https://social-website-30047-default-rtdb.firebaseio.com",
    projectId: "social-website-30047",
    storageBucket: "social-website-30047.appspot.com",
    messagingSenderId: "303314070410",
    appId: "1:303314070410:web:4a639b729ae7b262ecb673"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
    });
}
