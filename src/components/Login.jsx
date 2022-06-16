import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../App";

const firebaseConfig = {
  apiKey: "AIzaSyChNv2UV5daCBhB9od_a_GqIrekY1xsxLs",
  authDomain: "trainingtidbitsah.firebaseapp.com",
  projectId: "trainingtidbitsah",
  storageBucket: "trainingtidbitsah.appspot.com",
  messagingSenderId: "831581935388",
  appId: "1:831581935388:web:b2709e638450959276ccd9",
};

export default function Login() {
  const { setUser } = useContext(UserContext);

  const handleGoogleLogin = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => setUser(res.user))
      .catch(console.error);
  };

  return (
    <section className="login-button">
      <h2>Please login to add a new medication!</h2>
      <button onClick={handleGoogleLogin}>Google Login</button>
    </section>
  );
} //need to configure a logout button, below is what i found.
