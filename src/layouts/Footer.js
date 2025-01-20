import Link from 'next/link';
import { FaTelegram, FaTwitter, FaDiscord } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="w-full">
            <div className="p-8 lg:p-16">
                <div className="container px-4 md:px-10 py-8 bg-gray-100 rounded-3xl">
                    <div className="flex flex-col gap-5 lg:flex-row items-center justify-between">
                        <div className="text-xl font-bold justify-start">MILESTON</div>
                        <div className="flex space-x-4 justify-end">
                            <Link
                                href="https://t.me/milestonofficial"
                                target="_blank"
                                className="text-muted-foreground p-3 bg-white rounded-xl hover:text-foreground"
                            >
                                <FaTelegram className="h-5 w-5" style={{ strokeWidth: 1 }} />
                                <span className="sr-only">Telegram</span>
                            </Link>
                            <Link
                                href="https://x.com/mileston_sol"
                                target="_blank"
                                className="text-muted-foreground p-3 bg-white rounded-xl hover:text-foreground"
                            >
                                <FaTwitter className="h-5 w-5" style={{ strokeWidth: 1 }} />
                                <span className="sr-only">X</span>
                            </Link>
                            <Link
                                href="https://discord.gg/KCADu3F9zm"
                                target="_blank"
                                className="text-muted-foreground p-3 bg-white rounded-xl hover:text-foreground"
                            >
                                <FaDiscord className="h-5 w-5" style={{ strokeWidth: 1 }} />
                                <span className="sr-only">Discord</span>
                            </Link>
                        </div>
                    </div>
                    <p className="text-sm text-center mt-10 text-muted-foreground">
                        © {new Date().getFullYear()} MILESTON. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
