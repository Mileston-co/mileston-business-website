export default function About() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 my-20">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">
                Mileston: Building the Future of Crypto Payments
            </h1>
            <p className="mb-4 text-lg text-gray-700">
                Mileston is building the future of crypto payments — simple, stable, and actually usable.
            </p>

            <p className="mb-4 text-gray-700">
                We started Mileston because accepting crypto still feels like a hack. Wallet connections fail, invoices are clunky, and volatility makes real businesses hesitate. We&apos;re here to fix that.
            </p>

            <p className="mb-4 text-gray-700">
                Mileston lets businesses accept stablecoins like USDC with the same ease as Stripe or Razorpay — branded in-frame checkouts, no-code payment links, recurring billing, and instant settlement. No awkward redirects, no waiting for 12 confirmations, no guessing if you actually got paid.
            </p>

            <p className="mb-8 text-gray-700">
                We&apos;re a small team of builders with deep roots in crypto, fintech, and developer tooling. And we&apos;re not here for short-term hype — we&apos;re here to rebuild payments from the ground up, with stablecoins at the core.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">What&apos;s Next</h2>
            <p className="mb-6 text-gray-700">
                We&apos;re not just building a crypto checkout — we&apos;re building an entire ecosystem around fast, stable, programmable money. Here&apos;s a glimpse of what&apos;s ahead:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-800">
                <li>
                    <span className="font-medium">Raast-style universal transfer layer for wallets and chains</span> — cross-wallet, chain-agnostic, and near-instant.
                </li>
                <li>
                    <span className="font-medium">Mileston Crypto Card</span> — spend stablecoins anywhere, no bridge needed.
                </li>
                <li>
                    <span className="font-medium">In-person crypto payments (POS)</span> — QR and NFC-based checkout that feels like Apple Pay.
                </li>
                <li>
                    <span className="font-medium">A universal stablecoin</span> — asset-backed, borderless, and native to Mileston.
                </li>
                <li>
                    <span className="font-medium">Our own L2 or rollup</span> — purpose-built for high-volume, low-latency payments.
                </li>
                <li>
                    <span className="font-medium">Tap-to-pay in the Mileston app</span> — no card required, just your phone.
                </li>
                <li>
                    <span className="font-medium">Deep Apple Pay + Google Pay integration</span> — pay with fiat or crypto seamlessly.
                </li>
                <li>
                    <span className="font-medium">Strategic partnerships</span> — starting with Square and expanding globally.
                </li>
            </ul>
        </div>
    );
}