import type { Text } from '../i18n';

// "MM/YYYY"; the year is ${number} because a four-digit union (12 × 10⁴ members, squared for a range) is too big for TypeScript
type Month = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12';
export type MonthYear = `${Month}/${number}`;
// "MM/YYYY – MM/YYYY" or "MM/YYYY – now", with an en dash
export type Range = `${MonthYear} – ${MonthYear | 'now'}`;
export type Period = Range | MonthYear;

export interface CvData {
  name: string;
  function: Text;
  location: Text;
  locationHref: string;
  email: string;
  drivingLicense: string;
  yearOfBirth: number;
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
  period: Range;
  activity: Text;
  description?: Text; // HTML
  courses: Course[];
}

export interface Course {
  id: string;
  img?: string;
  name: Text;
  role?: string;
  line?: string;
  period: Period;
  keywords: Text[];
  description?: Text; // HTML
}

export interface Education {
  degree: Text;
  school: Text;
  period: Range;
}

export interface Presentation {
  title: string;
  period: MonthYear;
  img: string;
  topics: string[];
  description: Text; // HTML
}

export interface MainSkillCategory {
  id: string;
  name: Text;
  skills: MainSkill[];
}
export interface MainSkill {
  name: Text;
  rating: number;
  description: Text;
}

export interface SkillOverview {
  id: string;
  name: Text;
  skills: Text[];
}
