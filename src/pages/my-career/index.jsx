import React from "react";
import MaintenanceComponent from "@/components/Maintainance";

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
    <div>
      <MaintenanceComponent
        title="I'm working on something awesome!"
        description="Stay tuned! l'll be back soon with exciting updates."
        imageUrl="https://pagedone.io/asset/uploads/1718004199.png"
        targetDate="2025-04-30T23:59:59" // Custom target date
      />
    </div>
  );
};

export default Index;
