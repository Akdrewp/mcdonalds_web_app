import SignInForm from "../../firebase/auth/signUp";
import PageLoader from "../conditionalRender";
import SignOutButton from "@/firebase/auth/SignOutButton";


export default function More() {

    return (
        <div className="grow flex flex-col items-center justify-center">
            <PageLoader fallback={<SignInForm/>}>
                <SignOutButton />
            </PageLoader>
        </div>
    );
}