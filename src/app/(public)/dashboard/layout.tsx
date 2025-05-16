import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Dashboard",
};

export default function DashBoardLayout( {children} : Readonly<{ children: React.ReactNode }> ) {
    return (
        <>
            {children}
        </>
    )
}
