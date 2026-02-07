export interface CompletedTask {
  id: number,
  title: string,
  description: string,
  budget: number,
  postedAt: string,
  deadline: string,
  completedBy: {
    name: string,
    profilePicLink: string,
  },
};