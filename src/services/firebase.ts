import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Read configuration from the window.process shim or environment variables
const firebaseConfig = {
  apiKey: window.process?.env?.FIREBASE_API_KEY || process.env.FIREBASE_API_KEY,
  authDomain: window.process?.env?.FIREBASE_AUTH_DOMAIN || process.env.FIREBASE_AUTH_DOMAIN,
  projectId: window.process?.env?.FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID,
  storageBucket: window.process?.env?.FIREBASE_STORAGE_BUCKET || process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: window.process?.env?.FIREBASE_MESSAGING_SENDER_ID || process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: window.process?.env?.FIREBASE_APP_ID || process.env.FIREBASE_APP_ID
};

// Initialize Firebase only if config is present to avoid crashes during setup
let app;
let db;

try {
  if (firebaseConfig.apiKey) {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log("Firebase initialized successfully");
  } else {
    console.warn("Firebase config missing. Check index.html or environment variables.");
  }
} catch (e) {
  console.error("Error initializing Firebase:", e);
}

export { db };
