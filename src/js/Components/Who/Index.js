import React from "react";

export default function Index() {
    return (
        <div className="px-6 py-8 mt-10 bg-gray-800 rounded lg:px-20 lg:py-16 lg:mt-20">
            <div className="flex flex-wrap items-center">
                <div className="md:w-1/2">
                    <h1 className="text-lg font-bold text-gray-100 lg:text-2xl">
                        Who is this for?
                    </h1>
                    <div className="my-8 ">
                        <p className="my-5 text-lg leading-6 text-gray-500 lg:text-lg">
                            This course is for beginner-intermediate developers
                            that want to learn by building.
                        </p>
                        <p className="my-5 text-lg leading-6 text-gray-500 lg:text-lg">
                            It's great for those that have some React knowledge
                            but want to create real-world code.
                        </p>
                        <p className="my-5 text-lg leading-6 text-gray-500 lg:text-lg">
                            🧐 They always say "build to learn". They never say
                            what to build! These 20 apps are fun projects that
                            will introduce us to coding scenarios that we'll
                            encounter in many React apps.
                        </p>
                        <p className="my-5 text-lg leading-6 text-gray-500 lg:text-lg">
                            Not sure if you'll like the course? Full refund if
                            you end up not liking anything.
                        </p>
                    </div>
                    <a
                        href="#"
                        className="inline-block px-4 py-2 font-bold text-white align-middle rounded-full bg-gradient-to-r from-purple-400 to-blue-600"
                    >
                        <span>View the 20 Apps</span>
                        <svg
                            viewBox="0 0 25 25"
                            className="inline-block w-6 h-6 ml-2 text-white fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.222 24.444c6.75 0 12.222-5.472 12.222-12.222C24.444 5.472 18.972 0 12.222 0 5.472 0 0 5.472 0 12.222c0 6.75 5.472 12.222 12.222 12.222zM13.28 6.138l6.002 5.92a.916.916 0 010 1.307l-6.001 5.92a.942.942 0 01-.663.27c-.24 0-.48-.09-.664-.27v-5.648H5.826a.932.932 0 01-.937-.926c0-.51.42-.925.937-.925h6.127v-4.34c0-.125-.003-.27-.007-.422-.009-.32-.018-.666.007-.886a.947.947 0 011.326 0z"
                            />
                        </svg>
                    </a>
                </div>
                <div className="w-full md:pl-8 lg:pl-24 md:w-1/2">
                    <div className="mt-6 mt:mb-0">
                        <img
                            src="images/who_is_this_for.jpg"
                            className="m-auto rounded-lg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
