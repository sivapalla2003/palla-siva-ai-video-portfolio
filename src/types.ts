export interface Project {
  id: string;
  projectNumber: string;
  title: string;
  category: string;
  description: string;
  driveFileId: string;
  tools: string[];
  focusType: 'prompt' | 'filmmaking';
  focusItems: string[];
  visualDirection?: string[];
  story?: string;
  storyBeats?: string[];
  character?: string;
  presenter?: string;
  voice?: string;
  credits?: {
    role: string;
    person: string;
  }[];
  filmmakerNote?: string;
  isLiveAction?: boolean;
}

export interface PromptArchitectureItem {
  key: string;
  question: string;
  description: string;
  example: string;
}

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface ToolCategory {
  category: string;
  tools: string[];
}
