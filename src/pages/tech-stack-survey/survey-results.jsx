import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import MaintenanceComponent from "@/components/Maintainance";

const SurveyResults = () => {
  return (
    <MainLayout>
      <MaintenanceComponent
        title="I'm working on something awesome!"
        description="Stay tuned! l'll be back soon with exciting results."
      />
    </MainLayout>
  );
};

export default SurveyResults;
