'use server'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";

export const createAccount = (event: React.FormEvent<HTMLFormElement>): void => {
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