import { ProjectForm } from "@/app/(Private)/user/propose/page";
import { mockSectors } from "@/lib/data";

import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileText } from "lucide-react";
import { Separator } from "../ui/separator";

const StepThreeForm = ({
  formData,
  handleInputChange,
}: {
  formData: ProjectForm;
  handleInputChange: (field: keyof ProjectForm, value: string) => void;
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="outcome">Expected Outcome *</Label>
        <Textarea
          id="outcome"
          placeholder="What do you expect to achieve with this funding? What are your key milestones?"
          rows={4}
          value={formData.expectedOutcome}
          onChange={(e) => handleInputChange("expectedOutcome", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="risks">Potential Risks & Mitigation *</Label>
        <Textarea
          id="risks"
          placeholder="What are the main risks for your project and how do you plan to address them?"
          rows={4}
          value={formData.risks}
          onChange={(e) => handleInputChange("risks", e.target.value)}
        />
      </div>

      <div className="space-y-4">
        <Separator />
        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-medium mb-2 flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            Project Summary
          </h4>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Name:</strong> {formData.name || "Not specified"}
            </p>
            <p>
              <strong>Sector:</strong>{" "}
              {mockSectors.find((s) => s.id === formData.sectorId)?.name ||
                "Not specified"}
            </p>
            <p>
              <strong>Funding:</strong> ${formData.requestedAmount || "0"}
            </p>
            <p>
              <strong>Team Size:</strong> {formData.teamSize || "Not specified"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThreeForm;
