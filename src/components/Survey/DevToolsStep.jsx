const DevToolsStep = ({ data, onChange, nextStep, prevStep }) => {
  const handleInputChange = (field) => (e) => {
    onChange("devTools", field, e.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Development Tools</h2>
      <div className="mt-4 border p-4 rounded-lg">
        <label className="block">
          <span className="gradient-text font-bold">Text Editor / IDE</span>
        </label>
        <hr className="w-full my-3" />
        {["VSCode", "IntelliJ", "Sublime Text", "Vim", "Other"].map((tool) => (
          <div key={tool}>
            <input
              type="checkbox"
              value={tool}
              checked={data.textEditorIDE.includes(tool)}
              onChange={(e) => {
                const value = e.target.value;
                if (e.target.checked) {
                  onChange("devTools", "textEditorIDE", [
                    ...data.textEditorIDE,
                    value,
                  ]);
                } else {
                  onChange(
                    "devTools",
                    "textEditorIDE",
                    data.textEditorIDE.filter((item) => item !== value)
                  );
                }
              }}
            />
            <span className="ml-2">{tool}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 border p-4 rounded-lg">
        <label className="block">
          <span className="gradient-text font-bold">Version Control</span>
        </label>
        <hr className="w-full my-3" />
        <select
          value={data.versionControl}
          onChange={handleInputChange("versionControl")}
          className="mt-1 select select-bordered w-full"
        >
          <option value="">Select</option>
          <option value="Git">Git</option>
          <option value="SVN">SVN</option>
          <option value="Mercurial">Mercurial</option>
        </select>
      </div>
      <div className="mt-4 border p-4 rounded-lg">
        <label className="block ">
          <span className="gradient-text font-bold">Your Operating System</span>
        </label>
        <hr className="w-full my-3" />
        <select
          value={data.operatingSystem}
          onChange={handleInputChange("operatingSystem")}
          className="mt-1 select select-bordered w-full"
        >
          <option value="">Select</option>
          <option value="Windows">Windows</option>
          <option value="MacOS">MacOS</option>
          <option value="Linux">Linux</option>
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

export default DevToolsStep;
