import React from 'react';

const TemplateC = ({ data }) => {
    const { personal, education, experience, skills } = data;

    return (
        <div className="h-full min-h-[297mm] font-sans text-slate-800 bg-white">
            {/* Header */}
            <div className="bg-slate-800 text-white p-10">
                <h1 className="text-4xl font-bold tracking-tight mb-2">{personal.name}</h1>
                <p className="text-lg text-slate-300 mb-4">{personal.title}</p>
                <div className="flex gap-6 text-sm text-slate-300">
                    <span>{personal.email}</span>
                    <span>{personal.phone}</span>
                    <span>{personal.address}</span>
                </div>
            </div>

            <div className="p-10 grid grid-cols-12 gap-8">
                {/* Left Column */}
                <div className="col-span-8">
                    <section className="mb-8">
                        <h2 className="text-lg font-bold text-slate-800 uppercase border-b-2 border-slate-200 pb-2 mb-4">
                            Professional Summary
                        </h2>
                        <p className="text-slate-600 leading-relaxed">{personal.summary}</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-slate-800 uppercase border-b-2 border-slate-200 pb-2 mb-4">
                            Work Experience
                        </h2>
                        {experience.map((exp, index) => (
                            <div key={index} className="mb-6">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="text-xl font-semibold text-slate-700">{exp.role}</h3>
                                    <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                        {exp.duration}
                                    </span>
                                </div>
                                <h4 className="text-md text-slate-600 mb-2 italic">{exp.company}</h4>
                                <p className="text-slate-600 text-sm">{exp.description}</p>
                            </div>
                        ))}
                    </section>
                </div>

                {/* Right Column */}
                <div className="col-span-4">
                    <section className="mb-8">
                        <h2 className="text-lg font-bold text-slate-800 uppercase border-b-2 border-slate-200 pb-2 mb-4">
                            Education
                        </h2>
                        {education.map((edu, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="font-bold text-slate-700">{edu.school}</h3>
                                <p className="text-sm text-slate-600">{edu.degree}</p>
                                <p className="text-xs text-slate-400 mt-1">{edu.year}</p>
                            </div>
                        ))}
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-slate-800 uppercase border-b-2 border-slate-200 pb-2 mb-4">
                            Skills
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.split(',').map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {skill.trim()}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TemplateC;
