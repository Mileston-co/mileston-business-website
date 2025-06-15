export default function TermsAndConditions() {
    return (
        <div className="p-6 mx-auto max-w-4xl my-20">
            <h1 className="text-2xl font-bold text-center mb-6">Terms and Conditions</h1>
            <p className="mb-4">
                These <span className="font-bold">Terms and Conditions</span> govern your use of the
                services provided by <span className="italic">&quot;Mileston Inc&quot;</span>. By
                creating a Business Account (
                <span className="font-medium">&quot;Account&quot;</span>) and using the Services,
                you (<span className="italic">&quot;you&quot; or &quot;Merchant&quot;</span>) agree
                to be bound by this Agreement. Please read these terms carefully before proceeding.
            </p>

            <div className="space-y-4">
                <p>
                    You must be a registered business or legally authorized entity to create a
                    Business Account.
                </p>
                <p>
                    You represent and warrant that you have the legal capacity and authority to
                    enter into this Agreement.
                </p>
                <p>
                    You must provide{' '}
                    <span className="font-medium">accurate and complete information</span> during
                    the registration process and keep it updated.
                </p>
                <p>
                    You agree to pay the fees and charges associated with the Services, as outlined
                    in our fee schedule, which is available on our website and may be updated from
                    time to time.
                </p>
                <ul className="list-disc list-inside ml-4">
                    <li>
                        Fees may include transaction fees, conversion fees, and withdrawal fees.
                    </li>
                    <li>We reserve the right to change our fee schedule with prior notice.</li>
                </ul>
                <p>
                    We are not responsible for any delays or errors in settlement or withdrawals due
                    to circumstances beyond our control, such as blockchain network congestion.
                </p>
                <p>
                    You agree to use the Services only for lawful purposes and in compliance with
                    all applicable laws and regulations.
                </p>
                <p>
                    You are prohibited from using the Services for any{' '}
                    <span className="font-medium">illegal or unauthorized activities</span>,
                    including but not limited to money laundering, fraud, and the sale of illegal
                    goods or services.
                </p>
                <p>
                    You agree not to engage in any activity that could disrupt or interfere with the
                    operation of the Platform.
                </p>

                <h2 className="text-lg font-bold mt-6">Compliance with KYC/AML Regulations</h2>
                <p>
                    We are committed to complying with all applicable{' '}
                    <span className="font-medium">Know Your Customer (KYC)</span> and{' '}
                    <span className="font-medium">Anti-Money Laundering (AML)</span> regulations.
                </p>
                <p>
                    You agree to provide us (if required) with all necessary information and
                    documentation to verify your identity and comply with KYC/AML requirements.
                </p>

                <h2 className="text-lg font-bold mt-6">Critical Security Features</h2>
                <p>
                    For enhanced security, a <span className="italic">key phrase</span> required for
                    transaction authorization is split into two parts. You will receive and be
                    responsible for securely storing one part of the key phrase. We will securely
                    store the other part.
                </p>
                <p>
                    <span className="font-bold">Loss of Key Part:</span> You acknowledge and agree
                    that if you lose your portion of the key phrase, access to your funds and the
                    ability to authorize transactions will be permanently lost. We will not be able
                    to recover your lost key part, and we bear no responsibility for any losses
                    resulting from your loss of the key part.
                </p>

                <p>
                    You are responsible for maintaining the confidentiality of your Account
                    credentials and your portion of the key phrase, and for all activities that
                    occur under your Account.
                </p>
                <p>
                    You agree to notify us immediately of any unauthorized access to your Account.
                </p>

                <h2 className="text-lg font-bold mt-6">Limitation of Liability</h2>
                <p>
                    The Services are provided <span className="italic">&quot;as is&quot;</span>{' '}
                    without any warranties of any kind, either express or implied.
                </p>
                <p>
                    To the maximum extent permitted by law, we shall not be liable for any indirect,
                    incidental, special, consequential, or punitive damages, or any loss of profits
                    or revenues, whether incurred directly or indirectly, or any loss of data, use,
                    goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-decimal list-inside ml-4">
                    <li>Your use or inability to use the Services.</li>
                    <li>The loss of your portion of the key phrase.</li>
                </ul>

                <h2 className="text-lg font-bold mt-6">Termination and Amendments</h2>
                <p>You may terminate this Agreement by closing your Account.</p>
                <p>
                    This Agreement constitutes the entire agreement between you and us regarding the
                    Services and supersedes all prior or contemporaneous communications and
                    proposals, whether oral or written.
                </p>
                <p>
                    We reserve the right to amend this Agreement at any time. We will notify you of
                    any material changes by posting the updated Agreement on our website or through
                    other reasonable means. Your continued use of the Services after such notice
                    constitutes your acceptance of the amended Agreement.
                </p>
            </div>

            <p className="text-center mt-6">
                By clicking <span className="font-medium">&quot;I Agree&quot;</span> or creating an
                account, you acknowledge that you have read, understood, and agree to be bound by
                these Terms and Conditions.
            </p>
        </div>
    );
}
