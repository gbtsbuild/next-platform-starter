import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col items-center gap-4">
                <Link
                    href="/return-policy"
                    className="hover:text-yellow-400 transition-colors"
                >
                    Return Policy
                </Link>
                <p className="text-sm mt-4">
                    Powered by{' '}
                    <Link
                        href="https://docs.netlify.com/frameworks/next-js/overview/"
                        className="decoration-dashed underline-offset-4 hover:text-yellow-400"
                    >
                        Next.js on Netlify
                    </Link>
                </p>
            </div>
        </footer>
    );
}
