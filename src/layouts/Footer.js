import Link from 'next/link';
import { FaTelegram, FaTwitter, FaDiscord } from 'react-icons/fa';
import SignUpForm from '@/components/SignupForm';
import Logo from './../components/Logo';

const FOOTER_LINKS = [
    { label: 'Features', url: '#features' },
    { label: 'Docs', url: 'https://docs.mileston.co' },
    { label: 'About Us', url: '#sendMoneyForm' },
    { label: 'Careers', url: 'https://www.linkedin.com/company/mileston/jobs/' },
    { label: 'Contact Us', url: 'mailto:ahmed@mileston.co' },
];

export default function Footer() {
    return (
        <div className="mx-auto container md:-mt-40">
            <footer className="w-full">
                <div className="p-8 lg:p-16">
                    <div className="container px-4 md:px-10 py-8 bg-gray-100 rounded-3xl">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {/* Brand Name & Socials */}
                            <div>
                                <div className="text-xl font-bold">
                                    <Logo />
                                </div>
                                <p className="text-sm text-gray-600 mt-2">
                                    Revolutionizing payments with secure and low-cost crypto
                                    transactions.
                                </p>
                                <div className="flex space-x-4 mt-4">
                                    <Link
                                        href="https://t.me/milestonofficial"
                                        target="_blank"
                                        className="p-3 bg-white rounded-xl hover:text-foreground"
                                    >
                                        <FaTelegram
                                            className="h-5 w-5"
                                            style={{ strokeWidth: 1 }}
                                        />
                                    </Link>
                                    <Link
                                        href="https://x.com/mileston_co"
                                        target="_blank"
                                        className="p-3 bg-white rounded-xl hover:text-foreground"
                                    >
                                        <FaTwitter className="h-5 w-5" style={{ strokeWidth: 1 }} />
                                    </Link>
                                    <Link
                                        href="https://discord.gg/KCADu3F9zm"
                                        target="_blank"
                                        className="p-3 bg-white rounded-xl hover:text-foreground"
                                    >
                                        <FaDiscord className="h-5 w-5" style={{ strokeWidth: 1 }} />
                                    </Link>
                                </div>
                            </div>

                            {/* Navigation Links */}
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                                <ul className="space-y-2">
                                    {FOOTER_LINKS.map(({ label, url }) => (
                                        <li key={label}>
                                            <Link
                                                href={url}
                                                {...(label === 'Careers'
                                                    ? {
                                                          target: '_blank',
                                                          rel: 'noopener noreferrer',
                                                      }
                                                    : {})}
                                                className="text-gray-600 hover:text-black transition-colors"
                                            >
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Signup Form */}
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Sign Up</h3>
                                <SignUpForm />
                            </div>
                        </div>

                        {/* Copyright */}
                        <p className="text-sm text-center mt-10 text-gray-600">
                            © {new Date().getFullYear()} MILESTON. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
