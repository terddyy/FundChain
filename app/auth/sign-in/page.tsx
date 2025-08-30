"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/Context/AuthContext";

import { motion } from "framer-motion";
import { Zap, EyeOff, Eye, LogIn } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { isLoading, signIn } = useAuth();

  // log in
  async function handleLogIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await signIn(email, password);
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-hero">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="card-glow border-border/50">
          <CardHeader className="space-y-4 text-center">
            <div className="flex justify-center">
              <div className="relative">
                <Zap className="w-12 h-12 text-primary" />
                <div className="absolute inset-0 w-12 h-12 bg-primary/20 rounded-full blur-lg" />
              </div>
            </div>
            <div>
              <CardTitle className="text-2xl text-gradient">
                Welcome Back
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Sign in to access FundChain
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    className="bg-background/50 border-border focus:border-primary pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                variant="neon"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="mr-2"
                    >
                      <LogIn className="w-4 h-4" />
                    </motion.div>
                    Signing in...
                  </>
                ) : (
                  <>
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link
                  href="/auth/sign-up"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Sign up here
                </Link>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="text-xs text-muted-foreground space-y-1">
                <p>
                  <strong>Demo Accounts:</strong>
                </p>
                <p>Admin: admin@fundchain.com / admin123</p>
                <p>User: sarah.w@email.com / password123</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default page;
