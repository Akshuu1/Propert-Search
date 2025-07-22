"use client";

import { usePathname } from "next/navigation";
import { AppNavbar } from "@/components/layout/AppNavbar";
import AppFooter from "@/components/layout/AppFooter";

export function ClientLayout({ children }) {
    let pathname = "";
    try {
        pathname = usePathname();
    } catch (error) {
    }
    const hideLayout = pathname.startsWith("/auth");

    return (
        <>
            {!hideLayout && <AppNavbar />}
            <main>{children}</main>
            {!hideLayout && <AppFooter />}
        </>
    );
}