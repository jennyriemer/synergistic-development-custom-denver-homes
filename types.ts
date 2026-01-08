
export type ProjectCategory = 'New Build' | 'Remodel' | 'Pop-Top' | 'Multi-Unit';

export interface ProjectFact {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  image: string;
  description: string;
  longDescription?: string;
  gallery?: string[];
  facts?: ProjectFact[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
