const skills = [
    {
        category: "Frontend",
        items: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "DaisyUI",
        ],
    },

    {
        category: "Libraries & Routing",
        items: [
            "React Router",
        ],
    },

    {
        category: "Backend & Services",
        items: [
            "Node.js",
            "Firebase",
        ],
    },

    {
        category: "Tools",
        items: [
            "Vite",
            "Git",
            "GitHub",
        ],
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="scroll-mt-20 bg-white px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">

                {/* Section Heading */}
                <div className="text-center">
                    <p className="font-semibold text-blue-600">
                        What I Know
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                        My Skills
                    </h2>

                    <div className="mx-auto mt-4 h-1 w-16 rounded bg-blue-600"></div>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
                        Technologies and tools I use to build modern, responsive,
                        and interactive web applications.
                    </p>
                </div>

                {/* Skill Cards */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {skills.map((skill) => (
                        <div
                            key={skill.category}
                            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                        >
                            {/* Category */}
                            <h3 className="text-xl font-bold text-blue-600">
                                {skill.category}
                            </h3>

                            {/* Skills */}
                            <div className="mt-5 flex flex-wrap gap-2">

                                {skill.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                                    >
                                        {item}
                                    </span>
                                ))}

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Skills;