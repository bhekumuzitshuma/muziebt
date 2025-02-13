const DemographicStep = ({ data, onChange, nextStep }) => {
  const handleInputChange = (field) => (e) => {
    onChange("demographics", field, e.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Demographics</h2>
      <div className="my-4">
        <label className="block">
          <span className="gradient-text font-bold">Country</span>
        </label>

        <select
          value={data.country}
          onChange={handleInputChange("country")}
          className="select select-bordered w-full"
        >
          {[
            "Algeria",
            "Angola",
            "Benin",
            "Botswana",
            "Burkina Faso",
            "Burundi",
            "Cabo Verde",
            "Cameroon",
            "Central African Republic",
            "Chad",
            "Comoros",
            "Democratic Republic of the Congo",
            "Djibouti",
            "Egypt",
            "Equatorial Guinea",
            "Eritrea",
            "Eswatini",
            "Ethiopia",
            "Gabon",
            "Gambia",
            "Ghana",
            "Guinea",
            "Guinea-Bissau",
            "Ivory Coast",
            "Kenya",
            "Lesotho",
            "Liberia",
            "Libya",
            "Madagascar",
            "Malawi",
            "Mali",
            "Mauritania",
            "Mauritius",
            "Morocco",
            "Mozambique",
            "Namibia",
            "Niger",
            "Nigeria",
            "Rwanda",
            "Sao Tome and Principe",
            "Senegal",
            "Seychelles",
            "Sierra Leone",
            "Somalia",
            "South Africa",
            "South Sudan",
            "Sudan",
            "Tanzania",
            "Togo",
            "Tunisia",
            "Uganda",
            "Zambia",
            "Zimbabwe",
          ].map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="my-4">
        <label className="block">
          <span className="gradient-text font-bold">Age Range</span>
        </label>

        <select
          value={data.ageGroup}
          onChange={handleInputChange("ageGroup")}
          className="select select-bordered w-full"
        >
          {[
            "18 - 25",
            "25 - 30",
            "30 - 35",
            "35 - 40",
            "40 - 45",
            "45 - 50",
            "50+",
          ].map((ageGroup) => (
            <option key={ageGroup} value={ageGroup}>
              {ageGroup}
            </option>
          ))}
        </select>
      </div>

      <div className="my-4">
        <label className="block">
          <span className="gradient-text font-bold">Experience Level</span>
        </label>

        <select
          value={data.experienceLevel}
          onChange={handleInputChange("experienceLevel")}
          className="select select-bordered w-full"
        >
          {["0 - 3", "4 - 5", "6 - 8", "9 - 11", "11 - 15", "15+"].map(
            (experienceLevel) => (
              <option key={experienceLevel} value={experienceLevel}>
                {experienceLevel}
              </option>
            )
          )}
        </select>
      </div>
      {/* Add more fields similarly */}
      <button
        onClick={nextStep}
        className="mt-4 w-full  sm:w-auto flex items-center justify-center bg-gradient-to-r from-green-600 to-black   text-white px-6 py-2 rounded-lg hover:scale-105 transform transition-all duration-300"
      >
        Next
      </button>
    </div>
  );
};

export default DemographicStep;
