import TopOrder from "./top-order";
import PageLoader from "../conditionalRender";

export default function OrderLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <PageLoader fallback={"/more"}>
            <TopOrder />
            {children}
        </PageLoader>
    );
}