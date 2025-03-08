import React from "react";
import Button from "../components/Button";
import Link from "next/link";

const RightActions = () => (
    <div className="flex items-center lg:space-x-8">
        <Link href="https://cal.com/ahmedrza" target="_blank">
            <Button className="flex-shrink-0">Schedule a Demo</Button>
        </Link>
    </div>
);

export default RightActions;
