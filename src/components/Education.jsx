const education = [
    {
        id: 1,
        degree: "Bachelor of Science in Mathematics",
        institution: "Kishoreganj University",
        period: "2022 - 2027",
        description:
            "Studying core areas of mathematics including calculus, algebra, statistics, and mathematical-problem solving, with a strong focus on analytical and logical thinking.",
    },
    {
        id: 2,
        degree: "Higher Secondary Certificate",
        institution: "Bhaluka Govt College",
        period: "2019-2021",
        description:
            "Completed higher secondary education with a focus on science and mathematics",
    },
];

const Education = () => {
    return (
        <section
            id="education"
            className="scroll-mt-20 bg-gray-50 px-6 py-24"
        >
            <div className="mx-auto max-w-5xl">

                <div className="text-center">
                    <p className="font-semibold text-blue-600">
                        Academic Background
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                        Education
                    </h2>

                    <div className="mx-auto mt-4 h-1 w-16 rounded bg-blue-600" />
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {education.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm"
                        >
                            <span className="text-sm font-semibold text-blue-600">
                                {item.period}
                            </span>

                            <h3 className="mt-3 text-xl font-bold text-gray-900">
                                {item.degree}
                            </h3>

                            <p className="mt-2 font-medium text-gray-700">
                                {item.institution}
                            </p>

                            <p className="mt-4 leading-7 text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Education;