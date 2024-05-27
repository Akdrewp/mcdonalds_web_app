'use client'

import SignUpForm from "./signUpForm";

export default function SignInForm() {
    return (
        <>
            <div className="flex">
                <SignUpForm/>
            </div>
            <p>Already have an account? <a href="/home">Sign in</a></p>
        </>
    );
}