'use client'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import { createUserInDB } from "@/firebase/firestore/createNewUserDB";
import { User } from "firebase/auth";

export default function SignUpForm() {

    const createAccount = (formData: FormData): void => {
        let formDataObj = Object.fromEntries(formData);
        console.log(formDataObj.email);
        let email = formDataObj.email.toString();
        let password = formDataObj.password.toString();
    
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential): void => { //Log the Account for debug purposes
            console.log("Success CreateAccountWithEmailAndPassword");
            createUserInDB(userCredential.user);
            console.log("Current User: ", auth.currentUser);
        })
        .catch((error) => {
            console.log(auth.currentUser);
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    
    }

    function onSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        createAccount(formData);
    }
    return (
        <form onSubmit={onSubmit} className="flex flex-col">
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
    )
}