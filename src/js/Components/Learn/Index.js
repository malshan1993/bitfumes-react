import React from "react";

export default function() {
    return (
        <div className="px-6 py-8 mt-10 bg-gray-800 rounded lg:px-20 lg:py-16 lg:mt-20">
            <div className="flex flex-wrap">
                <div className="md:pr-8 xl:pr-32 md:w-1/2">
                    <h1 className="text-lg font-bold text-gray-100 lg:text-2xl">
                        What will you learn?
                    </h1>
                    <p className="my-5 text-lg leading-6 text-gray-500 lg:text-xl">
                        This course is built fully in React Hooks for React in
                        2020 and beyond. You'll work with:
                    </p>
                    <div className="mb-6 md:mb-0">
                        <img
                            src="images/what_you_learn.jpg"
                            className="rounded-lg "
                            alt=""
                        />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <ul>
                        <li>✅ React templating with JSX</li>
                        <li>✅ React Hooks:</li>
                        <li>⚛️ useState()</li>
                        <li>⚛️ useEffect()</li>
                        <li>⚛️ useCallback()</li>
                        <li>⚛️ useContext()</li>
                        <li>⚛️ useRef()</li>
                        <li>⚛️ useReducer()</li>
                        <li>✅ Custom React Hooks</li>
                        <li>✅ Routing</li>
                        <li>✅ Authentication</li>
                        <li>✅ State management</li>
                        <li>✅ Rendering</li>
                        <li>✅ Component communication with props</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
