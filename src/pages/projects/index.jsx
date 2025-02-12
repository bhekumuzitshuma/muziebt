import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import HeaderComponent from "@/components/layout/HeaderComponent";
import ProjectsTimeline from "@/components/ProjectsTimeline";

const Index = () => {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Projects", link: "/projects" },
  ];
  return (
    <MainLayout>
      <div className="border-t border-b">
        <HeaderComponent title="My Projects" breadcrumbs={breadcrumbs} />
      </div>
      <div className="max-w-4xl px-4 md:px-0 mx-auto py-10">
        <h2 className="text-2xl mb-4 font-bold">
          <span className="gradient-text">Projects Timeline</span>
        </h2>
        <p className="mb-4">
          Since I wrote my first line of code at 14, I've built a range of
          projects—from small experiments to full-scale applications. Each one
          represents a step in my journey, sharpening my skills and pushing me
          toward mastery in software engineering.
        </p>
        <div className="my-5 py-8 border rounded-lg">
          <ProjectsTimeline />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
