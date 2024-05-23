'use client'

import { redirect } from "next/navigation";
import { auth } from "@/firebase/config";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

export default function PageLoader({
    fallback,
    children
} : {
    fallback: JSX.Element
    children: JSX.Element
}) {

    const [user, setUser] = useState<User | null | String>("Loading");

    useEffect(() => {
        console.log(user);
        const listen = onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    
      }, []);

    
    if (user == "Loading") {
        console.log("Loading");
        return (
            <div>
                LOADING
            </div>
        )
    }
    if (user == null) {
        console.log("Redirected!");
        return (
            fallback
        )
    }
    else {
        console.log("Logged in!");
        return (
            <>
                {children}
            </>
        );
    }
}