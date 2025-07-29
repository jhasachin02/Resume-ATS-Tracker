import React from 'react';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface ScoreDisplayProps {
  score: number;
  title: string;
}

export function ScoreDisplay({ score, title }: ScoreDisplayProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="w-6 h-6 text-green-600" />;
    if (score >= 60) return <AlertTriangle className="w-6 h-6 text-yellow-600" />;
    return <XCircle className="w-6 h-6 text-red-600" />;
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
        {getScoreIcon(score)}
      </div>
      
      <div className="relative">
        <div className="flex items-end justify-center mb-4">
          <span className={`text-5xl font-bold ${getScoreColor(score)}`}>
            {score}
          </span>
          <span className="text-2xl text-gray-500 mb-2">/100</span>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4">
          <div
            className={`h-3 rounded-full transition-all duration-1000 ease-out ${
              score >= 80 ? 'bg-green-500' : score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${score}%` }}
          ></div>
        </div>
        
        <div className={`text-center py-2 px-4 rounded-lg ${getScoreBg(score)}`}>
          <span className={`font-medium ${getScoreColor(score)}`}>
            {score >= 80 ? 'Excellent' : score >= 60 ? 'Good' : 'Needs Improvement'}
          </span>
        </div>
      </div>
    </div>
  );
}