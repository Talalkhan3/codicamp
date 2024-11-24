"use client";

import * as React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  Code2,
  Palette,
  FileJson,
  Search,
  LayoutGrid,
  List,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";

const allLanguages = [
  {
    id: "html",
    label: "HTML",
    description: "Standard language for creating and structuring web pages.",
    icon: Code2,
    category: "Frontend",
  },
  {
    id: "css",
    label: "CSS",
    description:
      "Styling language used to control the appearance of HTML elements on a web page.",
    icon: Palette,
    category: "Frontend",
  },
  {
    id: "javascript",
    label: "JavaScript",
    description: "The functionality of the web",
    icon: FileJson,
    category: "Frontend",
    disabled: true,
  },
  {
    id: "react",
    label: "React",
    description: "A JavaScript library for building user interfaces",
    icon: Code2,
    category: "Frontend",
    disabled: true,
  },
  {
    id: "python",
    label: "Python",
    description: "A versatile programming language",
    icon: FileJson,
    category: "Backend",
    disabled: true,
  },
  {
    id: "java",
    label: "Java",
    description: "Write once, run anywhere",
    icon: Code2,
    category: "Backend",
    disabled: true,
  },
];
function page() {
  const [value, setValue] = React.useState("html");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [category, setCategory] = React.useState("All");
  const [isGridView, setIsGridView] = React.useState(true);

  const filteredLanguages = allLanguages.filter(
    (lang) =>
      (category === "All" || lang.category === category) &&
      (lang.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lang.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen bg-background p-4">
        <div className="w-full max-w-7xl space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <Input
                type="text"
                placeholder="Search languages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Categories</SelectItem>
                  <SelectItem value="Frontend">Frontend</SelectItem>
                  <SelectItem value="Backend">Backend</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsGridView(!isGridView)}
              >
                {isGridView ? (
                  <List className="h-4 w-4" />
                ) : (
                  <LayoutGrid className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          <RadioGroup
            value={value}
            onValueChange={setValue}
            className={
              isGridView
                ? "grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                : "space-y-2"
            }
          >
            {filteredLanguages.map((lang) => (
              <div
                key={lang.id}
                className={`relative ${isGridView ? "" : "flex items-center "}`}
              >
                <RadioGroupItem
                  value={lang.id}
                  id={lang.id}
                  className="peer sr-only w-full h-full"
                  disabled={lang.disabled}
                />
                <Label
                  htmlFor={lang.id}
                  className={`flex ${
                    isGridView ? "flex-col" : "flex-row"
                  } items-center ${
                    isGridView ? "justify-center" : "justify-start"
                  } p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    value === lang.id
                      ? "border-green-500 bg-green-50 dark:bg-green-900"
                      : "border-gray-200 dark:border-gray-700"
                  } hover:border-green-400 dark:hover:border-green-600 ${
                    lang.disabled
                      ? "opacity-50 cursor-not-allowed hover:border-gray-200 dark:hover:border-gray-700"
                      : ""
                  }`}
                >
                  <lang.icon
                    className={`${
                      isGridView ? "w-12 h-12 mb-2" : "w-8 h-8 mr-4"
                    } ${
                      lang.disabled
                        ? "text-gray-400 dark:text-gray-500"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  />
                  <div
                    className={`${isGridView ? "text-center" : "text-left"}`}
                  >
                    <span
                      className={`text-lg font-semibold ${
                        isGridView ? "mb-2" : ""
                      } ${
                        lang.disabled ? "text-gray-400 dark:text-gray-500" : ""
                      }`}
                    >
                      {lang.label}
                    </span>
                    <span
                      className={`text-sm block ${
                        lang.disabled
                          ? "text-gray-400 dark:text-gray-500"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {lang.description}
                    </span>
                    {lang.disabled && (
                      <Badge
                        variant="secondary"
                        className="mt-2 bg-green-100 text-green-800 "
                      >
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>

          <div className="flex justify-center">
            <Button asChild size="sm" disabled={value === "more"}>
              <Link href={value === "more" ? "#" : `/doc/${value}`}>
                {value === "more"
                  ? "Coming Soon"
                  : `Learn ${value.toUpperCase()}`}{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
