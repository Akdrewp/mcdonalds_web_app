import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { User } from "firebase/auth";

export async function createUserInDB(newUser: User): Promise<any> {
    try {
        const userRef = doc(db, `users/${newUser?.uid}`);

        const docRef = await setDoc(userRef, {
            email: newUser.email,
            points: 0,
            uid: newUser.uid,
        });
        
        console.log("Document written with ID: ", docRef);
        return docRef;
    }
    catch(e) {
        throw(e);
    }
}