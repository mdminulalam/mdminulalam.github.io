import React from 'react';

// Google Scholar Icon Component
const GoogleScholarIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M5.242 13.769L0.5 9.5 12 1l11.5 8.5-4.742 4.269C17.548 12.53 14.978 11.5 12 11.5s-5.548 1.03-6.758 2.269M12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14m0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10m-1 1.5v3l2.5 1.5-2.5 1.5v3l5-3-5-3v-2z"/>
  </svg>
);

// ResearchGate Icon Component  
const ResearchGateIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
    <rect width="24" height="24" rx="3" fill="#00d0b7"/>
    <g fill="white" fontSize="10" fontFamily="Arial, sans-serif" fontWeight="bold">
      <text x="3" y="15" textAnchor="start">R</text>
      <text x="13" y="15" textAnchor="start">G</text>
    </g>
  </svg>
);

const IconDemo = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-12 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Academic Profile Icons</h1>
        
        <div className="space-y-8">
          {/* Google Scholar */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Google Scholar</h2>
            <div className="flex justify-center items-center space-x-6">
              <div className="flex flex-col items-center">
                <GoogleScholarIcon size={32} className="text-blue-600 mb-2" />
                <span className="text-sm text-gray-600">32px</span>
              </div>
              <div className="flex flex-col items-center">
                <GoogleScholarIcon size={48} className="text-blue-600 mb-2" />
                <span className="text-sm text-gray-600">48px</span>
              </div>
              <div className="flex flex-col items-center">
                <GoogleScholarIcon size={64} className="text-blue-600 mb-2" />
                <span className="text-sm text-gray-600">64px</span>
              </div>
            </div>
          </div>

          {/* ResearchGate */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">ResearchGate</h2>
            <div className="flex justify-center items-center space-x-6">
              <div className="flex flex-col items-center">
                <ResearchGateIcon size={32} className="text-green-600 mb-2" />
                <span className="text-sm text-gray-600">32px</span>
              </div>
              <div className="flex flex-col items-center">
                <ResearchGateIcon size={48} className="text-green-600 mb-2" />
                <span className="text-sm text-gray-600">48px</span>
              </div>
              <div className="flex flex-col items-center">
                <ResearchGateIcon size={64} className="text-green-600 mb-2" />
                <span className="text-sm text-gray-600">64px</span>
              </div>
            </div>
          </div>

          {/* Interactive Examples */}
          <div className="border-t pt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Interactive Examples</h2>
            <div className="flex justify-center space-x-4">
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <GoogleScholarIcon size={20} />
                <span>Google Scholar</span>
              </button>
              <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                <ResearchGateIcon size={20} />
                <span>ResearchGate</span>
              </button>
            </div>
          </div>

          {/* As they appear in your portfolio */}
          <div className="border-t pt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">As they appear in your portfolio</h2>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110" title="Google Scholar">
                <GoogleScholarIcon size={24} />
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110" title="ResearchGate">
                <ResearchGateIcon size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconDemo;