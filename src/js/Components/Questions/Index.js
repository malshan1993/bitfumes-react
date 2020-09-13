import React from "react";

export default function() {
    return (
        <div className="px-6 py-8 mt-10 bg-gray-800 rounded lg:px-20 lg:py-16 lg:mt-20">
            <h1 className="text-lg font-bold text-gray-100 lg:text-2xl">
                All Your questions are answered here.
            </h1>
            <div className="mt-12">
                <div className="py-4 border-b border-gray-700">
                    <h5 className="mb-2 text-lg font-medium text-gray-100">
                        Wait, why I can't search tutorials on youtube?
                    </h5>
                    <p className="text-gray-600">
                        Yeah sure, you can do that and you can get many videos
                        from this course also. But here you will get the full
                        content with all the modules.
                    </p>
                </div>
                <div className="py-4">
                    <h5 className="mb-2 text-lg font-medium text-gray-100">
                        What can I get after this course?
                    </h5>
                    <p className="text-gray-600">
                        Once you complete the course you will get the
                        Certificate of Completion so that you can easily share
                        your accomplishment with your friends, relatives,
                        co-workers and potential employers via Facebook,
                        Twitter, and LinkedIn.
                    </p>
                </div>
            </div>
        </div>
    );
}
