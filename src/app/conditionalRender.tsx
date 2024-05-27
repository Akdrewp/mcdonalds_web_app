'use client'

import { redirect } from "next/navigation";
import { auth } from "@/firebase/config";
import React, { useEffect, useState } from "react";
import { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

export default function PageLoader({
    fallback,
    children
} : {
    fallback: JSX.Element | string
    children: React.ReactNode
}) {

    const [user, setUser] = useState<User | null | String>("Loading");

    useEffect(() => {
        console.log(user);
        const listen = onAuthStateChanged(auth, (user) => {
            setUser(user);
        })

        return () => {
            listen();
        }
    
      }, [user]);

    function printUser() {
        console.log(auth.currentUser);
    }

    
    if (user == "Loading") {
        console.log("Loading");
        return (
            <div>
                LOADING
            </div>
        )
    }
    if (user == null) {
        if (typeof fallback == "string") {
            console.log("Redirected!");
            redirect(fallback);
        }
        
        return (
            <>
                {fallback}
                {/* <button onClick={printUser}>
                    printUser
                </button> */}
            </>
        )
    }
    else {
        console.log("Logged in!");
        return (
            <>
                {children}
                {/* <button onClick={printUser}>
                    printUser
                </button> */}
            </>
        );
    }
}