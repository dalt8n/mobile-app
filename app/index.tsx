import React, { useState } from "react";

import HomeScreen from "../src/screens/HomeScreen";
import LoginScreen from "../src/screens/LoginScreen";
import RegisterScreen from "../src/screens/RegisterScreen";
import SplashScreen from "../src/screens/SplashScreen";

export default function Index() {

  const [showSplash, setShowSplash] = useState(true);

  const [showRegister, setShowRegister] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Usuario guardado
  const [savedEmail, setSavedEmail] = useState("");

  const [savedPassword, setSavedPassword] = useState("");

  // LOGIN
  const handleLogin = (
    email: string,
    password: string
  ) => {

    if (
      email.trim() === savedEmail.trim() &&
      password.trim() === savedPassword.trim()
    ) {

      setIsLoggedIn(true);

    } else {

      alert("Correo o contraseña incorrectos");

    }
  };

  // REGISTER
  const handleRegister = (
    email: string,
    password: string
  ) => {

    if (!email || !password) {

      alert("Completa todos los campos");

      return;
    }

    setSavedEmail(email);

    setSavedPassword(password);

    alert("Cuenta creada correctamente");

    setShowRegister(false);
  };

  // SPLASH
  if (showSplash) {

    return (
      <SplashScreen
        onFinish={() => setShowSplash(false)}
      />
    );
  }

  // HOME
  if (isLoggedIn) {

    return (
      <HomeScreen
        onLogout={() =>
          setIsLoggedIn(false)
        }
      />
    );
  }

  // LOGIN / REGISTER
  return (
    <>
      {showRegister ? (

        <RegisterScreen
          onGoBack={() =>
            setShowRegister(false)
          }
          onRegister={handleRegister}
        />

      ) : (

        <LoginScreen
          onRegisterPress={() =>
            setShowRegister(true)
          }
          onLogin={handleLogin}
        />

      )}
    </>
  );
}