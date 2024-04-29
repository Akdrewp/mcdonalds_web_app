import TopOrder from "./top-order";

export default function OrderLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <TopOrder />
            {children}
        </>
    );
}