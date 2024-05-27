'use client'

import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";

export default function SignIn() {


    const signIn = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        let formData = Object.fromEntries(new FormData(event.currentTarget));
        let email = formData.email.toString();
        let password = formData.password.toString();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential): void => {
            console.log("Success", userCredential.user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    return (
        <div className="grow self-center 
            items-center flex">
            <form onSubmit={signIn} className="flex flex-col">
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
                    Sign In
                </button>
            </form>
        </div>
    );
}