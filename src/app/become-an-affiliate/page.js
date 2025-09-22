import Link from 'next/link';
import Title from '@/components/Title';
import SubHeading from '@/components/SubHeading';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function BecomeAnAffiliate() {
    return (
        <div className="container my-20 mx-auto px-4 md:px-8 lg:px-12 py-16">
            {/* Hero */}
            <div className="text-center max-w-3xl mx-auto">
                <Title className="mb-4">Join the Mileston Affiliate Program</Title>
                <SubHeading className="text-gray-600 mb-8">
                    Earn by sharing Mileston. Help businesses accept crypto payments with low fees and fast settlement.
                </SubHeading>
                <div className="flex items-center justify-center gap-4">
                    <Link href="https://affiliate.mileston.co" target="_blank" rel="noopener noreferrer">
                        <Button color="black">Sign up to get started</Button>
                    </Link>
                    <a href="#how-it-works" className="text-gray-700 hover:text-black font-semibold">
                        Learn more
                    </a>
                </div>
            </div>

            {/* Benefits */}
            <div className="mt-16" id="benefits">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="h-full">
                        <h3 className="text-xl font-semibold mb-2">Simple Earnings</h3>
                        <p className="text-gray-600">Choose how you earn: $0.01 per transaction up to $100, or a $60 lump sum when your referral reaches $10,000 total processed volume.</p>
                    </Card>
                    <Card className="h-full">
                        <h3 className="text-xl font-semibold mb-2">Fast Payouts</h3>
                        <p className="text-gray-600">Track clicks, conversions, and earnings in real time. Withdraw as you earn.</p>
                    </Card>
                    <Card className="h-full">
                        <h3 className="text-xl font-semibold mb-2">Trusted Platform</h3>
                        <p className="text-gray-600">Backed by secure crypto infrastructure with low fees and global coverage.</p>
                    </Card>
                </div>
            </div>

            {/* How it works */}
            <div className="mt-20" id="how-it-works">
                <Title className="mb-6 text-3xl lg:text-4xl">How it works</Title>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="h-full">
                        <div className="text-sm text-gray-500 mb-1">Step 1</div>
                        <h4 className="text-lg font-semibold mb-2">Create your account</h4>
                        <p className="text-gray-600">Sign up in seconds and get your unique referral link.</p>
                    </Card>
                    <Card className="h-full">
                        <div className="text-sm text-gray-500 mb-1">Step 2</div>
                        <h4 className="text-lg font-semibold mb-2">Share your link</h4>
                        <p className="text-gray-600">Invite merchants, startups, and communities that want seamless crypto payments.</p>
                    </Card>
                    <Card className="h-full">
                        <div className="text-sm text-gray-500 mb-1">Step 3</div>
                        <h4 className="text-lg font-semibold mb-2">Earn</h4>
                        <p className="text-gray-600">Get paid based on your chosen plan as your referrals process transactions.</p>
                    </Card>
                </div>
            </div>

            {/* FAQ */}
            <div className="mt-20 max-w-3xl mx-auto">
                <Title className="mb-6 text-3xl lg:text-4xl">FAQs</Title>
                <div className="space-y-4">
                    <Card>
                        <details>
                            <summary className="cursor-pointer font-semibold">How do I get paid?</summary>
                            <p className="text-gray-600 mt-2">Earnings accrue in your affiliate dashboard. You can withdraw based on your balance and get paid in USDC.</p>
                        </details>
                    </Card>
                    <Card>
                        <details>
                            <summary className="cursor-pointer font-semibold">What is the per-transaction plan?</summary>
                            <p className="text-gray-600 mt-2">You earn $0.01 per transaction from referred users, up to $100 maximum potential per referred account.</p>
                        </details>
                    </Card>
                    <Card>
                        <details>
                            <summary className="cursor-pointer font-semibold">What is the lump sum plan?</summary>
                            <p className="text-gray-600 mt-2">You earn a one-time $60 reward when your referred user reaches $10,000 in total processed volume.</p>
                        </details>
                    </Card>
                </div>
            </div>

            {/* Final CTA */}
            <div className="mt-20 text-center">
                <SubHeading className="text-gray-700 mb-6">Start earning with Mileston today</SubHeading>
                <Link href="https://affiliate.mileston.co" target="_blank" rel="noopener noreferrer">
                    <Button color="black">Sign up free</Button>
                </Link>
            </div>
        </div>
    );
}