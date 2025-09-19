'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SignupForm() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const workEmailRegex =
        /^(?!.*@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|aol\.com|icloud\.com|protonmail\.com|zoho\.com|mail\.com|gmx\.com)$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleSignup = () => {
        setError(''); // Reset error first
        if (workEmailRegex.test(email)) {
            console.log('Valid Work Email');
            fetch('https://user-service.mileston.co/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            })
                .then((response) => {
                    if (response.ok) {
                        window.open('https://business.mileston.co/auth/verify-code?ref=' + getRef() || '', '_blank');
                    } else {
                        setError('Unable to sign up');
                        window.location.href = 'https://business.mileston.co/auth/signin?ref=' + getRef() || '';
                    }
                })
                .catch(() => {
                    setError('Unable to sign up');
                    window.location.href = 'https://business.mileston.co/auth/signin?ref=' + getRef() || '';
                });
        } else {
            setError('Please enter a valid work email');
        }
    };

    return (
        <div className="flex flex-col md:flex-row justify-center items-center w-full gap-6">
            {/* Input Field */}
            <div className="relative w-full md:w-96">
                <input
                    type="email"
                    placeholder="Enter your work email"
                    className="w-full px-5 py-3 pr-28 text-black bg-gray-300 border border-gray-600 rounded-full outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    className="absolute right-1 top-[0.15rem] h-[90%] px-4 md:px-6 text-white bg-black hover:bg-gray-950 transition-all rounded-full"
                    onClick={handleSignup}
                >
                    Sign Up
                </button>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}

            {/* Schedule a Demo Button */}
            <Link
                href="https://cal.com/ahmedrza"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-white hidden bg-transparent border border-white rounded-full hover:bg-white hover:text-black transition-all"
            >
                Schedule a Demo
            </Link>
        </div>
    );
}
