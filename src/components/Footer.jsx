const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-200 bg-gray-50 px-6 py-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row">

                <p className="text-sm text-gray-600">
                    © {currentYear} Sumaya jahan. All rights reserved.
                </p>

                <a
                    href="#home"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                    Back to top ↑
                </a>

            </div>
        </footer>
    );
};

export default Footer;