import React from "react";

export default function({ value }) {
    return (
        <div className="flex py-2">
            <div className="w-10 h-10">
                <i
                    className={`py-1 text-2xl text-blue-600 fas ${value.icon}`}
                />
            </div>
            <p className="text-lg text-gray-600 lg:text-xl">{value.name}</p>
        </div>
    );
}
