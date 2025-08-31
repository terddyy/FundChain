import { formatCurrency, formatDate } from "@/lib/data";
import { Eye, Check, X } from "lucide-react";
import React from "react";
import { Button } from "../../ui/button";
import { TableRow, TableCell } from "../../ui/table";
import { Badge } from "../../ui/badge";

interface AdminProjectRow {
  status: string;
  name: string
  description: string
  proposerName: string
  targetFunds: number
  created_at: string
}

const AdminProjectRow = ({project} :{project:AdminProjectRow}) => {
  return (
    <TableRow>
      <TableCell>
        <div>
          <div className="font-medium">{project.name}</div>
          <div className="text-sm text-muted-foreground truncate max-w-48">
            {project.description}
          </div>
        </div>
      </TableCell>
      <TableCell>{project.proposerName}</TableCell>
      <TableCell>{project.targetFunds}</TableCell>
      <TableCell>
        <Badge
          variant={
            project.status === "approved"
              ? "default"
              : project.status === "pending"
              ? "secondary"
              : "destructive"
          }
        >
          {project.status}
        </Badge>
      </TableCell>
      <TableCell>{project.created_at}</TableCell>
      <TableCell>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Eye className="w-4 h-4" />
          </Button>
          {project.status === "pending" && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="text-green-500 hover:text-green-600"
              >
                <Check className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-red-500 hover:text-red-600"
              >
                <X className="w-4 h-4" />
              </Button>
            </>
          )}
        </div>
      </TableCell>
    </TableRow>
  );
};

export default AdminProjectRow;
