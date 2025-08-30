import { ProjectForm } from "@/app/(Private)/user/propose/page";
import { mockSectors } from "@/lib/data";

import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const StepOneForm = ({
  formData,
  handleInputChange,
}: {
  formData: ProjectForm;
  handleInputChange: (field: keyof ProjectForm, value: string) => void;
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Project Name *</Label>
        <Input
          id="name"
          placeholder="Enter your project name"
          value={formData.name}
          onChange={(e: { target: { value: any; }; }) => handleInputChange("name", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Project Description *</Label>
        <Textarea
          id="description"
          placeholder="Describe your project, its goals, and potential impact..."
          rows={6}
          value={formData.description}
          onChange={(e: { target: { value: any; }; }) => handleInputChange("description", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="sector">Sector *</Label>
        <Select
          value={formData.sectorId}
          onValueChange={(value: any) => handleInputChange("sectorId", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a sector" />
          </SelectTrigger>
          <SelectContent>
            {mockSectors.map((sector: { id: any; name: any; }) => (
              <SelectItem key={sector.id} value={sector.id}>
                {sector.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default StepOneForm;
