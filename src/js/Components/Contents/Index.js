import React from "react";

export default function() {
    const contents = [
        {
            title: "28 Chapters",
            videos: [
                {
                    name: "You can either do this",
                    minute: "10 mis",
                    link: "https://www.npmjs.com/package/react-fontawesome",
                },
                {
                    name: "You can either do this",
                    minute: "10 mis",
                    link: "",
                },
            ],
        },
        {
            title: "21 Chapters",
            videos: [
                {
                    name: "You can either do this",
                    minute: "10 mis",
                    link: "",
                },
                {
                    name: "You can either do this",
                    minute: "10 mis",
                    link: "",
                },
            ],
        },
    ];

    return (
        <div className="px-6 py-8 mt-10 bg-gray-800 rounded shadow-lg lg:px-20 lg:py-16 lg:mt-20">
            <h1 className="text-lg font-bold text-gray-100 lg:text-2xl">
                Table of Contents
            </h1>
            <div className="mt-10">
                <div className="-mx-2 border border-gray-700 lg-mx-8">
                    {contents.map((content, index) => {
                        return (
                            <div key={index}>
                                <div className="px-4 py-4 bg-gray-700 lg:px-8 bg-gradient-to-r from-purple-400 to-blue-600">
                                    <h5 className="text-base font-semibold text-gray-100 lg:text-lg">
                                        {content.title}
                                    </h5>
                                </div>
                                <div className="px-4 py-2 border-t border-gray-700 lg:px-8 ">
                                    {content.videos.map((video, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="flex flex-wrap items-center my-4 lg:flex-no-wrap"
                                            >
                                                <div className="flex w-full my-2 lg:my-0">
                                                    <svg
                                                        className="w-6 h-6 mr-4 text-blue-600 fill-current"
                                                        viewBox="0 0 25 25"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M24.924 12.45c.035 6.859-5.457 12.51-12.196 12.55C5.553 25.04.037 19.646 0 12.55-.037 5.627 5.46.023 12.302 0c7.076-.02 12.585 5.416 12.622 12.45zm-17.41.03c0 1.657-.016 3.317 0 4.976.017 1.461.947 2.017 2.222 1.299a559.45 559.45 0 008.341-4.791c1.32-.768 1.32-1.816 0-2.63A1275.852 1275.852 0 009.77 6.287C8.517 5.531 7.54 6.07 7.518 7.51c-.022 1.66-.005 3.317-.005 4.977v-.007z" />
                                                    </svg>
                                                    <p className="font-medium text-gray-500">
                                                        {video.name}
                                                    </p>
                                                </div>
                                                <div className="flex w-1/2 lg:w-32">
                                                    <svg
                                                        className="w-6 h-6 mr-4 text-blue-600 fill-current"
                                                        viewBox="0 0 25 25"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M24.918 12.548C24.884 19.635 19.364 25.04 12.197 25 5.454 24.96-.033 19.32 0 12.452.033 5.365 5.553-.04 12.72 0c6.74.043 12.228 5.688 12.197 12.548zM14.16 8.654c0-1.082-.013-2.164 0-3.245.011-.725-.359-1.056-1.04-1.095-.36-.02-.718 0-1.082-.013-.883-.02-1.322.348-1.298 1.298.041 1.514 0 3.029.013 4.543.067 4.76-.649 3.526 3.3 6.464 1.607 1.196 1.648 1.157 2.89-.409.605-.763.638-1.436-.243-1.852-2.297-1.081-2.957-2.89-2.546-5.252.015-.15.018-.3.006-.45v.01z" />
                                                    </svg>
                                                    <p className="font-medium text-gray-500 whitespace-no-wrap">
                                                        {video.minute}
                                                    </p>
                                                </div>
                                                {video.link ? (
                                                    <div className="flex w-1/2 pl-2 lg:w-40 ">
                                                        <button
                                                            type="submit"
                                                            className="inline-block px-4 py-2 text-sm font-medium text-white whitespace-no-wrap rounded-full bg-gradient-to-r from-purple-400 to-blue-600"
                                                        >
                                                            Watch Preview
                                                        </button>
                                                    </div>
                                                ) : null}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
