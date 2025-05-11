import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { getNetlifyContext } from 'utils';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | GBTS BUILDERS',
        default: 'Welcome to GBTS BUILDERS'
    }
};

const contextExplainer = `
Explore the features of GBTS BUILDERS SOLUTION LTD's e-commerce platform. Easily navigate through our extensive collection of building materials and tools.
`;

const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Collections', href: '/collections', submenu: [
        { name: 'Roofings', href: '/collections/roofings' },
        { name: 'Doors', href: '/collections/doors' },
        { name: 'Hand Tools', href: '/collections/hand-tools' },
        { name: 'Locks & Knobs', href: '/collections/locks-knobs' },
        { name: 'Security Cameras', href: '/collections/security-cameras' },
        { name: 'Appliances', href: '/collections/appliances' },
    ]},
    { name: 'Track Your Orders', href: '/orders' },
    { name: 'Blog', href: '/blog' },
];

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="antialiased text-white bg-blue-900">
            <div className="flex flex-col min-h-screen px-6 bg-noise sm:px-12">
                <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                    <Header className="py-2" />
                    <main className="grow">
                        <section className="flex flex-col gap-12 sm:gap-16">
                            <ContextAlert className="mb-6" />
                            <h1 className="mb-4 text-2xl font-semibold">
                                Welcome to GBTS BUILDERS SOLUTION LTD
                            </h1>
                            <div className="mb-6">
                                <Slider />
                            </div>
                            <p className="text-lg">
                                Your one-stop shop for building materials and tools.
                            </p>
                            {!!ctx && (
                                <section className="flex flex-col gap-4">
                                    <Markdown content={contextExplainer} />
                                    <RuntimeContextCard />
                                </section>
                            )}
                        </section>
                    </main>
                    <Footer className="flex flex-col items-center gap-2" />
                </div>
            </div>
        </div>
    );
}

function Slider() {
    const images = [
        '/images/slider1.jpg',
        '/images/slider2.jpg',
        '/images/slider3.jpg',
    ];

    return (
        <div className="relative w-full max-w-2xl mx-auto">
            <div className="overflow-hidden rounded shadow-lg">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="w-full"
                    />
                ))}
            </div>
        </div>
    );
}

function RuntimeContextCard() {
    const title = `Platform Mode: ${ctx}`;
    if (ctx === 'dev') {
        return (
            <Card title={title}>
                <p>Browse and test new features for your e-commerce platform seamlessly.</p>
            </Card>
        );
    } else {
        return (
            <Card title={title}>
                <p>Your platform is live and ready to serve customers effectively.</p>
            </Card>
        );
    }
}
