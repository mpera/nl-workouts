import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA9iagBHOna1LdIZ0OSJz10MspsbwhLvSE",
    authDomain: "nl-workouts.firebaseapp.com",
    databaseURL: "https://nl-workouts.firebaseio.com",
    projectId: "nl-workouts",
    storageBucket: "nl-workouts.appspot.com",
    messagingSenderId: "536213752904",
    appId: "1:536213752904:web:78287dc77368227c"
})

var db = firebase.database();

export { db };