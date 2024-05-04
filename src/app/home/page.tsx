'use client'

import SignIn from "@/firebase/auth/signIn";
import HomePage from "./homePage/homePage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useState, useEffect } from "react";

export default function Home() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("Logged In! UserId: ", uid);
        setIsLoggedIn(true);
      } else {
        console.log("Not Logged In!");
        setIsLoggedIn(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (auth.currentUser) {
    return (
      <HomePage />  
    );
  } else { //Not logged in
    return (
      <div className="grow flex self-center items-center">
        <SignIn />
      </div>
    );
  }
}