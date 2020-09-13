import React from "react";

export default function() {
    return (
        <div
            className="px-6 py-8 text-center bg-gray-800 bg-center bg-cover rounded lg:p-10"
            style={{ backgroundImage: 'url("./images/react_cover.png")' }}
        >
            <div className="py-5">
                <svg
                    viewBox="0 0 151 151"
                    className="inline-block w-20 h-20 fill-current lg:w-40 lg:h-40 animate-spin-slow"
                    style={{ color: "#61DAFB" }}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M119.267 48.89C138.473 54.769 151 64.248 151 74.25c0 9.973-12.465 19.453-31.548 25.331 4.463 19.514 2.524 35.057-6.125 40.043-2.031 1.17-4.371 1.724-6.956 1.724-8.464 0-19.544-5.971-30.748-16.374-11.203 10.464-22.284 16.497-30.748 16.497-2.585 0-4.924-.554-6.925-1.724-8.68-4.986-10.65-20.56-6.217-40.135C12.527 93.734 0 84.254 0 74.251c0-9.972 12.465-19.421 31.61-25.33-4.463-19.514-2.524-35.057 6.125-40.044 2.031-1.17 4.37-1.723 6.956-1.723v-.03c8.464 0 19.544 5.97 30.748 16.373C86.642 13.033 97.722 7 106.186 7v.03c2.543.005 4.871.56 6.864 1.724 8.68 4.987 10.649 20.56 6.217 40.136zm-13.111-35.026c-6.402.016-15.806 5.124-25.824 14.435 4.34 4.524 8.65 9.695 12.804 15.39 6.925.738 13.512 1.877 19.545 3.354.677-3.109 1.231-6.156 1.569-9.049 1.416-11.757-.4-20.899-4.586-23.3-.954-.523-2.093-.8-3.508-.8v-.03zM70.545 28.33C60.51 19.065 51.062 13.987 44.69 13.987v.03c-1.416 0-2.617.247-3.54.8-4.155 2.432-5.94 11.574-4.494 23.331.37 2.862.893 5.848 1.6 8.926 6.034-1.508 12.62-2.647 19.576-3.386A145.378 145.378 0 0170.545 28.33zm36.226 37.55c1.601-4.094 3.016-8.188 4.155-12.158-4.032-.985-8.248-1.785-12.619-2.431 1.508 2.339 3.016 4.74 4.432 7.202a145.403 145.403 0 014.032 7.387zM89.412 98.259c2.555-3.663 5.017-7.603 7.418-11.758a172.32 172.32 0 006.371-12.28 160.32 160.32 0 00-6.402-12.25 169.659 169.659 0 00-7.449-11.696 171.82 171.82 0 00-13.85-.585c-4.678 0-9.326.215-13.912.616-2.555 3.662-5.017 7.602-7.418 11.757-2.308 4.032-4.462 8.156-6.37 12.28a160.337 160.337 0 006.401 12.25c2.4 4.125 4.894 8.034 7.449 11.697 4.555.369 9.203.584 13.85.584 4.678 0 9.326-.215 13.912-.615zm21.607-3.51a132.055 132.055 0 00-4.248-12.249 174.702 174.702 0 01-4.001 7.418c-1.416 2.493-2.924 4.924-4.432 7.294a138.11 138.11 0 0012.681-2.462zm-44.014 10.743c2.832 3.601 5.694 6.894 8.557 9.849a120.204 120.204 0 008.464-9.849c-2.801.154-5.664.215-8.557.215-2.862 0-5.694-.092-8.464-.215zM40.043 94.781c4.032.985 8.249 1.785 12.62 2.431a203.708 203.708 0 01-4.433-7.202 145.837 145.837 0 01-4.032-7.387c-1.6 4.094-3.016 8.187-4.155 12.158zm43.921-51.77c-2.832-3.601-5.694-6.894-8.556-9.85a120.139 120.139 0 00-8.464 9.85c2.8-.154 5.663-.215 8.556-.215 2.862 0 5.694.092 8.464.215zM48.2 58.585c1.416-2.493 2.924-4.925 4.433-7.294a149.474 149.474 0 00-12.681 2.431 131.92 131.92 0 004.247 12.25 173.979 173.979 0 014.001-7.387zM6.833 74.251c0 4.833 7.048 10.927 17.944 15.574 2.678 1.14 5.57 2.186 8.618 3.14 1.723-6.002 4.001-12.25 6.833-18.652-2.863-6.433-5.171-12.712-6.925-18.744-2.986.954-5.88 1.97-8.526 3.108C13.88 63.294 6.833 69.42 6.833 74.251zM36.75 110.51c-1.416 11.757.4 20.898 4.586 23.299.923.523 2.093.8 3.478.831 6.402 0 15.82-5.109 25.854-14.435-4.34-4.525-8.649-9.695-12.804-15.389-6.925-.739-13.512-1.878-19.545-3.355-.677 3.108-1.23 6.155-1.57 9.049zm73.099 23.176c4.155-2.432 5.94-11.573 4.494-23.33-.339-2.863-.893-5.848-1.601-8.957-6.032 1.508-12.619 2.647-19.575 3.386a145.328 145.328 0 01-12.712 15.358c10.034 9.265 19.483 14.343 25.854 14.343 1.416 0 2.617-.246 3.54-.8zm7.818-40.751c2.985-.954 5.879-1.97 8.525-3.109 10.896-4.616 17.944-10.741 17.975-15.574 0-4.832-7.048-10.926-17.944-15.574a97.481 97.481 0 00-8.649-3.14c-1.723 6.003-4.001 12.25-6.832 18.653 2.862 6.433 5.17 12.711 6.925 18.744zM89.535 74.251c0 7.769-6.298 14.066-14.066 14.066-7.768 0-14.066-6.297-14.066-14.066 0-7.768 6.298-14.066 14.066-14.066 7.768 0 14.066 6.298 14.066 14.066z"
                    />
                </svg>
            </div>
            <div>
                <h1 className="text-2xl text-gray-100 lg-text-5xl">
                    In Depth Reactjs
                </h1>
                <p className="mt-2 mb-8 text-lg text-gray-600 lg:text-2xl">
                    A Practical Course that combine all React World
                </p>
                <a
                    href="#"
                    className="inline-block px-4 py-2 font-bold text-white align-middle bg-blue-600 rounded-full hover:bg-blue-700"
                >
                    <span>Enroll to Course</span>
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
        </div>
    );
}
