import { AlertTriangle, ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

const NotFound = () => {

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-6 transition-colors duration-200">
            <div className="max-w-md w-full">
                {/* Animated 404 with gradient */}
                <div className="text-center mb-8">
                    <div className="relative">
                        <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                            404
                        </h1>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl animate-pulse"></div>
                    </div>
                </div>

                {/* Error icon with animation */}
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-full border-2 border-orange-200 dark:border-orange-800">
                        <AlertTriangle className="h-12 w-12 text-orange-500 dark:text-orange-400 animate-bounce" />
                    </div>
                </div>

                {/* Content card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 text-center leading-relaxed">
                        The page {"you're"} looking for seems to have drifted away like clouds in the sky.
                        {"Let's"} get you back to familiar weather!
                    </p>

                    {/* Action buttons */}
                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            <Home className="h-5 w-5" />
                            Return to Weather Dashboard
                        </Link>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="mt-8 text-center">
                    <div className="flex justify-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                        Error Code: 404 • Page Not Found
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
