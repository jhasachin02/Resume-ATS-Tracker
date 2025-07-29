import React from 'react';
import { Clock, TrendingUp, AlertCircle, CheckCircle2, Zap } from 'lucide-react';
import { PrioritizedAction } from '../types';

interface PrioritizedActionsProps {
  actions: PrioritizedAction[];
}

export function PrioritizedActions({ actions }: PrioritizedActionsProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <AlertCircle className="w-4 h-4" />;
      case 'medium':
        return <Zap className="w-4 h-4" />;
      case 'low':
        return <CheckCircle2 className="w-4 h-4" />;
      default:
        return <CheckCircle2 className="w-4 h-4" />;
    }
  };

  const sortedActions = [...actions].sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <TrendingUp className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Prioritized Action Plan</h3>
      </div>

      <div className="space-y-4">
        {sortedActions.map((action, index) => (
          <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(action.priority)}`}>
                  {getPriorityIcon(action.priority)}
                  <span className="capitalize">{action.priority} Priority</span>
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                  {action.category}
                </span>
              </div>
              <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{action.timeToComplete}</span>
              </div>
            </div>
            
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{action.action}</h4>
            
            <div className="flex items-start space-x-3 text-sm">
              <div className="flex-1">
                <span className="text-gray-600 dark:text-gray-400">Expected Impact:</span>
                <p className="text-gray-800 dark:text-gray-200 mt-1">{action.impact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <div className="flex items-start space-x-3">
          <div className="w-6 h-6 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-blue-600 text-sm font-bold">💡</span>
          </div>
          <div>
            <h4 className="font-medium text-blue-900 dark:text-blue-200 mb-1">Pro Tip</h4>
            <p className="text-sm text-blue-800 dark:text-blue-300">
              Focus on high-priority actions first for maximum impact. Each improvement builds on the previous one, 
              creating a compound effect that significantly boosts your ATS score and overall resume effectiveness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}