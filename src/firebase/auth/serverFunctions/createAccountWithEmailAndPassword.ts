import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import { createUserInDB } from "@/firebase/firestore/newUser";

export const createAccount = (formData: FormData): void => {
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