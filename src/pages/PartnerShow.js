import { BaseFramerAnimation } from "@/components/Animation";
import { X } from "lucide-react";

function PartnerShow({ partnerId }) {
    return (
        <main className="">
            <section className="bg-black text-white flex items-center justify-center min-h-screen px-5 lg:px-0">
                <div className="grid grid-cols-3 items-center justify-items-center gap-4 lg:gap-8 w-full max-w-4xl">
                    {/* Logo of partnering company */}
                    <BaseFramerAnimation>
                        <img
                            src={`/assets/images/${partnerId}.png`}
                            className="w-32 h-32 lg:w-50 lg:h-50 object-contain"
                            alt={`${partnerId} logo`}
                            width={200}
                            height={200}
                        />
                    </BaseFramerAnimation>

                    {/* A X-icon to show partnership */}
                    <X className="w-16 h-16 lg:w-20 lg:h-20 text-white" />

                    {/* Mileston Logo */}
                    <BaseFramerAnimation>
                        <img
                            src={'/assets/images/logo-short.png'}
                            className="w-32 h-32 lg:w-50 lg:h-50 object-contain"
                            alt="Mileston Logo"
                            width={150}
                            height={150}
                        />
                    </BaseFramerAnimation>
                </div>
            </section>
        </main>
    );
}

export default PartnerShow;