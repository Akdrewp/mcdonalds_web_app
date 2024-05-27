import HomePage from "./homePage/homePage";
import { auth } from "@/firebase/config";
import PageLoader from "../conditionalRender";
import SignIn from "@/firebase/auth/signIn";

export default function Home() {
  let isLoggedIn = async () => {
    await auth.authStateReady();
    return "SHOULD BE STRING";
  }

  return (
      <HomePage/>
  );
}