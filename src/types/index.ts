export interface ResumeAnalysis {
  overallScore: number;
  breakdown: {
    keywords: number;
    formatting: number;
    structure: number;
    experience: number;
    skills: number;
    education: number;
  };
  recommendations: string[];
  keywordMatches: {
    found: string[];
    missing: string[];
  };
  formatIssues: string[];
  strengths: string[];
  perfectResumeGuide: PerfectResumeGuide;
  prioritizedActions: PrioritizedAction[];
}

export interface PerfectResumeGuide {
  essentialElements: GuideSection[];
  formattingBestPractices: GuideSection[];
  contentOptimization: GuideSection[];
  atsOptimization: GuideSection[];
}

export interface GuideSection {
  title: string;
  description: string;
  tips: string[];
  examples?: string[];
}

export interface PrioritizedAction {
  priority: 'high' | 'medium' | 'low';
  category: string;
  action: string;
  impact: string;
  timeToComplete: string;
}

export interface UploadedFile {
  name: string;
  size: number;
  type: string;
  content: string;
}