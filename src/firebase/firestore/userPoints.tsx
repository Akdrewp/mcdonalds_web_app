'use client'

import { doc, onSnapshot, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { auth, db } from "@/firebase/config";

export default function UserPoints({ 
    className 
}: {
    className: string,
}) {

    let uid = auth.currentUser?.uid;

    const userRef = doc(db, `users/${uid}`);

    const [points, setPoints] = useState(0);

    useEffect(() => {
        // const asyncSetPoints = async () => {
        //     await getDoc(userRef).then( (userDoc) => {
        //         if (userDoc.exists()) {
        //             setPoints(userDoc.data()?.points);
        //         }
        //         else {
        //             console.log("Error doc undefined");
        //         }
        //     }).catch( (err) => {
        //         console.log("Error with permissions");
        //         console.log(err);
        //     });
        // }

        // asyncSetPoints();
        // const updatePoints = onSnapshot(userRef, (doc) => {
        //     setPoints(doc.data()?.points);
        // });
      }, [userRef])

    return (
        <p className={className}>{points} pts</p>
    )
}