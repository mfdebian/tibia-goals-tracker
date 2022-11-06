import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMjokw0MXw4_BObk0Rz4bYFMvx17fr-OY",
  authDomain: "tibia-goals-tracker.firebaseapp.com",
  projectId: "tibia-goals-tracker",
  storageBucket: "tibia-goals-tracker.appspot.com",
  messagingSenderId: "397595602656",
  appId: "1:397595602656:web:bfdfeef686ec316aac2a85"
};

export const app = initializeApp(firebaseConfig);
