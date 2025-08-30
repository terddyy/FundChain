"use client";
import StepOneForm from "@/app/components/ProjectProposalForm/StepOneForm";
import StepThreeForm from "@/app/components/ProjectProposalForm/StepThreeForm";
import StepTwoForm from "@/app/components/ProjectProposalForm/StepTwoForm";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Progress } from "@/app/components/ui/progress";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockSectors } from "@/lib/data";
import { Separator } from "@radix-ui/react-dropdown-menu";

import { motion, progress } from "framer-motion";
import {
  CheckCircle,
  DollarSign,
  FileText,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";
import React, { useState } from "react";

export interface ProjectForm {
  name: string;
  description: string;
  requestedAmount: string;
  sectorId: string;
  fundingDeadline: string;
  teamSize: string;
  expectedOutcome: string;
  risks: string;
}

const page = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ProjectForm>({
    name: "",
    description: "",
    requestedAmount: "",
    sectorId: "",
    fundingDeadline: "",
    teamSize: "",
    expectedOutcome: "",
    risks: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  const handleInputChange = (field: keyof ProjectForm, value: string) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.name && formData.description && formData.sectorId);
      case 2:
        return !!(
          formData.requestedAmount &&
          formData.fundingDeadline &&
          formData.teamSize
        );
      case 3:
        return !!(formData.expectedOutcome && formData.risks);
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev: number) => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev: number) => Math.max(prev - 1, 1));
  };

  const stepTitles = [
    "Project Overview",
    "Funding Details",
    "Additional Information",
  ];

  const stepIcons = [Lightbulb, DollarSign, Target];
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-8"
        >
          <h1 className="text-4xl font-bold text-gradient">
            Propose Your Project
          </h1>
          <p className="text-xl text-muted-foreground">
            Share your innovative idea with our global community
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <Card className="card-glow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-sm text-muted-foreground">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <Progress value={progress} className="h-2 mb-4" />
              <div className="flex justify-between">
                {stepTitles.map((title, index) => {
                  const StepIcon = stepIcons[index];
                  const stepNumber = index + 1;
                  const isActive = stepNumber === currentStep;
                  const isCompleted = stepNumber < currentStep;

                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center space-y-2"
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                          isCompleted
                            ? "bg-primary text-primary-foreground"
                            : isActive
                            ? "bg-primary/20 text-primary border-2 border-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <StepIcon className="w-5 h-5" />
                        )}
                      </div>
                      <span
                        className={`text-xs text-center ${
                          isActive
                            ? "text-primary font-medium"
                            : "text-muted-foreground"
                        }`}
                      >
                        {title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Form Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                {React.createElement(stepIcons[currentStep - 1], {
                  className: "w-6 h-6 text-primary",
                })}
                <span>{stepTitles[currentStep - 1]}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {/* Step 1: Project Overview */}
              {currentStep === 1 && (
                <StepOneForm
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              )}

              {/* Step 2: Funding Details */}
              {currentStep === 2 && (
                <StepTwoForm
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              )}

              {/* Step 3: Additional Information */}
              {currentStep === 3 && (
                <StepThreeForm
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>

                {currentStep < totalSteps ? (
                  <Button
                    variant="hero"
                    onClick={handleNext}
                    disabled={!validateStep(currentStep)}
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button
                    variant="fund"
                    // onClick={handleSubmit}
                    disabled={!validateStep(currentStep) || isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Project"}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <Card className="border-border/50">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-primary" />
                Need Help?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our community is here to help! Join our Discord for project
                feedback, or check out our guide for successful project
                proposals.
              </p>
              <div className="flex space-x-4 mt-4">
                <Button variant="outline" size="sm">
                  Join Discord
                </Button>
                <Button variant="ghost" size="sm">
                  Read Guidelines
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
