import { ResumeAnalysis, UploadedFile, PerfectResumeGuide, PrioritizedAction } from '../types';

const commonKeywords = [
  'leadership', 'management', 'teamwork', 'communication', 'problem-solving',
  'analytical', 'strategic', 'innovative', 'results-driven', 'collaborative',
  'project management', 'data analysis', 'customer service', 'sales',
  'marketing', 'finance', 'operations', 'technical', 'creative', 'detail-oriented'
];

const technicalKeywords = [
  'javascript', 'python', 'react', 'node.js', 'sql', 'aws', 'docker',
  'kubernetes', 'agile', 'scrum', 'git', 'api', 'database', 'cloud',
  'machine learning', 'artificial intelligence', 'data science'
];

export function analyzeResume(file: UploadedFile): ResumeAnalysis {
  const content = file.content.toLowerCase();
  
  // Simulate text extraction and analysis
  const foundKeywords = [...commonKeywords, ...technicalKeywords].filter(
    keyword => content.includes(keyword.toLowerCase())
  );
  
  const missingKeywords = [...commonKeywords, ...technicalKeywords]
    .filter(keyword => !content.includes(keyword.toLowerCase()))
    .slice(0, 10);

  // Calculate scores based on various factors
  const keywordScore = Math.min((foundKeywords.length / 15) * 100, 100);
  const formattingScore = Math.random() * 20 + 70; // Simulate formatting analysis
  const structureScore = Math.random() * 25 + 65;
  const experienceScore = Math.random() * 30 + 60;
  const skillsScore = Math.random() * 25 + 70;
  const educationScore = Math.random() * 20 + 75;

  const overallScore = Math.round(
    (keywordScore * 0.3 + 
     formattingScore * 0.2 + 
     structureScore * 0.2 + 
     experienceScore * 0.15 + 
     skillsScore * 0.1 + 
     educationScore * 0.05)
  );

  const recommendations = generateRecommendations(overallScore, foundKeywords.length);
  const formatIssues = generateFormatIssues();
  const strengths = generateStrengths(foundKeywords);
  const perfectResumeGuide = generatePerfectResumeGuide();
  const prioritizedActions = generatePrioritizedActions(overallScore, foundKeywords.length);

  return {
    overallScore,
    breakdown: {
      keywords: Math.round(keywordScore),
      formatting: Math.round(formattingScore),
      structure: Math.round(structureScore),
      experience: Math.round(experienceScore),
      skills: Math.round(skillsScore),
      education: Math.round(educationScore)
    },
    recommendations,
    keywordMatches: {
      found: foundKeywords.slice(0, 15),
      missing: missingKeywords
    },
    formatIssues,
    strengths,
    perfectResumeGuide,
    prioritizedActions
  };
}

function generateRecommendations(score: number, keywordCount: number): string[] {
  const recommendations = [];
  
  if (score < 70) {
    recommendations.push('Consider restructuring your resume with clear sections and bullet points');
    recommendations.push('Add more relevant keywords from the job description');
  }
  
  if (keywordCount < 10) {
    recommendations.push('Include more industry-specific keywords and skills');
    recommendations.push('Quantify your achievements with specific numbers and metrics');
  }
  
  recommendations.push('Use a clean, ATS-friendly format without complex layouts');
  recommendations.push('Include relevant certifications and technical skills');
  recommendations.push('Tailor your resume for each specific job application');
  
  return recommendations;
}

function generateFormatIssues(): string[] {
  const issues = [
    'Consider using standard section headers (Experience, Education, Skills)',
    'Avoid using tables, text boxes, or complex formatting',
    'Use a standard font like Arial, Calibri, or Times New Roman',
    'Ensure consistent formatting throughout the document'
  ];
  
  return issues.slice(0, Math.floor(Math.random() * 3) + 1);
}

function generateStrengths(foundKeywords: string[]): string[] {
  const strengths = [];
  
  if (foundKeywords.length > 10) {
    strengths.push('Good keyword optimization');
  }
  
  strengths.push('Clear professional experience section');
  strengths.push('Relevant skills highlighted');
  strengths.push('Proper use of action verbs');
  
  return strengths;
}

