import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { FileUpload } from './components/FileUpload';
import { ScoreDisplay } from './components/ScoreDisplay';
import { ScoreBreakdown } from './components/ScoreBreakdown';
import { KeywordAnalysis } from './components/KeywordAnalysis';
import { Recommendations } from './components/Recommendations';
import { PerfectResumeGuideComponent } from './components/PerfectResumeGuide';
import { PrioritizedActions } from './components/PrioritizedActions';
import { analyzeResume } from './utils/atsAnalyzer';
import { UploadedFile, ResumeAnalysis } from './types';

function App() {
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: false,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleFileUpload = async (file: UploadedFile) => {
    setIsAnalyzing(true);
    
    // Simulate analysis delay
    setTimeout(() => {
      const result = analyzeResume(file);
      setAnalysis(result);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {!analysis ? (
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Get Your ATS Resume Score
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Upload your resume and get instant feedback on how well it will perform 
                  with Applicant Tracking Systems used by employers.
                </p>
              </div>
              
              <FileUpload onFileUpload={handleFileUpload} isAnalyzing={isAnalyzing} />
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                {/* 1 */}
                <div className="flex h-full">
                  <div className="p-6 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 w-full h-full">
                    <div>
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📊</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Instant Analysis</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Get your ATS score and detailed breakdown in seconds</p>
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="flex h-full">
                  <div className="p-6 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 w-full h-full">
                    <div>
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Keyword Optimization</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">See which keywords you're missing and which ones you have</p>
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div className="flex h-full">
                  <div className="p-6 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 w-full h-full">
                    <div>
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🤖</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">AI-Powered Insights</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Smart algorithms highlight strengths and weaknesses in your resume</p>
                    </div>
                  </div>
                </div>
                {/* 4 */}
                <div className="flex h-full">
                  <div className="p-6 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 w-full h-full">
                    <div>
                      <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">💡</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Actionable Tips</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Get specific recommendations to improve your resume</p>
                    </div>
                  </div>
                </div>
                {/* 5 */}
                <div className="flex h-full">
                  <div className="p-6 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 w-full h-full">
                    <div>
                      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🔒</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Privacy First</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Your resume is never stored or shared. 100% privacy guaranteed</p>
                    </div>
                  </div>
                </div>
                {/* 6 */}
                <div className="flex h-full">
                  <div className="p-6 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 w-full h-full">
                    <div>
                      <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📄</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">PDF Report</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Download a professional PDF report of your resume analysis</p>
                    </div>
                  </div>
                </div>
                {/* 7 */}
                <div className="flex h-full">
                  <div className="p-6 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 w-full h-full">
                    <div>
                      <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📱</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Mobile Friendly</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Use the app seamlessly on any device, anywhere</p>
                    </div>
                  </div>
                </div>
                {/* 8 */}
                <div className="flex h-full">
                  <div className="p-6 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 w-full h-full">
                    <div>
                      <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🔍</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Job Match Predictor</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">See how well your resume matches a job description</p>
                    </div>
                  </div>
                </div>
                {/* 9 */}
                <div className="flex h-full">
                  <div className="p-6 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 w-full h-full">
                    <div>
                      <div className="w-12 h-12 bg-lime-100 dark:bg-lime-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Fast & Secure</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Lightning-fast analysis with enterprise-grade security</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Your Resume Analysis</h2>
                <p className="text-gray-600 dark:text-gray-300">Here's how your resume performs against ATS systems</p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <ScoreDisplay score={analysis.overallScore} title="Overall ATS Score" />
                </div>
                
                <div className="lg:col-span-2">
                  <ScoreBreakdown analysis={analysis} />
                </div>
              </div>
              
              <KeywordAnalysis analysis={analysis} />
              
              <Recommendations analysis={analysis} />
              
              <div className="grid lg:grid-cols-2 gap-8">
                <PrioritizedActions actions={analysis.prioritizedActions} />
                <div className="lg:col-span-1">
                  <PerfectResumeGuideComponent guide={analysis.perfectResumeGuide} />
                </div>
              </div>
              
              <div className="text-center">
                <button
                  onClick={() => {
                    setAnalysis(null);
                    setIsAnalyzing(false);
                  }}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Analyze Another Resume
                </button>
              </div>
            </div>
          )}
        </main>
        
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300">
                © 2025 ResumeScore. Built to help you land your dream job.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;