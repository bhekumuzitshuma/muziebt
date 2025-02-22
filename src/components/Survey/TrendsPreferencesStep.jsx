const TrendsPreferencesStep = ({ data, onChange, nextStep, prevStep }) => {
  const handleInputChange = (field) => (e) => {
    onChange("trendsPreferences", field, e.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Trends & Preferences</h2>
      <div className="mt-4 border p-4 rounded-lg">
        <label className="block">
          <span className="gradient-text font-bold">
            Describe your Open Source Involvement
          </span>
        </label>
        <hr className="w-full my-3" />
        <select
          value={data.openSourceInvolvement}
          onChange={handleInputChange("openSourceInvolvement")}
          className="mt-1 select select-bordered w-full"
        >
          <option value="">Select</option>
          <option value="Active Contributor">Active Contributor</option>
          <option value="Occasional Contributor">Occasional Contributor</option>
          <option value="Not Involved">Not Involved</option>
        </select>
      </div>
      <div className="mt-4 border p-4 rounded-lg">
        <label className="block">
          <span className="gradient-text font-bold">
            What is your job role?
          </span>
        </label>
        <hr className="w-full my-3" />
        {[
          "Frontend",
          "Backend",
          "Full Stack",
          "DevOps",
          "AI/ML",
          "Cloud",
          "Cybersecurity",
          "Data Science",
          "Game Development",
          "Mobile Development",
          "Embedded Systems",
          "Blockchain Development",
          "AR/VR Development",
          "IoT (Internet of Things)",
          "Big Data",
          "Low-Code/No-Code Development",
          "Networking & Infrastructure",
          "Database Administration",
          "Testing & QA",
        ].map((pref) => (
          <div key={pref}>
            <input
              type="checkbox"
              value={pref}
              checked={data.techStackPreferences.includes(pref)}
              onChange={(e) => {
                const value = e.target.value;
                if (e.target.checked) {
                  onChange("trendsPreferences", "techStackPreferences", [
                    ...data.techStackPreferences,
                    value,
                  ]);
                } else {
                  onChange(
                    "trendsPreferences",
                    "techStackPreferences",
                    data.techStackPreferences.filter((item) => item !== value)
                  );
                }
              }}
            />
            <span className="ml-2">{pref}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 border p-4 rounded-lg">
        <label className="block">
          <span className="gradient-text font-bold">
            Your Salary Range (in USD)
          </span>
        </label>
        <hr className="w-full my-3" />
        <select
          value={data.salaryRange}
          onChange={handleInputChange("salaryRange")}
          className="mt-1 select select-bordered w-full"
        >
          <option value="">Select</option>
          <option value="$300 - $500">$300 - $500</option>
          <option value="$501 - $1,000">$501 - $1,000</option>
          <option value="$1,001 - $1,500">$1,001 - $1,500</option>
          <option value="$1,501 - $2,500">$1,501 - $2,500</option>
          <option value="$2,501 - $3,500">$2,501 - $3,500</option>
          <option value="$3,501 - $4,500">$3,501 - $4,500</option>
          <option value="$5,000+">$5,000+</option>
        </select>
      </div>
      <div className="mt-4 flex justify-between">
        <button onClick={prevStep} className="black-btn">
          Previous
        </button>
        <button onClick={nextStep} className="green-btn">
          Next
        </button>
      </div>
    </div>
  );
};

export default TrendsPreferencesStep;
