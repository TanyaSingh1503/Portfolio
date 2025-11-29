const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10 text-justify leading-relaxed">
          I am a data-driven professional passionate about turning raw
          information into meaningful insights that support smarter
          decision-making. I focus on building clear, interactive, and impactful
          dashboards while simplifying complex datasets into easy-to-understand
          stories.
          <br />
          <br />
          My skill set includes Excel, Advanced Excel, SQL, Python, Power BI,
          and Tableau, allowing me to work across data cleaning, analysis,
          visualization, and end-to-end reporting. I enjoy exploring patterns,
          identifying trends, and presenting insights that add real business
          value.
          <br />
          <br />
          I’ve worked on projects such as sales dashboards, e-commerce
          performance analysis, KPI monitoring reports, and data storytelling
          visualizations each showcasing my ability to transform data into
          actionable outcomes.
          <br />
          <br />I believe in continuous learning, experimenting with new tools,
          and strengthening my analytical mindset. I love solving problems,
          optimizing workflows, and creating visuals that make data meaningful.
          Let’s connect and explore opportunities to build powerful data
          solutions together!
        </p>
      </div>
    </div>
  );
};

export default About;
