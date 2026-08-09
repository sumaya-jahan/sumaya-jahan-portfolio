const AboutMe = () => {
    return (
        <section
            id="about"
            className="scroll-mt-20 bg-gray-50 px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">

                {/* Section Heading */}
                <div className="text-center">
                    <p className="font-semibold text-blue-600">
                        Get To Know Me
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                        About Me
                    </h2>

                    <div className="mx-auto mt-4 h-1 w-16 rounded bg-blue-600"></div>
                </div>

                {/* About Content */}
                <div className="mt-12 grid items-center gap-10 md:grid-cols-2">

                    {/* Left Side */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                            Mathematics Student & Web Development Enthusiast
                        </h3>

                        <p className="mt-5 leading-8 text-gray-600">
                            I am a Bachelor of Science student in Mathematics at
                            Kishoreganj University with a strong interest in web
                            development and modern technologies.
                        </p>

                        <p className="mt-4 leading-8 text-gray-600">
                            I enjoy building responsive and user-friendly web
                            applications using technologies such as React, JavaScript,
                            Tailwind CSS, Firebase, and Node.js. My mathematics
                            background has also helped me develop strong analytical,
                            logical, and problem-solving skills.
                        </p>

                        <p className="mt-4 leading-8 text-gray-600">
                            I am continuously learning new technologies, improving my
                            development skills, and working on projects that allow me
                            to turn ideas into practical web applications.
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="grid grid-cols-2 gap-4">

                        <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                            <h4 className="text-3xl font-bold text-blue-600">
                                React
                            </h4>

                            <p className="mt-2 text-sm text-gray-600">
                                Frontend Development
                            </p>
                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                            <h4 className="text-3xl font-bold text-blue-600">
                                JS
                            </h4>

                            <p className="mt-2 text-sm text-gray-600">
                                JavaScript
                            </p>
                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                            <h4 className="text-3xl font-bold text-blue-600">
                                4+
                            </h4>

                            <p className="mt-2 text-sm text-gray-600">
                                Projects Built
                            </p>
                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                            <h4 className="text-3xl font-bold text-blue-600">
                                Math
                            </h4>

                            <p className="mt-2 text-sm text-gray-600">
                                Problem Solving
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;