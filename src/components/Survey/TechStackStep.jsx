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

      {/* Programming Languages */}
      <div className="mt-4 border p-4 rounded-lg">
        <label className="block">
          <span className="gradient-text font-bold">
            What is your primary professional programming language?
          </span>
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

      {/* Frontend Frameworks */}
      <div className="mt-4 border p-4 rounded-lg">
        <label className="block">
          <span className="gradient-text font-bold">
            Most Used Frontend Framework?
          </span>
        </label>
        <hr className="w-full my-3" />
        {[
          "React",
          "Vue.js",
          "Angular",
          "Svelte",
          "SolidJS",
          "Preact",
          "Qwik",
          "Alpine.js",
          "Lit",
          "Ember.js",
          "None (Backend Developer)",
        ].map((frontend) => (
          <div key={frontend}>
            <input
              type="checkbox"
              value={frontend}
              checked={data.frontendFrameworks.includes(frontend)}
              onChange={handleInputChange("frontendFrameworks")}
            />
            <span className="ml-2">{frontend}</span>
          </div>
        ))}
      </div>

      {/* Backend Frameworks */}
      <div className="mt-4 border p-4 rounded-lg">
        <label className="block">
          <span className="gradient-text font-bold">
            Most Used Frontend Framework?
          </span>
        </label>
        <hr className="w-full my-3" />
        {[
          "Express.js",
          "NestJS",
          "Next.js (Full-stack)",
          ".NET",
          "Django",
          "Spring Boot",
          "Flask",
          "Laravel",
          "Ruby On Rails",
          "Hapi",
          "None - Frontend",
          "Other",
        ].map((backend) => (
          <div key={backend}>
            <input
              type="checkbox"
              value={backend}
              checked={data.backendFrameworks.includes(backend)}
              onChange={handleInputChange("backendFrameworks")}
            />
            <span className="ml-2">{backend}</span>
          </div>
        ))}
      </div>

      {/* Databases */}
      <div className="mt-4 border p-4 rounded-lg">
        <label className="block">
          <span className="gradient-text font-bold">
            Your Favorite Database?
          </span>
        </label>
        <hr className="w-full my-3" />
        {[
          // SQL Databases
          "PostgreSQL",
          "MySQL",
          "MariaDB",
          "SQLite",
          "Microsoft SQL Server",
          "Oracle Database",
          "CockroachDB",
          "IBM Db2",

          // NoSQL Databases
          "MongoDB",
          "Redis",
          "Cassandra",
          "CouchDB",
          "DynamoDB",
          "Neo4j",
          "FaunaDB",
        ].map((db) => (
          <div key={db}>
            <input
              type="checkbox"
              value={db}
              checked={data.databases.includes(db)}
              onChange={handleInputChange("databases")}
            />
            <span className="ml-2">{db}</span>
          </div>
        ))}
      </div>

      {/* Cloud Providers */}
      <div className="mt-4 border p-4 rounded-lg">
        <label className="block">
          <span className="gradient-text font-bold">
            Your Preferred Cloud Provider?
          </span>
        </label>
        <hr className="w-full my-3" />
        {[
          "Amazon Web Services (AWS)",
          "Microsoft Azure",
          "Google Cloud Platform (GCP)",
          "IBM Cloud",
          "Oracle Cloud",
          "Alibaba Cloud",
          "DigitalOcean",
          "Linode (by Akamai)",
          "Vultr",
          "Cloudflare",
          "Heroku",
          "Other",
        ].map((cloud) => (
          <div key={cloud}>
            <input
              type="checkbox"
              value={cloud}
              checked={data.cloudProviders.includes(cloud)}
              onChange={handleInputChange("cloudProviders")}
            />
            <span className="ml-2">{cloud}</span>
          </div>
        ))}
      </div>

      {/* DevOpsTools */}
      <div className="mt-4 border p-4 rounded-lg">
        <label className="block">
          <span className="gradient-text font-bold">
            Most Used DevOps Tool(s)
          </span>
        </label>
        <hr className="w-full my-3" />
        {[
          // CI/CD Tools
          "---[CI/CD TOOLS]----",
          "Jenkins",
          "GitHub Actions",
          "GitLab CI/CD",
          "CircleCI",
          "Travis CI",

          //
          "---[CONTAINERIZATION & ORCHESTRATION]----",
          "Docker",
          "Kubernetes",
          "OpenShift",

          // Configuration Management & Infrastructure as Code
          "---[CONFIGURATION MANAGEMENT & INFRASTRUCTURE AS CODE]---",
          "Terraform",
          "Ansible",
          "Puppet",
          "Chef",

          // Monitoring & Logging
          "---[MONITORING & LOGGING]---",
          "Prometheus",
          "Grafana",
          "ELK Stack (Elasticsearch, Logstash, Kibana)",
        ].map((devT) => (
          <div key={devT}>
            <input
              type="checkbox"
              value={devT}
              checked={data.devOpsTools.includes(devT)}
              onChange={handleInputChange("devOpsTools")}
            />
            <span className="ml-2">{devT}</span>
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