function generatePerfectResumeGuide(): PerfectResumeGuide {
  return {
    essentialElements: [
      {
        title: "Professional Header",
        description: "Your header should be clean, professional, and ATS-friendly",
        tips: [
          "Include full name, phone number, email, and LinkedIn profile",
          "Use a professional email address (firstname.lastname@email.com)",
          "Add your city and state (full address not required)",
          "Include relevant certifications or licenses if applicable"
        ],
        examples: [
          "John Smith | (555) 123-4567 | john.smith@email.com | linkedin.com/in/johnsmith | New York, NY"
        ]
      },
      {
        title: "Professional Summary",
        description: "A compelling 3-4 line summary that highlights your value proposition",
        tips: [
          "Start with your years of experience and key expertise",
          "Include 2-3 most relevant skills or achievements",
          "Use keywords from the job description",
          "Keep it concise and impactful (50-100 words)"
        ],
        examples: [
          "Results-driven Software Engineer with 5+ years developing scalable web applications. Expertise in React, Node.js, and cloud technologies. Led cross-functional teams to deliver projects 20% ahead of schedule."
        ]
      },
      {
        title: "Work Experience",
        description: "Quantified achievements that demonstrate your impact",
        tips: [
          "Use reverse chronological order",
          "Include company name, job title, dates, and location",
          "Start each bullet with strong action verbs",
          "Quantify achievements with numbers, percentages, or dollar amounts",
          "Focus on results and impact, not just responsibilities"
        ]
      },
      {
        title: "Skills Section",
        description: "Strategic placement of relevant technical and soft skills",
        tips: [
          "Separate technical skills from soft skills",
          "List skills in order of relevance to the job",
          "Include proficiency levels when appropriate",
          "Match skills to job description keywords"
        ]
      }
    ],
    formattingBestPractices: [
      {
        title: "ATS-Friendly Format",
        description: "Ensure your resume can be properly parsed by ATS systems",
        tips: [
          "Use standard fonts (Arial, Calibri, Times New Roman)",
          "Keep font size between 10-12 points",
          "Use standard section headers (Experience, Education, Skills)",
          "Avoid tables, text boxes, headers, and footers",
          "Save as both PDF and Word document",
          "Use simple bullet points (• or -)"
        ]
      },
      {
        title: "Visual Hierarchy",
        description: "Create a clean, scannable layout that guides the reader's eye",
        tips: [
          "Use consistent formatting throughout",
          "Maintain adequate white space",
          "Align text consistently (left-aligned is safest)",
          "Use bold sparingly for emphasis",
          "Keep margins between 0.5-1 inch"
        ]
      },
      {
        title: "Length Guidelines",
        description: "Optimize resume length based on your experience level",
        tips: [
          "1 page for entry-level (0-5 years experience)",
          "2 pages for mid-level (5-15 years experience)",
          "3+ pages only for senior executives or academic positions",
          "Every line should add value - remove filler content"
        ]
      }
    ],
    contentOptimization: [
      {
        title: "Achievement-Focused Writing",
        description: "Transform job duties into compelling achievements",
        tips: [
          "Use the STAR method (Situation, Task, Action, Result)",
          "Start with strong action verbs (Led, Developed, Implemented, Achieved)",
          "Include specific metrics and outcomes",
          "Show progression and growth in your career",
          "Tailor content to match job requirements"
        ],
        examples: [
          "Instead of: 'Responsible for managing social media accounts'",
          "Write: 'Managed 5 social media accounts, increasing engagement by 45% and followers by 2,000 in 6 months'"
        ]
      },
      {
        title: "Keyword Optimization",
        description: "Strategic use of industry keywords and phrases",
        tips: [
          "Analyze job descriptions for key terms",
          "Include both acronyms and full terms (SEO and Search Engine Optimization)",
          "Use keywords naturally in context",
          "Include industry-specific terminology",
          "Match the language used in the job posting"
        ]
      },
      {
        title: "Relevance and Recency",
        description: "Focus on the most relevant and recent experiences",
        tips: [
          "Prioritize recent experience (last 10-15 years)",
          "Include only relevant positions and achievements",
          "Remove outdated technologies or skills",
          "Emphasize transferable skills for career changes",
          "Update regularly to reflect current market demands"
        ]
      }
    ],
    atsOptimization: [
      {
        title: "Keyword Density",
        description: "Balance keyword usage for optimal ATS performance",
        tips: [
          "Aim for 2-3% keyword density",
          "Use variations of important keywords",
          "Include keywords in multiple sections",
          "Avoid keyword stuffing",
          "Use synonyms and related terms"
        ]
      },
      {
        title: "File Format Best Practices",
        description: "Choose the right format for ATS compatibility",
        tips: [
          "Submit PDF unless specifically asked for Word",
          "Use descriptive file names (FirstName_LastName_Resume.pdf)",
          "Ensure text is selectable in PDF format",
          "Test your resume in different ATS systems if possible",
          "Keep a plain text version as backup"
        ]
      },
      {
        title: "Section Organization",
        description: "Structure your resume for optimal ATS parsing",
        tips: [
          "Use standard section headers",
          "Place contact information at the top",
          "List experience in reverse chronological order",
          "Include dates in MM/YYYY format",
          "Use consistent formatting for all sections"
        ]
      }
    ]
  };
}

function generatePrioritizedActions(score: number, keywordCount: number): PrioritizedAction[] {
  const actions: PrioritizedAction[] = [];

  if (score < 60) {
    actions.push({
      priority: 'high',
      category: 'Structure',
      action: 'Restructure resume with clear sections and standard headers',
      impact: 'Improves ATS parsing and readability by 25-30%',
      timeToComplete: '2-3 hours'
    });
  }

  if (keywordCount < 8) {
    actions.push({
      priority: 'high',
      category: 'Keywords',
      action: 'Add 5-10 relevant industry keywords throughout your resume',
      impact: 'Increases keyword match rate by 40-50%',
      timeToComplete: '1-2 hours'
    });
  }

  actions.push({
    priority: 'high',
    category: 'Achievements',
    action: 'Quantify 3-5 achievements with specific numbers or percentages',
    impact: 'Makes your impact more compelling and measurable',
    timeToComplete: '1-2 hours'
  });

  actions.push({
    priority: 'medium',
    category: 'Formatting',
    action: 'Ensure consistent formatting and remove any graphics or tables',
    impact: 'Improves ATS compatibility by 15-20%',
    timeToComplete: '30-60 minutes'
  });

  actions.push({
    priority: 'medium',
    category: 'Skills',
    action: 'Create a dedicated skills section with relevant technical skills',
    impact: 'Increases keyword matches and showcases expertise',
    timeToComplete: '30 minutes'
  });

  actions.push({
    priority: 'low',
    category: 'Summary',
    action: 'Add a professional summary highlighting your key value proposition',
    impact: 'Provides quick overview for recruiters and hiring managers',
    timeToComplete: '45 minutes'
  });

  actions.push({
    priority: 'low',
    category: 'Contact',
    action: 'Update contact information and add LinkedIn profile',
    impact: 'Ensures recruiters can easily reach you',
    timeToComplete: '15 minutes'
  });

  return actions;
}