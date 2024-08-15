import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWwgqBFtwCRZNBzllD4RsH9cJ_Z5Tlulc",
  authDomain: "benefitsapp-25138.firebaseapp.com",
  databaseURL: "https://benefitsapp-25138-default-rtdb.firebaseio.com",
  projectId: "benefitsapp-25138",
  storageBucket: "benefitsapp-25138.appspot.com",
  messagingSenderId: "412177707402",
  appId: "1:412177707402:web:566fe797819f050a9b1873",
  measurementId: "G-5ZXG5BCT8B"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
