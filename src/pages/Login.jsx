import React, { useState } from "react";
import { auth, googleProvider, facebookProvider } from "../firebaseConfig";
import { sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import "./Login.css";
import edupluslogo from "../assets/edupluslogo.png";
import googlelogo from "../assets/googlelogo.png";

const Login = () => {
  const [isSignup, setIsSignup] = useState(true);
//   const [email, setEmail] = useState("");
//   const [darkMode, setDarkMode] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Login Successful!");
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  // Facebook Login
  const handleFacebookLogin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      alert("Facebook Login Successful!");
    } catch (error) {
      console.error("Facebook Login Error:", error);
    }
  };

  return (

    <div className="login-container" id="signup">
      <img className="edupluselogo" src={edupluslogo} alt="edupluslogo"/>
      <div className="login-box">
        <h2 className="h2class">{isSignup ? "Sign Up" : "Login"}</h2>
        <form className="formclass">
          {isSignup && <input type="text" placeholder="Full Name" required />}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {isSignup && <input type="password" placeholder="Confirm Password" required />}
          <button className="btn1" type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>

        <p className="loginpara" onClick={toggleForm}>
          {isSignup ? "Already have an account? Login" : "Don't have an account? Sign up"}
        </p>

        <div className="social-login">
          <button onClick={handleGoogleLogin} className="google-btn">
            <img src={googlelogo} className="googlelogo"/>
            Login with Google</button>
          {/* <button onClick={handleFacebookLogin} className="facebook-btn">Login with Facebook</button> */}
        </div>
      </div>
    </div>
  );
};

export default Login;










//   // Reset Password
//   const handleResetPassword = async () => {
//     if (!email) {
//       alert("Please enter your email to reset password.");
//       return;
//     }
//     try {
//       await sendPasswordResetEmail(auth, email);
//       alert("Password reset link sent to your email!");
//     } catch (error) {
//       console.error("Password Reset Error:", error);
//       alert("Error sending reset email.");
//     }
//   };

//   // Toggle Dark Mode
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className={`login-container ${darkMode ? "dark-mode" : ""}`}>
//       <div className="login-box">
//         <h2>{isSignup ? "Sign Up" : "Login"}</h2>
//         <form>
//           {isSignup && <input type="text" placeholder="Full Name" required />}
//           <input 
//             type="email" 
//             placeholder="Email" 
//             required 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//           />
//           <input type="password" placeholder="Password" required />
//           {isSignup && <input type="password" placeholder="Confirm Password" required />}
//           <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
//         </form>

//         {!isSignup && <p onClick={handleResetPassword} className="forgot-password">Forgot Password?</p>}

//         <p onClick={toggleForm}>
//           {isSignup ? "Already have an account? Login" : "Don't have an account? Sign up"}
//         </p>

//         <div className="social-login">
//           <button onClick={handleGoogleLogin} className="google-btn">Login with Google</button>
//           <button onClick={handleFacebookLogin} className="facebook-btn">Login with Facebook</button>
//         </div>

//         {/* Dark Mode Toggle Button */}
//         <button onClick={toggleDarkMode} className="dark-mode-btn">
//           {darkMode ? "Light Mode" : "Dark Mode"}
//         </button>
//       </div>
//     </div>
//   );

