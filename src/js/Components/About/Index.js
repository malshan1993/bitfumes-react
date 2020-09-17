import React from "react";

export default function Index() {
    return (
        <div className="px-6 py-8 mt-10 bg-gray-800 rounded shadow-lg lg:px-20 lg:py-16 lg:mt-20 bg-gradient-to-r from-purple-900 to-blue-900">
            <div className="flex flex-wrap items-center">
                <div className="md:w-1/2">
                    <h1 className="text-lg font-bold text-gray-100 lg:text-2xl">
                        About Your Instructor
                    </h1>
                    <div className="my-8 ">
                        <p className="my-5 text-base leading-6 text-gray-500 lg:text-lg">
                            Hi, I'm Sarthak Shrivastava, founder of Bitfumes, a
                            full stack developer, passionate speaker and online
                            instructor.
                        </p>
                        <p className="my-5 text-base leading-6 text-gray-500 lg:text-lg">
                            For the last 4 years, I'm teaching Laravel and web
                            development related stuff on youtube with more than
                            55k subscribers.
                        </p>
                        <p className="my-5 text-base leading-6 text-gray-500 lg:text-lg">
                            I have already Published many free and paid courses
                            on various platforms.
                        </p>
                        <p className="my-5 text-base leading-6 text-gray-500 lg:text-lg">
                            I have worked with open sourced technologies and
                            also created many laravel{" "}
                            <a
                                className="text-blue-600 underline"
                                href="//github.com/sarthaksavvy"
                            >
                                open source package
                            </a>{" "}
                            .
                        </p>
                    </div>
                </div>
                <div className="w-full md:pl-8 lg:pl-24 md:w-1/2">
                    <div className="mt-6 mt:mb-0">
                        <img
                            src="images/sarthak.jpg"
                            className="m-auto rounded-lg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
