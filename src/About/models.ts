import type { Text } from '../i18n';

export interface CvData {
  name: string;
  function: Text;
  email: string;
  aboutMe: Text;
  links: LinkInfo[];
  employers: Employer[];
  educations: Education[];
  presentations: Presentation[];
  mainSkills: MainSkillCategory[];
  skills: SkillOverview[];
}

export interface LinkInfo {
  label: string;
  href: string;
}

export interface Employer {
  id: string;
  name: string;
  logo: string;
  period: string;
  activity: Text;
  description?: Text; // HTML
  courses: Course[];
}

export interface Course {
  img?: string;
  name: Text;
  role?: string;
  line?: string;
  period: string;
  keywords: string[];
  description?: Text; // HTML
}

export interface Education {
  degree: Text;
  school: Text;
  period: string;
}

export interface Presentation {
  title: string;
  period: string; // "MM/YYYY"
  img: string;
  topics: string[];
  description: Text; // HTML
}

export interface MainSkillCategory {
  name: Text;
  skills: MainSkill[];
}
export interface MainSkill {
  name: Text;
  rating: number;
  description: Text;
}

export interface SkillOverview {
  name: Text;
  skills: Text[];
}
