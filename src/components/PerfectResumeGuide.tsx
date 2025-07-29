import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronRight, Star, Target, Zap, Shield } from 'lucide-react';
import { PerfectResumeGuide } from '../types';

interface PerfectResumeGuideProps {
  guide: PerfectResumeGuide;
}

export function PerfectResumeGuideComponent({ guide }: PerfectResumeGuideProps) {
  const [activeSection, setActiveSection] = useState<string>('essentialElements');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const sections = [
    { key: 'essentialElements', title: 'Essential Elements', icon: Star, color: 'blue' },
    { key: 'formattingBestPractices', title: 'Formatting Best Practices', icon: Target, color: 'green' },
    { key: 'contentOptimization', title: 'Content Optimization', icon: Zap, color: 'yellow' },
    { key: 'atsOptimization', title: 'ATS Optimization', icon: Shield, color: 'purple' }
  ];

  const toggleExpanded = (itemKey: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemKey)) {
      newExpanded.delete(itemKey);
    } else {
      newExpanded.add(itemKey);
    }
    setExpandedItems(newExpanded);
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-700 border-blue-200',
      green: 'bg-green-50 text-green-700 border-green-200',
      yellow: 'bg-yellow-50 text-yellow-700 border-yellow-200',
      purple: 'bg-purple-50 text-purple-700 border-purple-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      yellow: 'text-yellow-600',
      purple: 'text-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <BookOpen className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Perfect Resume Guide</h3>
      </div>

      {/* Section Navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.key;
          return (
            <button
              key={section.key}
              onClick={() => setActiveSection(section.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                isActive 
                  ? getColorClasses(section.color)
                  : 'bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? getIconColorClasses(section.color) : 'text-gray-500'}`} />
              <span className="text-sm font-medium">{section.title}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="space-y-4">
        {guide[activeSection as keyof PerfectResumeGuide].map((item, index) => {
          const itemKey = `${activeSection}-${index}`;
          const isExpanded = expandedItems.has(itemKey);
          
          return (
            <div key={itemKey} className="border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleExpanded(itemKey)}
                className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center justify-between transition-colors"
              >
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{item.description}</p>
                </div>
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                )}
              </button>
              
              {isExpanded && (
                <div className="px-6 py-4 bg-white dark:bg-gray-800">
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white mb-2">Key Tips:</h5>
                      <ul className="space-y-2">
                        {item.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {item.examples && item.examples.length > 0 && (
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white mb-2">Examples:</h5>
                        <div className="space-y-2">
                          {item.examples.map((example, exampleIndex) => (
                            <div key={exampleIndex} className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                              <p className="text-sm text-gray-700 dark:text-gray-300 font-mono">{example}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}