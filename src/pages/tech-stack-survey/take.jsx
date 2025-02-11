import React, { useState } from "react";

import MainLayout from "@/components/layout/MainLayout";

import DemographicStep from "../../components/Survey/DemographicStep";
import DevToolsStep from "../../components/Survey/DevToolsStep";
import TrendsPreferencesStep from "../../components/Survey/TrendsPreferencesStep";
import TechStackStep from "../../components/Survey/TechStackStep";
import ChallengesOpportunitiesStep from "../../components/Survey/ChallengesOpportunitiesStep";

const TakeSurvey = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    demographics: {
      country: "",
      ageGroup: "",
      experienceLevel: "",
    },
    techStack: {
      programmingLanguages: [],
      frontendFrameworks: [],
      backendFrameworks: [],
      databases: [],
      cloudProviders: [],
      devOpsTools: [],
    },
    devTools: {
      textEditorIDE: [],
      versionControl: "",
      operatingSystem: "",
    },
    trendsPreferences: {
      openSourceInvolvement: "",
      techStackPreferences: [],
    },
    challengesOpportunities: {
      biggestChallenges: [],
      ecosystemRating: 0,
      additionalComments: "",
    },
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (section, field, value) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value,
      },
    });
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto my-4">
        <div className="p-4">
          {step === 1 && (
            <DemographicStep
              data={formData.demographics}
              onChange={handleChange}
              nextStep={nextStep}
            />
          )}
          {step === 2 && (
            <TechStackStep
              data={formData.techStack}
              onChange={handleChange}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 3 && (
            <DevToolsStep
              data={formData.devTools}
              onChange={handleChange}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 4 && (
            <TrendsPreferencesStep
              data={formData.trendsPreferences}
              onChange={handleChange}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 5 && (
            <ChallengesOpportunitiesStep
              data={formData.challengesOpportunities}
              onChange={handleChange}
              prevStep={prevStep}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default TakeSurvey;
