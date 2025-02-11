const ChallengesOpportunitiesStep = ({
  data,
  onChange,
  prevStep,
  onSubmit,
}) => {
  const handleInputChange = (field) => (e) => {
    onChange("challengesOpportunities", field, e.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Challenges & Opportunities</h2>
      <div className="mt-4 border p-4 rounded-lg">
        <label className="block">Biggest Challenges</label>
        <hr className="w-full my-3" />
        {[
          "Learning Curve",
          "Tooling",
          "Community Support",
          "Documentation",
          "Other",
        ].map((challenge) => (
          <div key={challenge}>
            <input
              type="checkbox"
              value={challenge}
              checked={data.biggestChallenges.includes(challenge)}
              onChange={(e) => {
                const value = e.target.value;
                if (e.target.checked) {
                  onChange("challengesOpportunities", "biggestChallenges", [
                    ...data.biggestChallenges,
                    value,
                  ]);
                } else {
                  onChange(
                    "challengesOpportunities",
                    "biggestChallenges",
                    data.biggestChallenges.filter((item) => item !== value)
                  );
                }
              }}
            />
            <span className="ml-2">{challenge}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 border p-4 rounded-lg">
        <label className="block">Ecosystem Rating (1-10)</label>
        <hr className="w-full my-3" />
        <input
          type="number"
          min="1"
          max="10"
          value={data.ecosystemRating}
          onChange={handleInputChange("ecosystemRating")}
          className="mt-1 input input-bordered w-full"
        />
      </div>
      <div className="mt-4 border p-4 rounded-lg">
        <label className="block">Additional Comments</label>
        <hr className="w-full my-3" />
        <textarea
          value={data.additionalComments}
          onChange={handleInputChange("additionalComments")}
          className="mt-1 textarea textarea-bordered w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <button onClick={prevStep} className="black-btn">
          Previous
        </button>
        <button onClick={onSubmit} className="green-btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ChallengesOpportunitiesStep;
