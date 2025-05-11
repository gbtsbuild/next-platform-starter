import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-blue-900">
                <div className="flex flex-col min-h-screen px-6 bg-noise sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        {/* Updated Header for thinner style */}
                        <Header className="py-2" />
                        <main className="grow">{children}</main>
                        {/* Updated Footer with vertical alignment */}
                        <Footer className="flex flex-col items-center gap-2" />
                    </div>
                </div>
            </body>
        </html>
    );
}
