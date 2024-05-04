'use client'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";



export default function SignInForm() {

    function createUserWithEmail(
        email: string,
        password: string
    ) {
        console.log(email, password);
    }

    const createAccount = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
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

    return (
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
    );
}