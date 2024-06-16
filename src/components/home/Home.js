import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <header className="w-full py-6 bg-blue-600 text-white text-center">
                <h1 className="text-4xl font-bold">Welcome to My Developer Portfolio</h1>
            </header>
            <main className="flex-grow flex flex-col justify-center items-center text-center p-6">
                <h2 className="text-2xl md:text-3xl font-semibold mt-6">
                    Hi, I'm John Grubbs
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mt-4">
                    I'm a passionate developer with experience in building modern web applications.
                </p>
                <p className="text-lg md:text-xl text-gray-700 mt-2">
                    Check out my projects and feel free to contact me!
                </p>
                <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                    View My Work
                </button>
            </main>
            <footer className="w-full py-4 bg-gray-800 text-white text-center">
                <p>&copy; 2024 John Grubbs. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
