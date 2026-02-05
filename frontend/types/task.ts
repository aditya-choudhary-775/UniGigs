// types/task.ts
export interface Task {
  id: number;
  postedBy: string,
  profilePicLink: string,
  title: string;
  description: string,
  category: string,
  budget: number;
  deadline: string; // ISO string
}
