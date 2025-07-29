import React, { useCallback, useState } from 'react';
import { Upload, File, X } from 'lucide-react';
import { UploadedFile } from '../types';

interface FileUploadProps {
  onFileUpload: (file: UploadedFile) => void;
  isAnalyzing: boolean;
}

export function FileUpload({ onFileUpload, isAnalyzing }: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type === 'application/pdf' || 
        file.type === 'application/msword' || 
        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
        file.type === 'text/plain') {
      
      const reader = new FileReader();
      reader.onload = (e) => {
        const uploadedFile: UploadedFile = {
          name: file.name,
          size: file.size,
          type: file.type,
          content: e.target?.result as string || ''
        };
        setUploadedFile(uploadedFile);
        onFileUpload(uploadedFile);
      };
      reader.readAsText(file);
    } else {
      alert('Please upload a PDF, DOC, DOCX, or TXT file.');
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  if (uploadedFile) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <File className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">{uploadedFile.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {(uploadedFile.size / 1024).toFixed(1)} KB
              </p>
            </div>
          </div>
          {!isAnalyzing && (
            <button
              onClick={removeFile}
              className="w-8 h-8 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </button>
          )}
        </div>
        {isAnalyzing && (
          <div className="mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"></div>
              <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">Analyzing resume...</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
        dragActive 
          ? 'border-blue-400 bg-blue-50 dark:bg-blue-900/20' 
          : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800/50'
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <Upload className={`w-12 h-12 mx-auto mb-4 ${dragActive ? 'text-blue-500' : 'text-gray-400 dark:text-gray-500'}`} />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        Upload Your Resume
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Drag and drop your resume here, or click to browse
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Supports PDF, DOC, DOCX, and TXT files
      </p>
      <label className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer">
        <Upload className="w-4 h-4 mr-2" />
        Choose File
        <input
          type="file"
          className="hidden"
          accept=".pdf,.doc,.docx,.txt"
          onChange={handleFileInput}
        />
      </label>
    </div>
  );
}