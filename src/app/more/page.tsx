import SignInForm from "../../firebase/auth/signUp";
import { auth } from "../../firebase/config";

export default function More() {

    let isLoggedIn = auth.currentUser;
    console.log(isLoggedIn);

    return (
        <div className="grow flex flex-col items-center justify-center">
            <SignInForm />

            { isLoggedIn && 
                <button>
                    Logout
                </button>
            }
            <p>Already have an account? <a href="/home">Sign in</a></p>
        </div>
    );
}