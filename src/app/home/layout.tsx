

export default function HomeLayout({
    children,
}: {
        children: React.ReactNode
}) {
    return (
    <div>
        <div className="homeHeader">
            <p> I&apos;m the header of home! </p>
        </div>
        <div>
            {children}
        </div>
    </div>
        );
}