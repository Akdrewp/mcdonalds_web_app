'use client'

import { signOut } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";



export function SignInForm() {

    function createUserWithEmail(
        email: string,
        password: string
    ) {
        console.log(email, password);
    }

    const createAccount = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        let formData = Object.fromEntries(new FormData(event.currentTarget));
        let email = formData.email.toString();
        let password = formData.password.toString();

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential): void => {
            console.log("Success", userCredential.user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    const [user, setUser] = useState<User | null | String>("Loading");

    useEffect(() => {
        console.log(user);
        const listen = onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    
      }, []);

    return (
        <>
        <div className="flex">
            <form onSubmit={createAccount} className="flex flex-col">
                <label htmlFor="email">Email:</label>
                <input 
                    type="text" 
                    id="email" 
                    name="email"
                    className="border rounded-sm" 
                />
                <label htmlFor="password">Password:</label>
                <input 
                    type="text" 
                    id="password" 
                    name="password" 
                    className="border rounded-sm" 
                />
                <button type="submit">
                    Create account
                </button>
            </form>
        </div>
        <p>Already have an account? <a href="/home">Sign in</a></p>
        </>
    );
}

export function SignOutButton() {
    const logOut = () => {
        signOut(auth).then( () => {
            console.log("Signed Out!")
        }).catch( (error) => {
            console.log("Sing out error " + error);
        });
    }

    return (
        <button onClick={logOut}>
            Logout
        </button>
    );
}