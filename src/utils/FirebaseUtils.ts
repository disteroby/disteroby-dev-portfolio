import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import {
    addDoc,
    collection,
    Firestore,
    getFirestore,
    Timestamp,
} from "firebase/firestore/lite";

/**
 * Firebase configuration data.
 * @type {FirebaseOptions}
 */
const firebaseConfig: FirebaseOptions = {
    apiKey: import.meta.env.VITE_API_KEY ?? "",
    authDomain: import.meta.env.VITE_AUTH_DOMAIN ?? "",
    databaseURL: import.meta.env.VITE_DATABASE_URL ?? "",
    projectId: import.meta.env.VITE_PROJECT_ID ?? "",
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET ?? "",
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID ?? "",
    appId: import.meta.env.VITE_APP_ID ?? "",
};

/**
 * The initialized Firebase App with the provided configuration.
 * @type {FirebaseApp}
 */
let firebaseApp: FirebaseApp | null = null;

/**
 * The initialized Firestore Database with the provided configuration.
 * @type {Firestore}
 */
let firestore: Firestore | null = null;

/**
 * Initializes Firebase with the provided configuration, if it has not been initialized already.
 */
function initFirebase() {
    if (firebaseApp === null || firestore === null) {
        firebaseApp = initializeApp(firebaseConfig);
        firestore = getFirestore(firebaseApp);
    }
}

/**
 * Saves a message to the Firestore database under the 'contacts' collection.
 * @param {string} email - The email associated with the message.
 * @param {string} message - The message content.
 * @returns {Promise<boolean>} A promise that resolves with a boolean indicating the success of the save operation.
 */
export async function saveDbMessage(
    email: string,
    message: string,
): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    initFirebase();

    if (firestore === null) {
        return false;
    }

    try {
        const now = Timestamp.now();
        const contactsCollection = collection(firestore, "contacts");

        await addDoc(contactsCollection, { email, message, timestamp: now });
        return true;
    } catch (error) {
        console.error("Error saving message to database:", error);
        return false;
    }
}
