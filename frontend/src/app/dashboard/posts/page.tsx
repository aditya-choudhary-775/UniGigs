import { OpenTaskCard } from "@/components/open-task-card";
import { IconTrash } from "@tabler/icons-react";
import React from "react";

export default function PostsPage() {
  const days = 4;
  const hours = 16;
  const minutes = 50;
  const seconds = 36;

  const openTasks = [
    {
      id: 1,
      title: "Poster design for cultural fest",
      description: "Need an eye-catching poster for Instagram and print. Theme and content will be shared.",
      budget: 400,
      deadline: "2026-02-06T18:00:00+05:30",
      applicantsCount: 6,
    },
    {
      id: 2,
      title: "Basic website for college tech club",
      description: "Simple responsive website with Home, About, Events sections.",
      budget: 2000,
      deadline: "2026-02-09T23:59:00+05:30",
      applicantsCount: 3,
    },
    {
      id: 3,
      title: "PPT design for startup competition",
      description: "Clean and modern pitch deck for an inter-college startup event.",
      budget: 600,
      deadline: "2026-02-07T20:00:00+05:30",
      applicantsCount: 4,
    },
    {
      id: 4,
      title: "Instagram reel editing for event recap",
      description: "30–45 sec reel with transitions and background music.",
      budget: 500,
      deadline: "2026-02-05T22:00:00+05:30",
      applicantsCount: 8,
    },
    {
      id: 5,
      title: "Lab journal formatting (PDF)",
      description: "Convert handwritten lab notes into a clean, well-structured PDF.",
      budget: 300,
      deadline: "2026-02-06T21:30:00+05:30",
      applicantsCount: 2,
    },
    {
      id: 6,
      title: "Logo design for entrepreneurship cell",
      description: "Minimal and professional logo for a new E-Cell.",
      budget: 800,
      deadline: "2026-02-10T19:00:00+05:30",
      applicantsCount: 7,
    },
    {
      id: 7,
      title: "Content writing for fest website",
      description: "Short engaging content for About, Events and Sponsors sections.",
      budget: 700,
      deadline: "2026-02-08T17:00:00+05:30",
      applicantsCount: 5,
    },
    {
      id: 8,
      title: "Google Form + Sheet automation",
      description: "Create registration form and link responses to Google Sheets.",
      budget: 400,
      deadline: "2026-02-05T16:00:00+05:30",
      applicantsCount: 1,
    },
    {
      id: 9,
      title: "YouTube thumbnail for college vlog",
      description: "Bold and clickable thumbnail for a YouTube vlog.",
      budget: 350,
      deadline: "2026-02-06T15:00:00+05:30",
      applicantsCount: 6,
    },
    {
      id: 10,
      title: "Fix mobile responsiveness issues",
      description: "Navbar and sections breaking on mobile view. Need CSS fixes.",
      budget: 900,
      deadline: "2026-02-06T23:00:00+05:30",
      applicantsCount: 4,
    },
    {
      id: 11,
      title: "Resume formatting for internships",
      description: "Clean and ATS-friendly resume formatting.",
      budget: 300,
      deadline: "2026-02-07T12:00:00+05:30",
      applicantsCount: 9,
    },
    {
      id: 12,
      title: "Instagram post designs for club",
      description: "Design 3–4 static posts for an upcoming club event.",
      budget: 600,
      deadline: "2026-02-08T18:30:00+05:30",
      applicantsCount: 5,
    },
    {
      id: 13,
      title: "Excel data entry work",
      description: "Enter survey responses into a structured Excel sheet.",
      budget: 250,
      deadline: "2026-02-06T14:00:00+05:30",
      applicantsCount: 3,
    },
    {
      id: 14,
      title: "Landing page for hackathon registration",
      description: "One-page responsive site with event details and registration link.",
      budget: 1200,
      deadline: "2026-02-09T21:00:00+05:30",
      applicantsCount: 6,
    },
    {
      id: 15,
      title: "Proofread final year project report",
      description: "Grammar, clarity and formatting check for project report.",
      budget: 350,
      deadline: "2026-02-07T19:30:00+05:30",
      applicantsCount: 2,
    },
    {
      id: 16,
      title: "Canva presentation template",
      description: "Reusable Canva template for club presentations.",
      budget: 450,
      deadline: "2026-02-08T22:00:00+05:30",
      applicantsCount: 4,
    },
    {
      id: 17,
      title: "Write sponsor outreach emails",
      description: "Professional email drafts to approach event sponsors.",
      budget: 500,
      deadline: "2026-02-07T16:30:00+05:30",
      applicantsCount: 3,
    },
    {
      id: 18,
      title: "Python script to organize files",
      description: "Automation script to rename and organize files in folders.",
      budget: 700,
      deadline: "2026-02-09T20:00:00+05:30",
      applicantsCount: 5,
    },
    {
      id: 19,
      title: "Event budget spreadsheet",
      description: "Create a clean and editable budget sheet for college fest.",
      budget: 400,
      deadline: "2026-02-06T13:00:00+05:30",
      applicantsCount: 2,
    },
    {
      id: 20,
      title: "Basic video editing for YouTube intro",
      description: "Short intro animation for a college YouTube channel.",
      budget: 800,
      deadline: "2026-02-10T20:00:00+05:30",
      applicantsCount: 6,
    }
  ];  

  return (
    <div className="flex flex-wrap items-center gap-6 p-2">
      {openTasks.map((task) => {
        return (
          <OpenTaskCard key={task.id} task={task} />
        );
      })}
    </div>
  );
}
