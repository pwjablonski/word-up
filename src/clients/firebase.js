import Cookies from "js-cookie";
import get from "lodash/get";
import once from "lodash/once";
import isNil from "lodash/isNil";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import config from "../config";

const VALID_SESSION_UID_COOKIE = "firebaseAuth.validSessionUid";
const SESSION_TTL_MS = 5 * 60 * 1000;

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

function buildFirebase(appName = undefined) {
  const app = firebase.initializeApp(
    {
      apiKey: config.firebaseApiKey,
      authDomain: `${config.firebaseApp}.firebaseapp.com`,
      databaseURL: `https://${config.firebaseApp}.firebaseio.com`,
      projectId: "word-up-dev"
    },
    appName
  );

  return {
    auth: firebase.auth(app),

    loadDatabase: once(async () => {
      return firebase.firestore();
    })
  };
}

export const { auth, loadDatabase } = buildFirebase();

async function signInWithGoogle() {
  return auth.signInWithPopup(googleAuthProvider);
}

export async function signIn(provider) {
  const originalOnerror = window.onerror;
  window.onerror = message => message.toLowerCase().includes("network error");
  try {
    const userCredential = await signInWithGoogle();
    return userCredential;
  } finally {
    setTimeout(() => {
      window.onerror = originalOnerror;
    });
  }
}

export function setSessionUid() {
  const uid = get(auth, "currentUser.uid");
  if (!isNil(uid)) {
    Cookies.set(VALID_SESSION_UID_COOKIE, uid, {
      expires: new Date(Date.now() + SESSION_TTL_MS)
    });
  }
}

export function startSessionHeartbeat() {
  setInterval(setSessionUid, 1000);
}

export function getSessionUid() {
  return Cookies.get(VALID_SESSION_UID_COOKIE);
}

export async function signOut() {
  return auth.signOut();
}

export async function savePuzzle(uid, puzzle) {
  const database = await loadDatabase();
  return database
    .doc(`workspaces/${uid}/puzzles/${puzzle.puzzleKey}`)
    .set(puzzle);
}

export async function loadAllProjects(uid) {
  const database = await loadDatabase();
  const querySnapshot = await database
    .collection(`workspaces/${uid}/puzzles`)
    .get();
  const puzzles = {};
  querySnapshot.forEach(doc => {
    puzzles[doc.id] = doc.data();
  });
  return puzzles;
}
