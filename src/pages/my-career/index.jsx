import React from "react";
import MaintenanceComponent from "@/components/Maintainance";
import MainLayout from "@/components/layout/MainLayout";

const Index = () => {
  const logo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="170"
      height="44"
      viewBox="0 0 170 44"
      fill="none"
    >
      {/* Your SVG logo path here */}
    </svg>
  );
  return (
    <MainLayout>
      <MaintenanceComponent
        title="I'm working on something awesome!"
        description="Stay tuned! l'll be back soon with exciting updates."
        targetDate="2025-04-30T23:59:59" // Custom target date
      />
    </MainLayout>
  );
};

export default Index;
