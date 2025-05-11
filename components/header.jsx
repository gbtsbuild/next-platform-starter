import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/netlify-logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Revalidation', href: '/revalidation' },
    { linkText: 'Image CDN', href: '/image-cdn' },
    { linkText: 'Edge Function', href: '/edge' },
    { linkText: 'Blobs', href: '/blobs' },
    { linkText: 'Classics', href: '/classics' }
];

export function Header() {
    return (
        <header className="bg-gray-800 text-white py-2">
            <nav className="container mx-auto flex items-center justify-between">
                <Link href="/">
                    <Image src={netlifyLogo} alt="Netlify logo" className="h-8 w-auto" />
                </Link>
                {!!navItems?.length && (
                    <ul className="flex gap-4">
                        {navItems.map((item, index) => (
                            <li key={index} className="relative group">
                                <Link
                                    href={item.href}
                                    className="px-3 py-2 hover:text-yellow-400 transition-colors"
                                >
                                    {item.linkText}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
                <Link
                    href="https://github.com/netlify-templates/next-platform-starter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:inline-flex"
                >
                    <Image src={githubLogo} alt="GitHub logo" className="h-8 w-8" />
                </Link>
            </nav>
        </header>
    );
}
