export interface InProgressTask {
  id: number,
  title: string,
  description: string,
  budget: number,
  deadline: string,
  applicantsCount: number,
  assignedTo: {
    name: string,
    profilePicLink: string,
  }
};