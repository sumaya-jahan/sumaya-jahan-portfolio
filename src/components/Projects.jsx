import projects from "../data/projects";

const Projects = () => {
    return (
        <section
            id="projects"
            className="scroll-mt-20 bg-gray-50 px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">

                {/* Section Heading */}
                <div className="text-center">
                    <p className="font-semibold text-blue-600">
                        My Work
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                        Featured Projects
                    </h2>

                    <div className="mx-auto mt-4 h-1 w-16 rounded bg-blue-600"></div>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
                        Here are some projects I have built while developing my
                        skills in frontend development and modern web technologies.
                    </p>
                </div>

                {/* Project Grid */}
                <div className="mt-12 grid gap-7 md:grid-cols-2">

                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >

                            {/* Project Number */}
                            <div className="flex items-center justify-between">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
                                    {String(project.id).padStart(2, "0")}
                                </div>

                                <span className="text-sm font-medium text-gray-400">
                                    Project
                                </span>

                            </div>

                            {/* Project Title */}
                            <h3 className="mt-6 text-2xl font-bold text-gray-900 transition group-hover:text-blue-600">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-4 flex-grow leading-7 text-gray-600">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="mt-6 flex flex-wrap gap-2">

                                {project.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600"
                                    >
                                        {technology}
                                    </span>
                                ))}

                            </div>

                            {/* Project Links */}
                            <div className="mt-7 flex flex-wrap items-center gap-4">

                                {/* GitHub */}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
                                    >
                                        GitHub
                                    </a>
                                )}

                                {/* Live Demo */}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                                    >
                                        Live Demo
                                    </a>
                                )}

                            </div>

                        </article>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Projects;