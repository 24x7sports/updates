<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyC5h02p0ax950bqOGkOn4C4bJJ-DjI8xfE",
    authDomain: "sports-live-backend.firebaseapp.com",
    projectId: "sports-live-backend",
    storageBucket: "sports-live-backend.firebasestorage.app",
    messagingSenderId: "156846075724",
    appId: "1:156846075724:web:49de7abd10f687daade9e9"
  };

  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
</script>
