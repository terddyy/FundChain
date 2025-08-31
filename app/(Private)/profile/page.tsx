"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Calendar, Save, Loader2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/lib/Context/AuthContext";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

export const page = () => {
  const user = useAuth();
  console.log(user);

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setIsLoading(true);

    // const result = await updateProfile({ name, email });

    // if (result.success) {
    //   toast({
    //     title: "Profile updated",
    //     description: "Your profile has been successfully updated.",
    //   });
    // } else {
    //   toast({
    //     title: "Update failed",
    //     description: result.error,
    //     variant: "destructive",
    //   });
    // }

    // setIsLoading(false);
  };

  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gradient mb-2">
            Profile Settings
          </h1>
          <p className="text-muted-foreground">
            Manage your account information and preferences
          </p>
        </div>

        <div className="grid gap-6">
          {/* Profile Info Card */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Account Information
              </CardTitle>
              <CardDescription>
                Update your personal details below
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  variant="neon"
                  disabled={isLoading}
                  className="w-full sm:w-auto"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Updating...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Account Status Card */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Account Status
              </CardTitle>
              <CardDescription>
                Your current account information and status
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2">
                  <Label className="text-sm text-muted-foreground">Role</Label>
                  <Badge
                    variant={user.role === "admin" ? "default" : "secondary"}
                    className="w-fit"
                  >
                    {user.role === "admin" ? "Administrator" : "User"}
                  </Badge>
                </div>

                <div className="flex flex-col space-y-2">
                  <Label className="text-sm text-muted-foreground">
                    Status
                  </Label>
                  <Badge
                    variant={
                      user.status === "active" ? "default" : "destructive"
                    }
                    className="w-fit"
                  >
                    {user.status === "active" ? "Active" : "Restricted"}
                  </Badge>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-border">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Member since{" "}
                  {new Date(user.joinDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default page
