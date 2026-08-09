

import heroImage from "../assets/hero.png";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen bg-white px-6 pt-24 flex items-center"
        >
            <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">

                {/* ================= LEFT SIDE ================= */}
                <div className="text-center md:text-left">

                    {/* Small Intro */}
                    <p className="mb-3 text-lg font-semibold text-blue-600">
                        Hello, I'm
                    </p>

                    {/* Name */}
                    <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        Sumaya Jahan
                    </h1>

                    {/* Designation */}
                    <h2 className="mt-4 text-xl font-semibold text-gray-600 sm:text-2xl lg:text-3xl">
                        Frontend Developer
                    </h2>

                    <p className="mt-2 text-base font-medium text-blue-600 sm:text-lg">
                        Mathematics Student
                    </p>

                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-600 md:mx-0 sm:text-lg">
                        I am passionate about building modern, responsive, and
                        user-friendly web applications using React, JavaScript,
                        Tailwind CSS, Firebase, and other modern web technologies.
                        I enjoy solving problems, learning new technologies, and
                        turning ideas into practical digital experiences.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">

                        {/* Resume */}
                        <a
                            href="/resume.pdf"
                            download
                            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg"
                        >
                            Download Resume
                        </a>

                        {/* Projects */}
                        <a
                            href="#projects"
                            className="rounded-lg border-2 border-blue-600 px-6 py-3 font-semibold text-blue-600 transition duration-300 hover:bg-blue-600 hover:text-white"
                        >
                            View Projects
                        </a>

                    </div>

                    {/* Social Links */}
                    <div className="mt-7 flex flex-wrap justify-center gap-6 md:justify-start">

                        <a
                            href="https://github.com/sumaya-jahan"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-gray-600 transition hover:text-blue-600"
                        >
                            GitHub
                        </a>

                        <a
                            href="YOUR_LINKEDIN_URL"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-gray-600 transition hover:text-blue-600"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="#contact"
                            className="font-medium text-gray-600 transition hover:text-blue-600"
                        >
                            Contact Me
                        </a>

                    </div>
                </div>


                {/* ================= RIGHT SIDE ================= */}
                <div className="flex justify-center md:justify-end">

                    <div className="relative">

                        {/* Decorative Background */}
                        <div className="absolute inset-0 scale-105 rounded-full bg-blue-100"></div>

                        <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-blue-50"></div>

                        <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-blue-100"></div>

                        {/* Profile Photo */}
                        <img
                            src={heroImage}
                            alt="Sumaya Jahan"
                            className="relative h-64 w-64 rounded-full object-cover shadow-xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
                        />

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;