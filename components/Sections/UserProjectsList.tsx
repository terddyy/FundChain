"use client";
import { Projects } from "@/lib/interfaces";
import { ThumbsUp, BanknoteArrowUp } from "lucide-react";
import React, { use, useState } from "react";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";

interface Props {
  projects: Promise<Projects[]>;
}

const UserProjectsList = ({ projects }: Props) => {
  const [selectedSector, setSelectedSector] = useState("");

  const allProjects = use(projects);

  const sectors = Array.from(new Set(allProjects.map((p) => p.sector)));

  return (
    <section>
      {/* sectors */}
      <div className="flex flex-wrap items-center justify-center gap-2 w-full max-w-lg md:max-w-xl mx-auto">
        {sectors.map((sector, index) => (
          <h1
            onClick={() =>
              setSelectedSector((prev) => (prev === sector ? "" : sector))
            }
            key={index}
            className={`text-white transition-colors cursor-pointer ${
              selectedSector === sector ? "bg-violet" : "bg-violet/50"
            } py-1 px-2 rounded-lg`}
          >
            {sector}
          </h1>
        ))}
      </div>

      {/* projects */}
      <div className="flex flex-wrap items-center justify-center  mt-10 gap-4">
        {allProjects
          .filter((project) =>
            selectedSector ? project.sector === selectedSector : project
          )
          .map((project, index) => {
            return (
              // project
              <div className=" w-full max-w-sm " key={index}>
                {/* image */}
                {/* <div className="bg-white/20 text-white w-full text-center rounded-t-xl p-10 border">
                  <Icon className="w-20 h-20 mx-auto" /> pwedeng conditional rendering depending on its sector
                </div> */}
                {/* texts */}
                <div className="text-left bg-white rounded-xl p-4 space-y-2">
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
                        {(
                          (project.currentFunds / project.targetFunds) *
                          100
                        ).toFixed(2)}
                        % Funded
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
        ;
      </div>
    </section>
  );
};

export default UserProjectsList;
