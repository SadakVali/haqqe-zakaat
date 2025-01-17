export type JobType = {
  companyLogo: string;
  workMode: 'remote' | 'office' | 'hybrid';
  city: string;
  address: string;
  minSalary: number | null;
  type: string;
  category: string;
  maxSalary: number | null;
  minExperience: number | null;
  maxExperience: number | null;
  skills: string[];
  id: string;
  title: string;
  description: string | null;
  companyName: string;
  postedAt: Date;
};

export type getAllJobsAdditonalType = {
  jobs: JobType[];
  totalJobs: number;
};

export type getAllRecommendedJobs = {
  jobs: JobType[];
};

export type getJobType = {
  job: JobType | null;
};
