const TechStackStep = ({ data, onChange, nextStep, prevStep }) => {
  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      // Add to the array if checked
      onChange("techStack", field, [...data[field], value]);
    } else {
      // Remove from the array if unchecked
      onChange(
        "techStack",
        field,
        data[field].filter((item) => item !== value)
      );
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Tech Stack</h2>
      <div className="mt-4 border p-4 rounded-lg">
        <label className="block">
          What is your primary professional programming language?
        </label>
        <hr className="w-full my-3" />
        {[
          "JavaScript",
          "Python",
          "Java",
          "C#",
          "Go",
          "PHP",
          "VB.Net",
          "Rust",
          "TypeScript",
          "C",
          "C++",
          "Swift",
          "Kotlin",
          "Dart",
          "Ruby",
          "Perl",
          "Lua",
          "Scala",
          "Haskell",
          "Elixir",
          "F#",
          "Clojure",
          "Shell Scripting",
          "SQL",
          "MATLAB",
        ].map((lang) => (
          <div key={lang}>
            <input
              type="checkbox"
              value={lang}
              checked={data.programmingLanguages.includes(lang)}
              onChange={handleInputChange("programmingLanguages")}
            />
            <span className="ml-2">{lang}</span>
          </div>
        ))}
      </div>
      {/* Repeat similar blocks for frontendFrameworks, backendFrameworks, etc. */}
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

export default TechStackStep;
