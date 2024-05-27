'use client'

import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";

const logOut = () => {
    signOut(auth).then( () => {
        console.log("Signed Out!")
    }).catch( (error) => {
        console.log("Sing out error " + error);
    });
}

export default function SignOutButton() {
    return (
        <button onClick={logOut}>
            Logout
        </button>
    );
}