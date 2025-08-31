import React from "react";
import { TableCell, TableRow } from "../../ui/table";
import { formatDate } from "@/lib/data";
import { Edit, UserX, UserCheck } from "lucide-react";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";

interface UserRowProps {
  name: string;
  email: string;
  role: string;
  status: string;
  joinDate: string;
}

const AdminUserRow = ({ user }: { user: UserRowProps }) => {
  return (
    <TableRow>
      <TableCell className="font-medium">{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        <Badge variant={user.role === "admin" ? "default" : "secondary"}>
          {user.role}
        </Badge>
      </TableCell>
      <TableCell>
        <Badge variant={user.status === "active" ? "default" : "secondary"}>
          {user.status}
        </Badge>
      </TableCell>
      <TableCell>{formatDate(user.joinDate)}</TableCell>
      <TableCell>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Edit className="w-4 h-4" />
          </Button>
          <Button
            variant={user.status === "active" ? "destructive" : "default"}
            size="sm"
            className="flex items-center gap-1"
          >
            {user.status === "active" ? (
              <>
                <UserX className="w-4 h-4" />
                Restrict
              </>
            ) : (
              <>
                <UserCheck className="w-4 h-4" />
                Activate
              </>
            )}
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default AdminUserRow;
