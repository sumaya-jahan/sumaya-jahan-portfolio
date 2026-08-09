const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

                <a
                    href="#home"
                    className="text-blue-600 font-bold text-lg"
                >
                    Sumaya Jahan
                </a>

                <div className="flex items-center gap-7">
                    <a href="#home" className="text-sm text-gray-700 hover:text-blue-600">
                        Home
                    </a>

                    <a href="#about" className="text-sm text-gray-700 hover:text-blue-600">
                        About
                    </a>

                    <a href="#skills" className="text-sm text-gray-700 hover:text-blue-600">
                        Skills
                    </a>

                    <a href="#projects" className="text-sm text-gray-700 hover:text-blue-600">
                        Projects
                    </a>

                    <a href="#experience" className="text-sm text-gray-700 hover:text-blue-600">
                        Experience
                    </a>

                    <a href="#education" className="text-sm text-gray-700 hover:text-blue-600">
                        Education
                    </a>

                    <a href="#contact" className="text-sm text-gray-700 hover:text-blue-600">
                        Contact
                    </a>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;