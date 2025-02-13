import React, { useState } from "react";

import MainLayout from "@/components/layout/MainLayout";

import DemographicStep from "../../components/Survey/DemographicStep";
import DevToolsStep from "../../components/Survey/DevToolsStep";
import TrendsPreferencesStep from "../../components/Survey/TrendsPreferencesStep";
import TechStackStep from "../../components/Survey/TechStackStep";
import ChallengesOpportunitiesStep from "../../components/Survey/ChallengesOpportunitiesStep";

import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Seo from "@/components/SEO";

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
      salaryRange: "",
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

  const handleSubmit = async () => {
    try {
      console.log("Form Data In store:", formData);

      // Add the form data to a Firestore collection
      const docRef = await addDoc(collection(db, "surveys"), formData);

      console.log("Survey submitted successfully with ID:", docRef.id);
      alert("Survey submitted successfully!");
      // Optionally, you can redirect the user or show a success message
      // Example: router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting survey:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <MainLayout>
      <Seo
        title="African Developer Survey 2025 | The Matrix Exploit"
        description="Join the annual developer survey for African developers and tech professionals. Share insights on coding trends, salaries, and tools shaping Africa's tech industry."
        ogTitle="2025 African Developer Survey | The M@trix Exploit"
        ogDescription="Join the annual developer survey for African developers and tech professionals."
        ogImage="/devsurvey.png"
        ogUrl="https://bhekumuzitshuma.netlify.app/"
      />
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
