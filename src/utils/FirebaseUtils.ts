import { initializeApp } from "firebase/app";
import {
    addDoc,
    collection,
    getFirestore,
    Timestamp,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_DATABASE_URL,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

export async function saveDbMessage({
    email,
    message,
}: {
    email: string;
    message: string;
}) {
    const now = Timestamp.now();
    const contactsCollection = collection(firestore, "contacts");
    return await addDoc(contactsCollection, { email, message, timestamp: now });
}
