const Contact = () => {
    return (
        <section
            id="contact"
            className="scroll-mt-20 bg-white px-6 py-24"
        >
            <div className="mx-auto max-w-4xl text-center">

                <p className="font-semibold text-blue-600">
                    Get In Touch
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                    Let's Work Together
                </h2>

                <div className="mx-auto mt-4 h-1 w-16 rounded bg-blue-600" />

                <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600">
                    I'm always interested in discussing new opportunities, projects,
                    collaborations, and technology ideas. Feel free to reach out.
                </p>

                <div className="mt-9 flex flex-wrap justify-center gap-4">

                    <a
                        href="mailto:yourmail@example.com"
                        className="rounded-lg bg-blue-600 px-7 py-3 font-medium text-white transition hover:bg-blue-700"
                    >
                        Send Email
                    </a>

                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border-2 border-blue-600 px-7 py-3 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
                    >
                        LinkedIn
                    </a>

                </div>

                <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
                    <a
                        href="mailto:sumayajahan765@gmail.com"
                        className="hover:text-blue-600"
                    >
                        sumayajahan765@gmail.com
                    </a>

                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-600"
                    >
                        GitHub
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Contact;