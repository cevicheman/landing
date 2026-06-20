import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let saveVote = (productId) => {
    const votesRef = ref(database, 'votes');
    const newVoteRef = push(vostesRef);
    let result = set(newVoteRef, {
        productId: productId,
        timestamp: Date.now()
    });

    return result.then(() => {
        return {
            statu: true,
            message: "Voto guardado correctamente"
        };
    }).catch((error) => {
        return {
            statu: false,
            message: error.message
        };
    });
}

let 