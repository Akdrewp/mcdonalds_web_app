import SignUpForm from "./signUpForm";
import { createAccount } from "./createAccountWithEmailAndPassword";

export default function SignInForm() {
    return (
        <>
            <div className="flex">
                <SignUpForm createAccount={createAccount}/>
            </div>
            <p>Already have an account? <a href="/home">Sign in</a></p>
        </>
    );
}