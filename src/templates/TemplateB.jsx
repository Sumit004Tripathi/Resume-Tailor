import React from 'react';

const TemplateB = ({ data }) => {
    const { personal, education, experience, skills } = data;

    return (
        <div className="h-full min-h-[297mm] font-serif text-gray-900 bg-white p-12">
            {/* Header */}
            <header className="border-b-2 border-black pb-8 mb-8 flex justify-between items-end">
                <div>
                    <h1 className="text-5xl font-bold mb-2">{personal.name}</h1>
                    <p className="text-xl text-gray-600">{personal.title}</p>
                </div>
                <div className="text-right text-sm space-y-1">
                    <p>{personal.email}</p>
                    <p>{personal.phone}</p>
                    <p>{personal.address}</p>
                </div>
            </header>

            <div className="grid grid-cols-3 gap-8">
                {/* Left Column (Main) */}
                <div className="col-span-2">
                    <section className="mb-8">
                        <h2 className="text-xl font-bold uppercase tracking-widest mb-4">Profile</h2>
                        <p className="text-gray-700 leading-relaxed">{personal.summary}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-widest mb-6">Experience</h2>
                        {experience.map((exp, index) => (
                            <div key={index} className="mb-8 border-l-2 border-gray-200 pl-4">
                                <h3 className="text-lg font-bold">{exp.role}</h3>
                                <div className="flex justify-between text-sm text-gray-500 mb-2">
                                    <span>{exp.company}</span>
                                    <span>{exp.duration}</span>
                                </div>
                                <p className="text-gray-700 text-sm">{exp.description}</p>
                            </div>
                        ))}
                    </section>
                </div>

                {/* Right Column (Sidebar) */}
                <div className="col-span-1">
                    <section className="mb-8">
                        <h2 className="text-xl font-bold uppercase tracking-widest mb-4">Education</h2>
                        {education.map((edu, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="font-bold">{edu.school}</h3>
                                <p className="text-sm italic">{edu.degree}</p>
                                <p className="text-xs text-gray-500">{edu.year}</p>
                            </div>
                        ))}
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-widest mb-4">Skills</h2>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            {skills.split(',').map((skill, index) => (
                                <li key={index}>{skill.trim()}</li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TemplateB;
