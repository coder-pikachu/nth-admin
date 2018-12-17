import * as firebase from 'firebase'

const settings = {
    timestampsInSnapshots: true
};

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDJQCQnGF27nDsT3XIFkiCEEnT_QO_nddY",
    authDomain: "horcrux-nth.firebaseapp.com",
    databaseURL: "https://horcrux-nth.firebaseio.com",
    projectId: "horcrux-nth",
    storageBucket: "horcrux-nth.appspot.com",
    messagingSenderId: "81848626038"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings)

export default firebase