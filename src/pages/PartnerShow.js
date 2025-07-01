import { BaseFramerAnimation } from "@/components/Animation";
import { X } from "lucide-react";

function PartnerShow({ partnerId }) {
    return (
        <main className="container mx-auto">
            <section className="bg-black text-white flex items-center justify-center py-36 lg:py-80 mx-8 rounded-3xl px-12 mt-32">
                <div className="max-w-lg w-full flex flex-col gap-10 lg:gap-14 items-center">
                    {/* Mileston Logo shows first */}
                    <BaseFramerAnimation>
                        <img
                            src={'/assets/images/logo-white.png'}
                            className="w-100 h-100"
                            alt="Mileston Logo"
                        />
                    </BaseFramerAnimation>

                    {/* A X-icon to show partnership */}
                    <X className="w-50 h-50" />

                    {/* Logo of partnering company */}
                    <BaseFramerAnimation>
                        <img
                            src={`/assets/images/${partnerId}.png`}
                            className="w-100 h-100"
                            alt={`${partnerId} logo`}
                        />
                    </BaseFramerAnimation>
                </div>
            </section>
        </main>
    );
}

export default PartnerShow;