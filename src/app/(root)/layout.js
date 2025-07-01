import { ClientRootLayout2 } from "@/components/ClientRootLayout";

export const metadata = {
    title: 'Mileston Partners',
    description: 'Crypto transactions made simple',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ClientRootLayout2>{children}</ClientRootLayout2>
            </body>
        </html>
    );
}
