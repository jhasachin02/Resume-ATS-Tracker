import React from 'react';
import { Lightbulb, AlertCircle, CheckCircle2 } from 'lucide-react';
import { ResumeAnalysis } from '../types';

interface RecommendationsProps {
  analysis: ResumeAnalysis;
}

export function Recommendations({ analysis }: RecommendationsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Recommendations */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Lightbulb className="w-5 h-5 text-yellow-600" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recommendations</h3>
        </div>
        
        <div className="space-y-3">
          {analysis.recommendations.map((recommendation, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{recommendation}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Format Issues & Strengths */}
      <div className="space-y-6">
        {/* Format Issues */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Format Issues</h3>
          </div>
          
          <div className="space-y-2">
            {analysis.formatIssues.map((issue, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{issue}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Strengths</h3>
          </div>
          
          <div className="space-y-2">
            {analysis.strengths.map((strength, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}