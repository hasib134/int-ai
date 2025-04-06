import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';  // Use the Admin SDK for Auth
import { getFirestore } from 'firebase-admin/firestore';  // Use the Admin SDK for Firestore

const initFirebaseAdmin = () => {
  const apps = getApps();

  // Initialize Firebase only if not already initialized
  if (!apps.length) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')
      })
    });
  }

  return {
    auth: getAuth(),  // Admin SDK's Auth
    db: getFirestore()  // Admin SDK's Firestore
  };
};

export const { auth, db } = initFirebaseAdmin();
