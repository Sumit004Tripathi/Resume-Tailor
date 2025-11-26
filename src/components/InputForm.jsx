import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

const InputForm = ({ data, onChange }) => {
    const handleChange = (section, field, value, index = null) => {
        if (index !== null) {
            const updatedSection = [...data[section]];
            updatedSection[index] = { ...updatedSection[index], [field]: value };
            onChange(section, updatedSection);
        } else {
            onChange(section, { ...data[section], [field]: value });
        }
    };

    const handleAddItem = (section, initialItem) => {
        onChange(section, [...data[section], initialItem]);
    };

    const handleRemoveItem = (section, index) => {
        const updatedSection = data[section].filter((_, i) => i !== index);
        onChange(section, updatedSection);
    };

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg overflow-y-auto h-full">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Resume Details</h2>

            {/* Personal Info */}
            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Personal Information</h3>
                <div className="grid grid-cols-1 gap-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="input-field"
                        value={data.personal.name}
                        onChange={(e) => handleChange('personal', 'name', e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Professional Title"
                        className="input-field"
                        value={data.personal.title}
                        onChange={(e) => handleChange('personal', 'title', e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="input-field"
                        value={data.personal.email}
                        onChange={(e) => handleChange('personal', 'email', e.target.value)}
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        className="input-field"
                        value={data.personal.phone}
                        onChange={(e) => handleChange('personal', 'phone', e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        className="input-field"
                        value={data.personal.address}
                        onChange={(e) => handleChange('personal', 'address', e.target.value)}
                    />
                    <textarea
                        placeholder="Professional Summary"
                        className="input-field h-24"
                        value={data.personal.summary}
                        onChange={(e) => handleChange('personal', 'summary', e.target.value)}
                    />
                </div>
            </section>

            {/* Education */}
            <section className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-700">Education</h3>
                    <button
                        onClick={() => handleAddItem('education', { school: '', degree: '', year: '' })}
                        className="btn-secondary flex items-center gap-2"
                    >
                        <Plus size={16} /> Add
                    </button>
                </div>
                {data.education.map((edu, index) => (
                    <div key={index} className="mb-4 p-4 border rounded-md relative group">
                        <button
                            onClick={() => handleRemoveItem('education', index)}
                            className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <Trash2 size={18} />
                        </button>
                        <div className="grid grid-cols-1 gap-2">
                            <input
                                type="text"
                                placeholder="School / University"
                                className="input-field"
                                value={edu.school}
                                onChange={(e) => handleChange('education', 'school', e.target.value, index)}
                            />
                            <input
                                type="text"
                                placeholder="Degree"
                                className="input-field"
                                value={edu.degree}
                                onChange={(e) => handleChange('education', 'degree', e.target.value, index)}
                            />
                            <input
                                type="text"
                                placeholder="Year"
                                className="input-field"
                                value={edu.year}
                                onChange={(e) => handleChange('education', 'year', e.target.value, index)}
                            />
                        </div>
                    </div>
                ))}
            </section>

            {/* Experience */}
            <section className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-700">Experience</h3>
                    <button
                        onClick={() => handleAddItem('experience', { company: '', role: '', duration: '', description: '' })}
                        className="btn-secondary flex items-center gap-2"
                    >
                        <Plus size={16} /> Add
                    </button>
                </div>
                {data.experience.map((exp, index) => (
                    <div key={index} className="mb-4 p-4 border rounded-md relative group">
                        <button
                            onClick={() => handleRemoveItem('experience', index)}
                            className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <Trash2 size={18} />
                        </button>
                        <div className="grid grid-cols-1 gap-2">
                            <input
                                type="text"
                                placeholder="Company"
                                className="input-field"
                                value={exp.company}
                                onChange={(e) => handleChange('experience', 'company', e.target.value, index)}
                            />
                            <input
                                type="text"
                                placeholder="Role"
                                className="input-field"
                                value={exp.role}
                                onChange={(e) => handleChange('experience', 'role', e.target.value, index)}
                            />
                            <input
                                type="text"
                                placeholder="Duration"
                                className="input-field"
                                value={exp.duration}
                                onChange={(e) => handleChange('experience', 'duration', e.target.value, index)}
                            />
                            <textarea
                                placeholder="Description"
                                className="input-field h-24"
                                value={exp.description}
                                onChange={(e) => handleChange('experience', 'description', e.target.value, index)}
                            />
                        </div>
                    </div>
                ))}
            </section>

            {/* Skills */}
            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Skills</h3>
                <textarea
                    placeholder="Comma separated skills (e.g. React, Node.js, Design)"
                    className="input-field h-24"
                    value={data.skills}
                    onChange={(e) => onChange('skills', e.target.value)}
                />
            </section>
        </div>
    );
};

export default InputForm;
