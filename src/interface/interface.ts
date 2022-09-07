export interface Job {
  job: string;
  company: string;
  period: string;
  role: string;
  description: string;
  time?: string;
}

export interface PersonalProjects {
  title?: string;
  subtitle?: string;
  tools?: string;
  description?: string;
  buttonText?: string;
  href?: string;
  externalHref?: string;
}

export interface WorkTechs {
  title?: string;
  badge?: string;
  description?: string;
  icon?: any;
  iconColor?: any;
}

export interface User {
  name: string;
  avatar_url: string;
}

export interface HeaderProps {
  withProfile?: boolean;
}
