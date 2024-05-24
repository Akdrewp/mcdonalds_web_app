'use server'

import { auth } from "../config";
import { signOut } from "firebase/auth";

export const logOut = () => {
    signOut(auth).then( () => {
        console.log("Signed Out!")
    }).catch( (error) => {
        console.log("Sing out error " + error);
    });
}
