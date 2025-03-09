import React from "react";
import Button from "../components/Button";
import Link from "next/link";

const RightActions = () => (
    <div className="flex items-center lg:space-x-8">
        <Link href="https://cal.com/ahmedrza" target="_blank">
            <Button className="flex-shrink-0">
                <span className="hidden lg:inline">Schedule a Demo</span>
                <span className="lg:hidden">Demo</span>
            </Button>
        </Link>
    </div>
);

export default RightActions;
