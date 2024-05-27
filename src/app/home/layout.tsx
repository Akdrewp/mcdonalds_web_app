import "./home.css"
import Top from "./top-home";
import PageLoader from "../conditionalRender";
import SignIn from "@/firebase/auth/signIn";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <PageLoader fallback={<SignIn/>}>
            <Top />
            {children}
        </PageLoader>
    );
}