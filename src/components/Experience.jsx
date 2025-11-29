import ExperienceCard from "./ExperieceCard";

export const experienceData = [
  {
    role: "Data Analyst",
    company: "Skillyards",
    date: "Dec-2024 – Present",
    location: "Agra, India",
    points: [
      "Transformed raw datasets into actionable insights using Excel, SQL, and Power BI",
      "Built interactive dashboards to track KPIs, sales performance, and business growth",
      "Cleaned, prepared, and modeled data using Power Query, DAX, and Python (Pandas)",
      "Conducted trend analysis, forecasting, and data-driven reporting for decision-making",
      "Automated repetitive reporting tasks to improve workflow efficiency",
      "Collaborated with teams to understand business requirements and deliver insights-focused solutions",
      "Visualized complex data through clear charts, reports, and storytelling techniques",
    ],
    skills: [
      "Excel",
      "SQL",
      "Power BI",
      "Tableau",
      "Python",
      "Pandas",
      "GitHub",
    ],
  },
];

const Experience = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Work Experience
          </p>
          <p className="py-6">My professional journey and key achievements</p>
        </div>

        {experienceData.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
