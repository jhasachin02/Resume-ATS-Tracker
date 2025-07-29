import React from 'react';
import { ResumeAnalysis } from '../types';

interface ScoreBreakdownProps {
  analysis: ResumeAnalysis;
}

export function ScoreBreakdown({ analysis }: ScoreBreakdownProps) {
  const breakdownItems = [
    { label: 'Keywords', score: analysis.breakdown.keywords, icon: '🔍' },
    { label: 'Formatting', score: analysis.breakdown.formatting, icon: '📄' },
    { label: 'Structure', score: analysis.breakdown.structure, icon: '🏗️' },
    { label: 'Experience', score: analysis.breakdown.experience, icon: '💼' },
    { label: 'Skills', score: analysis.breakdown.skills, icon: '⚡' },
    { label: 'Education', score: analysis.breakdown.education, icon: '🎓' }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Score Breakdown</h3>
      
      <div className="space-y-4">
        {breakdownItems.map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-1000 ease-out ${getScoreColor(item.score)}`}
                  style={{ width: `${item.score}%` }}
                ></div>
              </div>
              <span className="text-sm font-semibold text-gray-900 dark:text-white w-8 text-right">
                {item.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}