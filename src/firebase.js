import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlcGyMeL_e3ZsqEMD2z1pnX1wBpJcORyY",
  authDomain: "deepfake-detection-989e1.firebaseapp.com",
  projectId: "deepfake-detection-989e1",
  storageBucket: "deepfake-detection-989e1.firebasestorage.app",
  messagingSenderId: "415409961848",
  appId: "1:415409961848:web:ee5d4a73c70a60509d268d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;