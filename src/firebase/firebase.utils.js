import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyATFZZF5UoLTuLg3Qca2p_FScOJbLbDlew",
    authDomain: "clotshop-db.firebaseapp.com",
    databaseURL: "https://clotshop-db.firebaseio.com",
    projectId: "clotshop-db",
    storageBucket: "clotshop-db.appspot.com",
    messagingSenderId: "599489370048",
    appId: "1:599489370048:web:7afd37ce46878918db5a25",
    measurementId: "G-PV73V1L9KB"
}

export const createUserProfileDocument = async (userAuth, additinalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additinalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;