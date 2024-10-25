import type {Metadata} from "next";
import "./globals.css";
import {ThemeProvider} from "./provider";


export const metadata: Metadata = {
    title: "Maxwell´s Portfolio",
    description: "My personal portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
