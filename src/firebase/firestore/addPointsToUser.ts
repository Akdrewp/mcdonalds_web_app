
import { doc, updateDoc, increment } from "firebase/firestore";
import { db, auth } from "@/firebase/config";
import { User } from "firebase/auth";

export default async function addPoints(points: number) {
    let user = auth.currentUser;
    const userRef = doc(db, `users/${user?.uid}`);

    await updateDoc(userRef, {
        points: increment(points),
    });
    console.log(userRef);
}