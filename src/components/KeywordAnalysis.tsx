import React from 'react';
import { Check, X } from 'lucide-react';
import { ResumeAnalysis } from '../types';

interface KeywordAnalysisProps {
  analysis: ResumeAnalysis;
}

export function KeywordAnalysis({ analysis }: KeywordAnalysisProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Keyword Analysis</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Check className="w-5 h-5 text-green-600" />
            <h4 className="font-medium text-green-800">Found Keywords</h4>
            <span className="text-sm text-gray-500 dark:text-gray-400">({analysis.keywordMatches.found.length})</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {analysis.keywordMatches.found.map((keyword) => (
              <span
                key={keyword}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <X className="w-5 h-5 text-red-600" />
            <h4 className="font-medium text-red-800">Missing Keywords</h4>
            <span className="text-sm text-gray-500 dark:text-gray-400">({analysis.keywordMatches.missing.length})</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {analysis.keywordMatches.missing.slice(0, 10).map((keyword) => (
              <span
                key={keyword}
                className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}