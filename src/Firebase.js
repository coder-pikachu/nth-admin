import * as firebase from 'firebase'

const settings = {
    timestampsInSnapshots: true
};

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDXpoh4dPykua4M_Tu9EQ3GdW7eVjUMWHE",
    authDomain: "puzzles-project.firebaseapp.com",
    databaseURL: "https://puzzles-project.firebaseio.com",
    projectId: "puzzles-project",
    storageBucket: "puzzles-project.appspot.com",
    messagingSenderId: "75467181993"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings)

export default firebase