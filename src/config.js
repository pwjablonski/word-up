const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID;

module.exports = {
  firebaseApp: PROJECT_ID,
  firebaseApiKey: API_KEY
};
