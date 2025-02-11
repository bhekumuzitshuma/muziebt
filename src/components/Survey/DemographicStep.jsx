const DemographicStep = ({ data, onChange, nextStep }) => {
  const handleInputChange = (field) => (e) => {
    onChange("demographics", field, e.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Demographics</h2>
      <div className="mt-4">
        <label className="block">Country</label>

        <select
          value={data.country}
          onChange={handleInputChange("country")}
          className="select select-bordered w-full"
        >
          <option disabled selected>
            Select Country
          </option>
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
