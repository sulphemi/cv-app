export interface EducationItem {
  school: string;
  title: string;
  startYear: string;
  endYear: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  responsibilities: string;
  startYear: string;
  endYear: string;
}

export interface FormDataType {
  name: string;
  email: string;
  phone: string;
  education: EducationItem[];
  experience: ExperienceItem[];
}
