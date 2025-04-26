import ClientRootLayout from '../components/ClientRootLayout';

export const metadata = {
    title: 'Mileston',
    description: 'Crypto transactions made simple',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ClientRootLayout>{children}</ClientRootLayout>
            </body>
        </html>
    );
}
