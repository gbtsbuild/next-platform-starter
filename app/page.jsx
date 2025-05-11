import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { getNetlifyContext } from 'utils';

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

const footerItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Return Policy', href: '/return-policy' },
    { name: '© 2025 GBTS BUILDERS SOLUTION LTD', href: '#' },
];

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <Header />
            <main>
                <section>
                    <ContextAlert className="mb-6" />
                    <h1 className="mb-4 text-2xl font-semibold">Welcome to GBTS BUILDERS SOLUTION LTD</h1>
                    <div className="mb-6">
                        <Slider />
                    </div>
                    <p className="text-lg">
                        Your one-stop shop for building materials and tools.
                    </p>
                </section>
                {!!ctx && (
                    <section className="flex flex-col gap-4">
                        <Markdown content={contextExplainer} />
                        <RuntimeContextCard />
                    </section>
                )}
            </main>
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className="bg-gray-800 text-white py-2">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">GBTS BUILDERS SOLUTION LTD</div>
                <ul className="flex gap-4">
                    {navigationItems.map((item) => (
                        <li key={item.name} className="relative group">
                            <Link href={item.href} className="hover:text-yellow-400">{item.name}</Link>
                            {item.submenu && (
                                <ul className="absolute bg-white text-black mt-2 rounded shadow-lg hidden group-hover:block">
                                    {item.submenu.map((subItem) => (
                                        <li key={subItem.name}>
                                            <Link href={subItem.href} className="block px-4 py-2 hover:bg-gray-200">{subItem.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-col items-center gap-2">
                {footerItems.map((item) => (
                    <Link key={item.name} href={item.href} className="hover:underline text-center">
                        {item.name}
                    </Link>
                ))}
            </div>
        </footer>
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
