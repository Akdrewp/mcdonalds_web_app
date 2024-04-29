import SignInForm from "./signIn";

export default function More() {
    return (
        <div className="grow">
            <SignInForm />
            <button>
                Logout
            </button>
        </div>
    );
}