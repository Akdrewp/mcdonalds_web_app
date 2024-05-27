import { relative } from "path";
import "./home.css"
import Image from "next/image";
import Top from "./top-home";
import { Suspense } from "react";
import Loading from "./loading";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Top />
            <Suspense fallback={<Loading/>}>
                {children}
            </Suspense>
        </>
    );
}