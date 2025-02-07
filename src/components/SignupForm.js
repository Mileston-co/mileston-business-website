import { useState } from "react";
import Link from "next/link";

export default function SignupForm() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const workEmailRegex = /^(?!.*@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|aol\.com|icloud\.com|protonmail\.com|zoho\.com|mail\.com|gmx\.com)$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleSignup = () => {
        setError(""); // Reset error first
        if (workEmailRegex.test(email)) {
            console.log("Valid Work Email");
            fetch("https://user-service.mileston.co/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            })
            .then(response => {
                if (response.ok) {
                    window.open("https://business.mileston.co/auth/verify-code", "_blank");
                } else {
                    setError("Unable to sign up");
                    // window.location.href = "https://business.mileston.co";
                }
            })
            .catch(() => {
                setError("Unable to sign up");
                // window.location.href = "https://business.mileston.co";
            });
        } else {
            setError("Please enter a valid work email");
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-5 bg-black p-6">
            {/* Left side: Input field and error message */}
            <div className="flex flex-col w-full md:w-auto">
                <div className="relative w-full md:w-80">
                    <input
                        type="email"
                        placeholder="Enter your work email"
                        className="w-full px-2 md:px-5 py-3 pr-20 text-white bg-gray-900 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button 
                        className="absolute right-0 top-0 h-full px-3 md:px-6 text-white bg-gray-700 hover:bg-gray-600 transition-all rounded-full"
                        onClick={handleSignup}
                    >
                        Signup
                    </button>
                </div>

                {/* Error Message Below Input */}
                {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
            </div>

            {/* "Schedule a Demo" Button */}
            <Link 
                href="https://cal.com/ahmedrza" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 text-white border border-white rounded-full hover:bg-white hover:text-black transition-all"
            >
                Schedule a Demo
            </Link>
        </div>
    );
}
