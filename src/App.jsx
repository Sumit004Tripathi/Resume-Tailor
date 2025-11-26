import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Download, FileText } from 'lucide-react';
import InputForm from './components/InputForm';
import TemplatePicker from './components/TemplatePicker';
import ResumePreview from './components/ResumePreview';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState('A');
  const [resumeData, setResumeData] = useState({
    personal: {
      name: 'John Doe',
      title: 'Software Engineer',
      email: 'john.doe@example.com',
      phone: '+1 234 567 890',
      address: '123 Tech Street, Silicon Valley, CA',
      summary: 'Experienced software developer with a passion for building scalable web applications. Skilled in React, Node.js, and modern web technologies.',
    },
    education: [
      { school: 'University of Technology', degree: 'B.Sc. Computer Science', year: '2018 - 2022' },
    ],
    experience: [
      {
        company: 'Tech Solutions Inc.',
        role: 'Frontend Developer',
        duration: '2022 - Present',
        description: 'Developing responsive web applications using React and Tailwind CSS. Collaborating with UX designers to implement intuitive interfaces.',
      },
    ],
    skills: 'React, JavaScript, HTML, CSS, Node.js, Git, Agile',
  });

  const previewRef = useRef();

  const handleDataChange = (section, value) => {
    setResumeData((prev) => ({ ...prev, [section]: value }));
  };

  const handleDownloadPDF = async () => {
    const element = previewRef.current;
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Calculate image height to maintain aspect ratio
      const imgProps = pdf.getImageProperties(imgData);
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, imgHeight);
      pdf.save('resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Left Sidebar - Controls */}
      <div className="w-1/3 min-w-[400px] bg-white border-r border-gray-200 flex flex-col h-full">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gray-900 text-white">
          <div className="flex items-center gap-2">
            <FileText size={24} className="text-blue-400" />
            <h1 className="text-xl font-bold">Resume Tailor</h1>
          </div>
          <button
            onClick={handleDownloadPDF}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors shadow-md"
          >
            <Download size={18} /> Export PDF
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <TemplatePicker
            selectedTemplate={selectedTemplate}
            onSelectTemplate={setSelectedTemplate}
          />
          <InputForm data={resumeData} onChange={handleDataChange} />
        </div>
      </div>

      {/* Right Area - Preview */}
      <div className="flex-1 bg-gray-200 overflow-auto flex justify-center p-8">
        <ResumePreview
          ref={previewRef}
          data={resumeData}
          template={selectedTemplate}
        />
      </div>
    </div>
  );
}

export default App;
