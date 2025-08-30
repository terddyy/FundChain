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

const StepTwoForm = ({
  formData,
  handleInputChange,
}: {
  formData: ProjectForm;
  handleInputChange: (field: keyof ProjectForm, value: string) => void;
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="amount">Requested Funding Amount (USD) *</Label>
        <Input
          id="amount"
          type="number"
          placeholder="50000"
          value={formData.requestedAmount}
          onChange={(e) => handleInputChange("requestedAmount", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="deadline">Funding Deadline *</Label>
        <Input
          id="deadline"
          type="date"
          value={formData.fundingDeadline}
          onChange={(e) => handleInputChange("fundingDeadline", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="teamSize">Team Size *</Label>
        <Select
          value={formData.teamSize}
          onValueChange={(value) => handleInputChange("teamSize", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select team size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Just me (1 person)</SelectItem>
            <SelectItem value="2-5">Small team (2-5 people)</SelectItem>
            <SelectItem value="6-15">Medium team (6-15 people)</SelectItem>
            <SelectItem value="16+">Large team (16+ people)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default StepTwoForm;
