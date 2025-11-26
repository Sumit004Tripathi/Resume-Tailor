import React from 'react';
import { Layout } from 'lucide-react';

const TemplatePicker = ({ selectedTemplate, onSelectTemplate }) => {
    const templates = [
        { id: 'A', name: 'Classic Professional', color: 'bg-blue-100' },
        { id: 'B', name: 'Modern Minimal', color: 'bg-green-100' },
        { id: 'C', name: 'Clean Corporate', color: 'bg-gray-100' },
    ];

    return (
        <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-gray-700">
                <Layout size={20} /> Select Template
            </h3>
            <div className="grid grid-cols-3 gap-4">
                {templates.map((template) => (
                    <button
                        key={template.id}
                        onClick={() => onSelectTemplate(template.id)}
                        className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center gap-2 ${selectedTemplate === template.id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-300'
                            }`}
                    >
                        <div className={`w-full h-20 rounded ${template.color} mb-2`}></div>
                        <span className="text-sm font-medium text-gray-700">{template.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TemplatePicker;
