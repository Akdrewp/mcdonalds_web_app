import SignUpForm from "./signUpForm";
import { createAccount } from "./serverFunctions/createAccountWithEmailAndPassword";

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