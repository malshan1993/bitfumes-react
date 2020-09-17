import React from "react";

import Feature from "./Feature";

export default function() {
    const features = [
        {
            name: "28 Chapters",
            icon: "fa-layer-group",
        },
        {
            name: "288 Videos",
            icon: "fa-play-circle",
        },
        {
            name: "Beginner",
            icon: "fa-child",
        },
        {
            name: "32.70 hour of content",
            icon: "fa-clock",
        },
        {
            name: "Lifetime Access",
            icon: "fa-infinity",
        },
        {
            name: "Access anywhere",
            icon: "fa-mobile",
        },
        {
            name: "Real Project",
            icon: "fa-project-diagram",
        },
        {
            name: "Certificate",
            icon: "fa-certificate",
        },
    ];

    return (
        <div className="px-6 py-8 mt-10 bg-gray-800 rounded shadow-lg lg:mt-20 lg:py-16 lg:px-20">
            <div className="mb-10 font-bold text-center">
                <h1 className="text-lg font-bold text-gray-100 lg:text-2xl">
                    Features of the course
                </h1>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => {
                    return <Feature key={index} value={feature} />;
                })}
            </div>
        </div>
    );
}
