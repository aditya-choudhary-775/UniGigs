import { InProgressTaskCard } from "@/components/in-progress-task-card";
import React from "react";
import { InProgressTask } from "../../../../../types/in-progress-task";

export default function InProgressPage() {
  const inProgressTasks: InProgressTask[] = [
    {
      id: 101,
      title: "Poster design for tech symposium",
      description: "Need a modern poster for Instagram and print promotion.",
      budget: 500,
      deadline: "2026-02-06T20:00:00+05:30",
      applicantsCount: 5,
      assignedTo: {
        name: "Riya Patel",
        profilePicLink: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F0018cb67627502233334ececcd398c4e.png&w=400&q=85&dpl=dpl_3qb9v8Vqe59231u2TJJ7kT5wgVu1",
      },
    },
    {
      id: 102,
      title: "Club website homepage redesign",
      description: "Redesign the homepage UI for our existing club website.",
      budget: 1800,
      deadline: "2026-02-08T23:59:00+05:30",
      applicantsCount: 4,
      assignedTo: {
        name: "Aakash Verma",
        profilePicLink: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F59090cc55ae1a260eecef3af64d32ff4.png&w=400&q=85&dpl=dpl_3qb9v8Vqe59231u2TJJ7kT5wgVu1",
      },
    },
    {
      id: 103,
      title: "Pitch deck for startup idea",
      description:
        "Create a clean PPT for pitching at a college startup event.",
      budget: 700,
      deadline: "2026-02-07T21:00:00+05:30",
      applicantsCount: 6,
      assignedTo: {
        name: "Sneha Kulkarni",
        profilePicLink: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F8d3de659bfe593c5a4ef0376bd3d2c07.png&w=400&q=85&dpl=dpl_3qb9v8Vqe59231u2TJJ7kT5wgVu1",
      },
    },
    {
      id: 104,
      title: "Event recap reel editing",
      description: "Edit a 40-second Instagram reel from provided raw clips.",
      budget: 600,
      deadline: "2026-02-05T23:00:00+05:30",
      applicantsCount: 7,
      assignedTo: {
        name: "Mohit Jain",
        profilePicLink: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F9d29d4b790d6af68352e2fee61d19842.png&w=400&q=85&dpl=dpl_3qb9v8Vqe59231u2TJJ7kT5wgVu1",
      },
    },
    {
      id: 105,
      title: "Lab journal formatting",
      description: "Format handwritten lab notes into a neat PDF.",
      budget: 350,
      deadline: "2026-02-06T19:30:00+05:30",
      applicantsCount: 3,
      assignedTo: {
        name: "Pallavi Deshmukh",
        profilePicLink: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F73f28b3c79c238dfe2edad5d6fd1c430.png&w=400&q=85&dpl=dpl_3qb9v8Vqe59231u2TJJ7kT5wgVu1",
      },
    },
    {
      id: 106,
      title: "Logo for cultural committee",
      description: "Minimal logo design for college cultural committee.",
      budget: 900,
      deadline: "2026-02-09T18:00:00+05:30",
      applicantsCount: 8,
      assignedTo: {
        name: "Harsh Mehta",
        profilePicLink: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2Fd5a37474e713bb5c2efacfde7f42b9ba.png&w=400&q=85&dpl=dpl_3qb9v8Vqe59231u2TJJ7kT5wgVu1",
      },
    },
    {
      id: 107,
      title: "Website content writing",
      description: "Write short content sections for fest website.",
      budget: 750,
      deadline: "2026-02-08T17:30:00+05:30",
      applicantsCount: 4,
      assignedTo: {
        name: "Nandini Rao",
        profilePicLink: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2Fb00e1ebc65fc7f2c53c9a9a955a49be5.png&w=400&q=85&dpl=dpl_3qb9v8Vqe59231u2TJJ7kT5wgVu1",
      },
    },
    {
      id: 108,
      title: "Google Form automation setup",
      description: "Setup form with auto-response and sheet integration.",
      budget: 450,
      deadline: "2026-02-05T17:00:00+05:30",
      applicantsCount: 2,
      assignedTo: {
        name: "Rohit Singh",
        profilePicLink: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2Fd366ab0ee2889749cbc48c21dbd7a842.png&w=400&q=85&dpl=dpl_3qb9v8Vqe59231u2TJJ7kT5wgVu1",
      },
    },
    {
      id: 109,
      title: "YouTube vlog thumbnail",
      description: "Design a catchy thumbnail for a college vlog.",
      budget: 400,
      deadline: "2026-02-06T16:00:00+05:30",
      applicantsCount: 5,
      assignedTo: {
        name: "Isha Malhotra",
        profilePicLink: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2Fd1499909450ba526d5297e3ebc7f6d07.png&w=400&q=85&dpl=dpl_3qb9v8Vqe59231u2TJJ7kT5wgVu1",
      },
    },
    {
      id: 110,
      title: "Fix navbar responsiveness",
      description: "Fix navbar issues on mobile and tablet screens.",
      budget: 850,
      deadline: "2026-02-06T22:00:00+05:30",
      applicantsCount: 3,
      assignedTo: {
        name: "Karan Gupta",
        profilePicLink: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F4ac5f72f3c24f237f0f7e6d7f767d19e.png&w=400&q=85&dpl=dpl_3qb9v8Vqe59231u2TJJ7kT5wgVu1"
      },
    },
    {
      id: 111,
      title: "Resume redesign",
      description: "Improve resume layout and formatting for internship use.",
      budget: 300,
      deadline: "2026-02-07T13:00:00+05:30",
      applicantsCount: 6,
      assignedTo: {
        name: "Ankit Sharma",
        profilePicLink: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F1fb255dfa8704817151167d37cab665f.png&w=400&q=85&dpl=dpl_3qb9v8Vqe59231u2TJJ7kT5wgVu1",
      },
    },
    {
      id: 112,
      title: "Instagram creatives for event",
      description: "Design 4 static posts for upcoming college event.",
      budget: 650,
      deadline: "2026-02-08T19:00:00+05:30",
      applicantsCount: 4,
      assignedTo: {
        name: "Rutuja Patil",
        profilePicLink: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F50382765fd5648c7876d91cc37b27394.png&w=400&q=85&dpl=dpl_3qb9v8Vqe59231u2TJJ7kT5wgVu1",
      },
    },
    {
      id: 113,
      title: "Excel data cleanup",
      description: "Clean and organize raw survey data in Excel.",
      budget: 300,
      deadline: "2026-02-06T15:00:00+05:30",
      applicantsCount: 2,
      assignedTo: {
        name: "Siddharth Nair",
        profilePicLink: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F1cee4e042d482afdcdd2af1111c9988d.png&w=400&q=85&dpl=dpl_3qb9v8Vqe59231u2TJJ7kT5wgVu1",
      },
    },
    {
      id: 114,
      title: "Hackathon landing page",
      description: "Build a simple landing page for hackathon registrations.",
      budget: 1400,
      deadline: "2026-02-09T22:00:00+05:30",
      applicantsCount: 5,
      assignedTo: {
        name: "Tanmay Kulkarni",
        profilePicLink: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F45ef7efa5f718ccd1cde4e2b934e8607.png&w=400&q=85&dpl=dpl_3qb9v8Vqe59231u2TJJ7kT5wgVu1",
      },
    },
    {
      id: 115,
      title: "Project report proofreading",
      description: "Grammar and clarity check for final year project report.",
      budget: 400,
      deadline: "2026-02-07T20:00:00+05:30",
      applicantsCount: 3,
      assignedTo: {
        name: "Aditi Joshi",
        profilePicLink: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2Fcae99bb14b21ec41ecf03b58f59ff292.png&w=400&q=85&dpl=dpl_3qb9v8Vqe59231u2TJJ7kT5wgVu1",
      },
    },
    {
      id: 116,
      title: "Canva template creation",
      description: "Create reusable Canva template for presentations.",
      budget: 500,
      deadline: "2026-02-08T21:30:00+05:30",
      applicantsCount: 4,
      assignedTo: {
        name: "Yash Kulkarni",
        profilePicLink: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F6f2cb369e74d22c9a5725064a2d28c7a.png&w=400&q=85&dpl=dpl_3qb9v8Vqe59231u2TJJ7kT5wgVu1",
      },
    },
    {
      id: 117,
      title: "Sponsor email drafting",
      description: "Draft professional emails for sponsor outreach.",
      budget: 550,
      deadline: "2026-02-07T17:00:00+05:30",
      applicantsCount: 2,
      assignedTo: {
        name: "Kritika Bansal",
        profilePicLink: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F7d24c27f40be0d43618f6d49e26a3288.png&w=400&q=85&dpl=dpl_3qb9v8Vqe59231u2TJJ7kT5wgVu1",
      },
    },
    {
      id: 118,
      title: "Python automation script",
      description: "Script to rename and organize files automatically.",
      budget: 750,
      deadline: "2026-02-09T19:30:00+05:30",
      applicantsCount: 5,
      assignedTo: {
        name: "Pranav Kulkarni",
        profilePicLink: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F9535671c739f5654f4cf849c7036473a.png&w=400&q=85&dpl=dpl_3qb9v8Vqe59231u2TJJ7kT5wgVu1",
      },
    },
    {
      id: 119,
      title: "College fest budget sheet",
      description: "Create an editable budget spreadsheet for fest planning.",
      budget: 450,
      deadline: "2026-02-06T14:30:00+05:30",
      applicantsCount: 2,
      assignedTo: {
        name: "Neel Shah",
        profilePicLink: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2Fbb3d2a58ea153b635a4951d82affb4db.png&w=400&q=85&dpl=dpl_3qb9v8Vqe59231u2TJJ7kT5wgVu1",
      },
    },
    {
      id: 120,
      title: "Intro video for YouTube channel",
      description: "Short animated intro for college YouTube channel.",
      budget: 900,
      deadline: "2026-02-10T21:00:00+05:30",
      applicantsCount: 6,
      assignedTo: {
        name: "Manasi Kulkarni",
        profilePicLink: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2Fee7173cf2acfcb909ead7a23f3e01493.png&w=400&q=85&dpl=dpl_3qb9v8Vqe59231u2TJJ7kT5wgVu1",
      },
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-6 bg-red-50 p-2">
      {inProgressTasks.map((task) => {
        return <InProgressTaskCard task={task} key={task.id} />;
      })}
    </div>
  );
}
