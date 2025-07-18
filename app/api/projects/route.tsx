// import {
//   BookOpen,
//   Droplet,
//   Trees,
//   Laptop,
//   HeartPulse,
//   ShoppingBasket,
//   Sun,
//   Palette,
//   Briefcase,
//   AlertTriangle,
//   TabletSmartphone,
//   ThumbsUp,
//   BanknoteArrowUp,
// } from "lucide-react";
import { NextResponse } from "next/server";
// const sample data
const projects = [
  {
    title: "Community Learning Center",
    description:
      "Build a modern learning facility with digital resources for underserved communities.",
    sector: "Education",
    targetFunds: 1000,
    currentFunds: 80,
    status: "Approved",
    votes: 2345,
  },
  {
    title: "Clean Water Initiative",
    description:
      "Install water filtration systems in rural villages to provide safe and clean drinking water.",
    sector: "Health",
    targetFunds: 2500,
    currentFunds: 500,
    status: "Pending",
    votes: 967896,
  },
  {
    title: "Urban Tree Planting Program",
    description:
      "Plant 1,000 trees across urban neighborhoods to combat pollution and improve air quality.",
    sector: "Environment",
    targetFunds: 1500,
    currentFunds: 300,
    status: "Approved",
    votes: 2345,
  },
  {
    title: "Youth Coding Bootcamp",
    description:
      "Offer free tech education and career mentorship to underprivileged high school students.",
    sector: "Technology",
    status: "Approved",
    targetFunds: 2000,
    currentFunds: 1250,
    votes: 768967,
  },
  {
    title: "Mobile Health Clinic",
    description:
      "Deploy a mobile clinic to deliver essential health services to remote communities.",
    sector: "Healthcare",
    targetFunds: 5000,
    currentFunds: 2450,
    status: "Rejected",
    votes: 1234612,
  },
  {
    title: "Food for Families",
    description:
      "Support low-income families with monthly grocery packages to fight hunger.",
    sector: "Social Welfare",
    targetFunds: 1200,
    status: "Rejected",
    votes: 6789,

    currentFunds: 960,
  },
  {
    title: "Solar Power for Schools",
    description:
      "Equip schools in off-grid areas with solar panels to ensure continuous learning.",
    sector: "Energy",
    targetFunds: 3000,
    currentFunds: 1800,
    status: "Approved",
    votes: 1234,
  },
  {
    title: "Indigenous Arts Revival",
    description:
      "Fund workshops and exhibitions to preserve indigenous crafts and support local artists.",
    sector: "Culture",
    targetFunds: 800,
    currentFunds: 310,
    status: "Approved",
    votes: 5624,
  },
  {
    title: "Women in Business Program",
    description:
      "Provide microloans and training for women entrepreneurs in rural communities.",
    sector: "Entrepreneurship",
    targetFunds: 4000,
    currentFunds: 1650,
    status: "Approved",
    votes: 31234,
  },
  {
    title: "Disaster Relief Fund",
    description:
      "Provide emergency supplies and shelter to families affected by natural disasters.",
    sector: "Emergency Response",
    targetFunds: 6000,
    currentFunds: 3200,
    status: "Approved",
    votes: 300,
  },
  {
    title: "Digital Access for Seniors",
    description:
      "Distribute tablets and tech training to elderly individuals to help them stay connected.",
    sector: "Elderly Care",
    targetFunds: 1800,
    currentFunds: 700,
    status: "Approved",
    votes: 5624,
  },
];

export async function GET() {
  // await new Promise((resolve) => setTimeout(resolve, 4000)); //delay para makita yung skeleton
  return NextResponse.json(projects);
}
