// src/page.tsx
"use client"
import { useSidebar } from "@/components/ui/sidebar";
import { useAppContext } from "@/context/AppContext";
// import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const { value, setValue } = useAppContext();
  useEffect(() => {
    setValue({ ...value, activeTitle: "" });
  }, []);
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200">
      {/* Navbar */}
      <header className="flex justify-between items-center py-6 px-8 bg-white dark:bg-gray-800 shadow-sm">
        <h1 className="text-2xl font-semibold">Project Management</h1>
        <nav>
          <a href="#features" className="mx-4 text-lg">
            Features
          </a>
          <a href="#demo" className="mx-4 text-lg">
            Demo
          </a>
          <a href="#tech-stack" className="mx-4 text-lg">
            Tech Stack
          </a>
          <a href="#contact" className="mx-4 text-lg">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="m-4 rounded-xl flex flex-col items-center justify-center text-center py-16 bg-gradient-to-b from-blue-500 to-blue-700 text-white">
        <h2 className="text-4xl md:text-5xl font-bold">
          Manage Projects with Ease
        </h2>
        <p className="mt-4 text-lg md:text-xl max-w-xl">
          Efficient task management, collaboration, and real-time project
          tracking for teams of all sizes.
        </p>
        <Link href={"/dashboard"}>
          <button className="mt-8 px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-200">
            Get Started
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-8">
        <h2 className="text-3xl font-semibold text-center">Features</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="User Authentication"
            description="Sign up, login, and Google OAuth."
          />
          <FeatureCard
            title="Dashboard"
            description="Quick summaries of active projects and stats."
          />
          <FeatureCard
            title="Kanban Boards"
            description="Drag-and-drop tasks in customizable columns."
          />
          <FeatureCard
            title="Task Management"
            description="Create tasks with priority, labels, and due dates."
          />
          <FeatureCard
            title="Collaboration Tools"
            description="Comments, file attachments, and real-time notifications."
          />
          <FeatureCard
            title="Timeline & Calendar"
            description="Calendar views and Gantt charts for deadlines."
          />
          <FeatureCard
            title="Real-Time Notifications"
            description="Email alerts and task updates in real-time."
          />
          <FeatureCard
            title="Analytics"
            description="Gain insights with productivity reports."
          />
          <FeatureCard
            title="Dark Mode"
            description="Choose between light and dark themes."
          />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        id="tech-stack"
        className="py-16 px-8 bg-gray-100 dark:bg-gray-800"
      >
        <h2 className="text-3xl font-semibold text-center">Tech Stack</h2>
        <p className="text-center mt-4 text-lg">
          Powered by modern technologies for performance and scalability.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <TechBadge name="Next.js" />
          <TechBadge name="Tailwind CSS" />
          <TechBadge name="Node.js" />
          <TechBadge name="Express" />
          <TechBadge name="MongoDB" />
          <TechBadge name="Firebase/Auth0" />
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold">Demo</h2>
        <p className="mt-4 text-lg">
          Experience the app in action with our live demo.
        </p>
        <Link href={"/dashboard"}>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            View Demo
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="py-8 px-8 bg-gray-700 text-white text-center"
      >
        <p>&copy; 2024 Project Management. All rights reserved.</p>
        <p>
          Contact us at{" "}
          <a href="mailto:support@projectmanagement.com" className="underline">
            support@projectmanagement.com
          </a>
        </p>
      </footer>
    </div>
  );
}

// Feature Card Component
function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
}

// Tech Badge Component
function TechBadge({ name }: { name: string }) {
  return (
    <div className="bg-gray-200 dark:bg-gray-600 px-4 py-2 rounded-full font-semibold">
      {name}
    </div>
  );
}
