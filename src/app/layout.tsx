import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";
import { Provider } from "@/utils/provider";

const font = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    preload: false,
});

export const metadata: Metadata = {
    title: "Sensedia Portal",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <head>
                <link rel="icon" href="/favicon.png" sizes="any" />
            </head>
            <body className={font.className}>
                <div className="flex flex-1 flex-col min-h-screen">
                    <Provider>
                        <Header />
                        <div className="flex flex-1 flex-col px-72">
                            {children}
                        </div>
                    </Provider>
                </div>
            </body>
        </html>
    );
}
