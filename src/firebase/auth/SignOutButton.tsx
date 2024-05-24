'use client'

import { logOut } from "./logOut";

export default function SignOutButton() {
    return (
        <button onClick={logOut}>
            Logout
        </button>
    );
}