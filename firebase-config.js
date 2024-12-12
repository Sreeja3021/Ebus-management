// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5brMmYeh_DcpKQ_kqjHSJJiXztcrndWg",
  authDomain: "ebus-management-b08ba.firebaseapp.com",
  databaseURL: "https://ebus-management-b08ba-default-rtdb.firebaseio.com",
  projectId: "ebus-management-b08ba",
  storageBucket: "ebus-management-b08ba.firebasestorage.app",
  messagingSenderId: "547576063215",
  appId: "1:547576063215:web:804ae56141dfdaf731a71a",
  measurementId: "G-2BKW9644B5"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
