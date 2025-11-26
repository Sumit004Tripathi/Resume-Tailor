import React, { forwardRef } from 'react';
import TemplateA from '../templates/TemplateA';
import TemplateB from '../templates/TemplateB';
import TemplateC from '../templates/TemplateC';

const ResumePreview = forwardRef(({ data, template }, ref) => {
    const renderTemplate = () => {
        switch (template) {
            case 'A':
                return <TemplateA data={data} />;
            case 'B':
                return <TemplateB data={data} />;
            case 'C':
                return <TemplateC data={data} />;
            default:
                return <TemplateA data={data} />;
        }
    };

    return (
        <div className="flex justify-center p-8 bg-gray-100 min-h-screen overflow-auto">
            <div
                ref={ref}
                className="bg-white shadow-2xl"
                style={{
                    width: '210mm',
                    minHeight: '297mm',
                    padding: '0', // Templates handle their own padding
                    boxSizing: 'border-box',
                    transform: 'scale(0.8)', // Scale down for preview if needed, or handle via CSS
                    transformOrigin: 'top center',
                }}
            >
                {renderTemplate()}
            </div>
        </div>
    );
});

ResumePreview.displayName = 'ResumePreview';

export default ResumePreview;
