import { SignInForm, SignOutButton }from "../../firebase/auth/signUp";
import PageLoader from "../conditionalRender";


export default function More() {

    return (
        <div className="grow flex flex-col items-center justify-center">
            <PageLoader fallback={<SignInForm/>}>
                <SignOutButton />
            </PageLoader>
        </div>
    );
}