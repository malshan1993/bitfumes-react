import React from "react";

export default function() {
    return (
        <div className="px-6 py-8 mt-10 bg-gray-800 rounded lg:px-20 lg:py-16 lg:mt-20">
            <div className="flex flex-wrap items-center">
                <div className="w-full md:pr-8 md:w-2/3 ">
                    <h1 className="text-lg font-bold text-gray-100 lg:text-2xl">
                        In Depth Reactjs
                    </h1>
                    <p className="my-5 text-base font-medium leading-6 text-gray-500">
                        Do not just understand, work on real projects <br /> and
                        showcase them in your resume.
                    </p>
                    <div className="mt-16">
                        <p className="text-base font-medium leading-6 text-gray-100">
                            Get early discount &amp; latest news 👇
                        </p>
                        <form action="#" className="my-4">
                            <div>
                                <input
                                    className="block w-full px-4 py-3 mb-3 leading-tight bg-gray-700 border border-gray-500 rounded-lg appearance-none focus:outline-none focus:bg-white"
                                    type="text"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <input
                                    className="block w-full px-4 py-3 mb-3 leading-tight bg-gray-700 border border-gray-500 rounded-lg appearance-none focus:outline-none focus:bg-white"
                                    type="email"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mt-10">
                                <button
                                    type="submit"
                                    className="inline-block px-4 py-2 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700"
                                >
                                    <span>Subscribe Now</span>
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
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full md:w-1/3 ">
                    <div className="mt-6 mt:mb-0">
                        <img
                            src="images/news_letter.jpg"
                            className="m-auto rounded-lg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
