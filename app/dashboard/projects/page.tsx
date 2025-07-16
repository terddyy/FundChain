import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Droplet,
  Trees,
  Laptop,
  HeartPulse,
  ShoppingBasket,
  Sun,
  Palette,
  Briefcase,
  AlertTriangle,
  TabletSmartphone,
  ThumbsUp,
  BanknoteArrowUp,
} from "lucide-react";

const page = () => {
  const projects = [
    {
      title: "Community Learning Center",
      description:
        "Build a modern learning facility with digital resources for underserved communities.",
      sector: "Education",
      targetFunds: 1000,
      currentFunds: 80,
      icon: BookOpen,
    },
    {
      title: "Clean Water Initiative",
      description:
        "Install water filtration systems in rural villages to provide safe and clean drinking water.",
      sector: "Health",
      targetFunds: 2500,
      currentFunds: 500,
      icon: Droplet,
    },
    {
      title: "Urban Tree Planting Program",
      description:
        "Plant 1,000 trees across urban neighborhoods to combat pollution and improve air quality.",
      sector: "Environment",
      targetFunds: 1500,
      currentFunds: 300,
      icon: Trees,
    },
    {
      title: "Youth Coding Bootcamp",
      description:
        "Offer free tech education and career mentorship to underprivileged high school students.",
      sector: "Technology",
      targetFunds: 2000,
      currentFunds: 1250,
      icon: Laptop,
    },
    {
      title: "Mobile Health Clinic",
      description:
        "Deploy a mobile clinic to deliver essential health services to remote communities.",
      sector: "Healthcare",
      targetFunds: 5000,
      currentFunds: 2450,
      icon: HeartPulse,
    },
    {
      title: "Food for Families",
      description:
        "Support low-income families with monthly grocery packages to fight hunger.",
      sector: "Social Welfare",
      targetFunds: 1200,
      currentFunds: 960,
      icon: ShoppingBasket,
    },
    {
      title: "Solar Power for Schools",
      description:
        "Equip schools in off-grid areas with solar panels to ensure continuous learning.",
      sector: "Energy",
      targetFunds: 3000,
      currentFunds: 1800,
      icon: Sun,
    },
    {
      title: "Indigenous Arts Revival",
      description:
        "Fund workshops and exhibitions to preserve indigenous crafts and support local artists.",
      sector: "Culture",
      targetFunds: 800,
      currentFunds: 310,
      icon: Palette,
    },
    {
      title: "Women in Business Program",
      description:
        "Provide microloans and training for women entrepreneurs in rural communities.",
      sector: "Entrepreneurship",
      targetFunds: 4000,
      currentFunds: 1650,
      icon: Briefcase,
    },
    {
      title: "Disaster Relief Fund",
      description:
        "Provide emergency supplies and shelter to families affected by natural disasters.",
      sector: "Emergency Response",
      targetFunds: 6000,
      currentFunds: 3200,
      icon: AlertTriangle,
    },
    {
      title: "Digital Access for Seniors",
      description:
        "Distribute tablets and tech training to elderly individuals to help them stay connected.",
      sector: "Elderly Care",
      targetFunds: 1800,
      currentFunds: 700,
      icon: TabletSmartphone,
    },
  ];


  setTimeout;

  return (
    <main className="flex flex-wrap items-center justify-center mt-10 gap-4">
      {projects.map((project, index) => {
        const Icon = project.icon;
        return (
          // project
          <div className=" w-full max-w-sm " key={index}>
            {/* image */}
            <div className="bg-white/20 text-white w-full text-center rounded-t-xl p-10 border">
              <Icon className="w-20 h-20 mx-auto" />
            </div>
            {/* texts */}
            <div className="text-left bg-white rounded-b-xl p-4 space-y-2">
              <h1 className="font-semibold text-xl">{project.title}</h1>
              <p className="font-light text-sm text-slate-700">
                {project.description}
              </p>

              <div className="flex items-center justify-between mt-4">
                <h3 className="bg-violet/10 py-1 px-2 rounded-xl text-violet">
                  {project.sector}
                </h3>
                <h3 className="text-violet">
                  {project.currentFunds < project.targetFunds
                    ? "Active"
                    : "Inactive"}
                </h3>
              </div>

              {/* progress bar */}
              <div className="w-full space-y-2">
                <Progress
                  value={(project.currentFunds / project.targetFunds) * 100}
                />
                <div className="flex items-center justify-between">
                  <h1>
                    {(project.currentFunds / project.targetFunds) * 100}% Funded
                  </h1>
                  <h1>
                    {project.currentFunds}/{project.targetFunds}
                  </h1>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 w-max">
                <Button className="w-full">
                  <ThumbsUp /> Vote{" "}
                </Button>
                <Button className="w-full">
                  <BanknoteArrowUp /> Fund{" "}
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default page;
