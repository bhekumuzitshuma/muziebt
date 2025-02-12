import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import HeaderComponent from "@/components/layout/HeaderComponent";

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
      <div className="max-w-4xl mx-auto py-10">My Projects</div>
    </MainLayout>
  );
};

export default Index;
