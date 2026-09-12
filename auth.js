import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const firebaseProjectId = process.env.AUTH_FIREBASE_PROJECT_ID;
const firebaseClientEmail = process.env.AUTH_FIREBASE_CLIENT_EMAIL;
const firebasePrivateKey = process.env.AUTH_FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

let firestoreInstance;

// Safely initialize Firebase Admin to avoid duplicate app errors
if (firebaseProjectId && firebaseClientEmail && firebasePrivateKey) {
  const apps = getApps();
  const adminApp = apps.length === 0 
    ? initializeApp({
        credential: cert({
          projectId: firebaseProjectId,
          clientEmail: firebaseClientEmail,
          privateKey: firebasePrivateKey,
        }),
      })
    : apps[0];
    
  firestoreInstance = getFirestore(adminApp);
}

const firebaseAdapter = firestoreInstance ? { adapter: FirestoreAdapter(firestoreInstance) } : {};

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
  
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET, 
    }),
    // GitHub({
    //   clientId: process.env.AUTH_GITHUB_ID,
    //   clientSecret: process.env.AUTH_GITHUB_SECRET,
    // })
  ],
  
  ...firebaseAdapter,
  
  pages: {
     signIn: "/auth/login",
  },
  
  callbacks: {
    session: async ({ session }) => {
      return session;
    }
  }
});