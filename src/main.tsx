import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyB2IRA7faCtLFwU0td4mfmiVxWymzb9AVA",
  authDomain: "expenses-app-b1fcf.firebaseapp.com",
  projectId: "expenses-app-b1fcf",
  storageBucket: "expenses-app-b1fcf.appspot.com",
  messagingSenderId: "716492282573",
  appId: "1:716492282573:web:eba13008d42cc0d4876784",
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>
);
