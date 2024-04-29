import { relative } from "path";
import "./home.css"
import Image from "next/image";
import Top from "./top-home";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Top />
            {children}
        </>
    );
}