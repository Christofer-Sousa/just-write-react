import {initializeApp} from "firebase/app"
import {getFirestore, collection} from "firebase/firestore"

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAugSldPf06bhXxXN28cnIi8q35kc5sp9A",
    authDomain: "poeminhas-react.firebaseapp.com",
    projectId: "poeminhas-react",
    storageBucket: "poeminhas-react.appspot.com",
    messagingSenderId: "732892543935",
    appId: "1:732892543935:web:6d4a8714f0687637d8bf0a"
});

const db = getFirestore(firebaseApp)
const userCollectionRef = collection(db, "cards")

export {userCollectionRef}
