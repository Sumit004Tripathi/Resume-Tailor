import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const TemplateA = ({ data }) => {
    const { personal, education, experience, skills } = data;

    return (
        <div className="flex h-full min-h-[297mm] font-sans text-gray-800">
            {/* Sidebar */}
            <div className="w-1/3 bg-gray-800 text-white p-8 flex flex-col">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2 uppercase tracking-wider">{personal.name}</h1>
                    <p className="text-gray-300 text-sm mb-6">{personal.title}</p>

                    <div className="space-y-3 text-sm">
                        {personal.email && (
                            <div className="flex items-center gap-2">
                                <Mail size={14} /> <span>{personal.email}</span>
                            </div>
                        )}
                        {personal.phone && (
                            <div className="flex items-center gap-2">
                                <Phone size={14} /> <span>{personal.phone}</span>
                            </div>
                        )}
                        {personal.address && (
                            <div className="flex items-center gap-2">
                                <MapPin size={14} /> <span>{personal.address}</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold border-b border-gray-600 pb-2 mb-4 uppercase tracking-wide">Education</h2>
                    {education.map((edu, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="font-bold text-white">{edu.school}</h3>
                            <p className="text-gray-300 text-sm">{edu.degree}</p>
                            <p className="text-gray-400 text-xs">{edu.year}</p>
                        </div>
                    ))}
                </div>

                <div>
                    <h2 className="text-xl font-semibold border-b border-gray-600 pb-2 mb-4 uppercase tracking-wide">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {skills.split(',').map((skill, index) => (
                            <span key={index} className="bg-gray-700 text-white px-2 py-1 rounded text-xs">
                                {skill.trim()}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-2/3 p-8 bg-white">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-800 pb-2 mb-4 uppercase tracking-wide">Profile</h2>
                    <p className="text-gray-600 leading-relaxed">{personal.summary}</p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-800 pb-2 mb-4 uppercase tracking-wide">Experience</h2>
                    {experience.map((exp, index) => (
                        <div key={index} className="mb-6">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                                <span className="text-sm text-gray-500 font-medium">{exp.duration}</span>
                            </div>
                            <h4 className="text-lg text-gray-700 mb-2">{exp.company}</h4>
                            <p className="text-gray-600 text-sm whitespace-pre-line">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TemplateA;
