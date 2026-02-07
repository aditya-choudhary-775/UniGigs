import React from "react";
import { CompletedTask } from "../../../../../types/completed-task";
import { CompletedTaskCard } from "@/components/completed-task-card";

export default function CompletedPage() {
  const completedTasks: CompletedTask[] = [
    {
      id: 201,
      title: "Poster design for cultural fest",
      description:
        "Designed an Instagram and print-ready poster for the annual cultural fest.",
      budget: 400,
      postedAt: "2026-01-24T10:30:00+05:30",
      deadline: "2026-01-28T18:00:00+05:30",
      completedBy: {
        name: "Riya Patel",
        profilePicLink: "https://i.pravatar.cc/150?img=11",
      },
    },
    {
      id: 202,
      title: "Club website landing page",
      description: "Built a responsive landing page for the college tech club.",
      budget: 1800,
      postedAt: "2026-01-21T14:00:00+05:30",
      deadline: "2026-01-25T23:59:00+05:30",
      completedBy: {
        name: "Aakash Verma",
        profilePicLink: "https://i.pravatar.cc/150?img=12",
      },
    },
    {
      id: 203,
      title: "Startup pitch deck design",
      description:
        "Created a clean and modern pitch deck for startup competition.",
      budget: 700,
      postedAt: "2026-01-23T16:15:00+05:30",
      deadline: "2026-01-27T20:00:00+05:30",
      completedBy: {
        name: "Sneha Kulkarni",
        profilePicLink: "https://i.pravatar.cc/150?img=13",
      },
    },
    {
      id: 204,
      title: "Instagram reel editing",
      description:
        "Edited a 40-second event recap reel with transitions and music.",
      budget: 600,
      postedAt: "2026-01-22T18:45:00+05:30",
      deadline: "2026-01-26T22:00:00+05:30",
      completedBy: {
        name: "Mohit Jain",
        profilePicLink: "https://i.pravatar.cc/150?img=14",
      },
    },
    {
      id: 205,
      title: "Lab journal formatting",
      description: "Converted handwritten lab notes into a clean PDF format.",
      budget: 350,
      postedAt: "2026-01-26T11:00:00+05:30",
      deadline: "2026-01-29T19:30:00+05:30",
      completedBy: {
        name: "Pallavi Deshmukh",
        profilePicLink: "https://i.pravatar.cc/150?img=15",
      },
    },
    {
      id: 206,
      title: "Logo for entrepreneurship cell",
      description: "Designed a minimal logo for the college E-Cell.",
      budget: 900,
      postedAt: "2026-01-20T09:30:00+05:30",
      deadline: "2026-01-24T18:00:00+05:30",
      completedBy: {
        name: "Harsh Mehta",
        profilePicLink: "https://i.pravatar.cc/150?img=16",
      },
    },
    {
      id: 207,
      title: "Website content writing",
      description: "Wrote engaging content for the college fest website.",
      budget: 750,
      postedAt: "2026-01-24T13:00:00+05:30",
      deadline: "2026-01-28T17:30:00+05:30",
      completedBy: {
        name: "Nandini Rao",
        profilePicLink: "https://i.pravatar.cc/150?img=17",
      },
    },
    {
      id: 208,
      title: "Google Form automation",
      description:
        "Set up Google Form with auto-response and Sheets integration.",
      budget: 450,
      postedAt: "2026-01-27T10:00:00+05:30",
      deadline: "2026-01-30T17:00:00+05:30",
      completedBy: {
        name: "Rohit Singh",
        profilePicLink: "https://i.pravatar.cc/150?img=18",
      },
    },
    {
      id: 209,
      title: "YouTube thumbnail design",
      description: "Designed a high-click thumbnail for a college vlog.",
      budget: 400,
      postedAt: "2026-01-26T12:30:00+05:30",
      deadline: "2026-01-29T16:00:00+05:30",
      completedBy: {
        name: "Isha Malhotra",
        profilePicLink: "https://i.pravatar.cc/150?img=19",
      },
    },
    {
      id: 210,
      title: "Fix mobile navbar issues",
      description: "Resolved navbar responsiveness issues on mobile devices.",
      budget: 850,
      postedAt: "2026-01-23T19:00:00+05:30",
      deadline: "2026-01-27T22:00:00+05:30",
      completedBy: {
        name: "Karan Gupta",
        profilePicLink: "https://i.pravatar.cc/150?img=20",
      },
    },
    {
      id: 211,
      title: "Resume redesign",
      description: "Redesigned resume layout to be ATS-friendly.",
      budget: 300,
      postedAt: "2026-01-29T09:00:00+05:30",
      deadline: "2026-01-31T13:00:00+05:30",
      completedBy: {
        name: "Ankit Sharma",
        profilePicLink: "https://i.pravatar.cc/150?img=21",
      },
    },
    {
      id: 212,
      title: "Instagram creatives for event",
      description:
        "Designed multiple Instagram creatives for college event promotion.",
      budget: 650,
      postedAt: "2026-01-22T15:30:00+05:30",
      deadline: "2026-01-26T19:00:00+05:30",
      completedBy: {
        name: "Rutuja Patil",
        profilePicLink: "https://i.pravatar.cc/150?img=22",
      },
    },
    {
      id: 213,
      title: "Excel data cleanup",
      description: "Cleaned and structured raw survey data in Excel.",
      budget: 300,
      postedAt: "2026-01-28T10:00:00+05:30",
      deadline: "2026-01-30T15:00:00+05:30",
      completedBy: {
        name: "Siddharth Nair",
        profilePicLink: "https://i.pravatar.cc/150?img=23",
      },
    },
    {
      id: 214,
      title: "Hackathon landing page",
      description: "Built a one-page site for hackathon registration.",
      budget: 1400,
      postedAt: "2026-01-21T17:00:00+05:30",
      deadline: "2026-01-25T22:00:00+05:30",
      completedBy: {
        name: "Tanmay Kulkarni",
        profilePicLink: "https://i.pravatar.cc/150?img=24",
      },
    },
    {
      id: 215,
      title: "Project report proofreading",
      description:
        "Proofread and corrected grammar in final year project report.",
      budget: 400,
      postedAt: "2026-01-26T14:00:00+05:30",
      deadline: "2026-01-28T20:00:00+05:30",
      completedBy: {
        name: "Aditi Joshi",
        profilePicLink: "https://i.pravatar.cc/150?img=25",
      },
    },
    {
      id: 216,
      title: "Canva presentation template",
      description: "Created a reusable Canva presentation template.",
      budget: 500,
      postedAt: "2026-01-24T16:00:00+05:30",
      deadline: "2026-01-27T21:30:00+05:30",
      completedBy: {
        name: "Yash Kulkarni",
        profilePicLink: "https://i.pravatar.cc/150?img=26",
      },
    },
    {
      id: 217,
      title: "Sponsor outreach email drafts",
      description: "Drafted professional sponsor outreach emails.",
      budget: 550,
      postedAt: "2026-01-27T11:30:00+05:30",
      deadline: "2026-01-29T17:00:00+05:30",
      completedBy: {
        name: "Kritika Bansal",
        profilePicLink: "https://i.pravatar.cc/150?img=27",
      },
    },
    {
      id: 218,
      title: "Python file automation script",
      description: "Built a Python script to organize files automatically.",
      budget: 750,
      postedAt: "2026-01-23T20:00:00+05:30",
      deadline: "2026-01-26T19:30:00+05:30",
      completedBy: {
        name: "Pranav Kulkarni",
        profilePicLink: "https://i.pravatar.cc/150?img=28",
      },
    },
    {
      id: 219,
      title: "College fest budget spreadsheet",
      description: "Created a detailed and editable budget spreadsheet.",
      budget: 450,
      postedAt: "2026-01-29T09:45:00+05:30",
      deadline: "2026-01-31T14:30:00+05:30",
      completedBy: {
        name: "Neel Shah",
        profilePicLink: "https://i.pravatar.cc/150?img=29",
      },
    },
    {
      id: 220,
      title: "YouTube intro animation",
      description:
        "Designed a short animated intro for a college YouTube channel.",
      budget: 900,
      postedAt: "2026-01-20T18:00:00+05:30",
      deadline: "2026-01-24T21:00:00+05:30",
      completedBy: {
        name: "Manasi Kulkarni",
        profilePicLink: "https://i.pravatar.cc/150?img=30",
      },
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-6 bg-red-50 p-2">
      {completedTasks.map((task) => {
        return <CompletedTaskCard task={task} key={task.id} />;
      })}
    </div>
  );
}
