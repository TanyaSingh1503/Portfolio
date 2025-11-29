import React from "react";
import image from "../assets/portfolio/pexels.jpg";
import Housing_Market_InsightDashboard from '../assets/portfolio/Housing_Market_InsightDashboard.png';
import StudentEnrollmentDashboard from '../assets/portfolio/StudentEnrollmentDashboard.png';
import AmazonStoreSalesDashboard from '../assets/portfolio/AmazonStoreSalesDashboard.png';
import portfolio01 from '../assets/portfolio/portfolio.png';

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: AmazonStoreSalesDashboard,
      demo: "https://drive.google.com/file/d/1aYD1vOAlnlgEApmVP5Ky5fKT-11EO8j1/view?usp=sharing",
      code: "https://github.com/TanyaSingh1503/Amazon_Store_Sales-Dashboard",
    },
    // {
    //   id: 2,
    //   src: image,
    //   demo: "https://prescripto-clone-backend.onrender.com/",
    //   code: "https://github.com/Girish600/prescripto_clone",
    // },
    {
      id: 2,
      src: Housing_Market_InsightDashboard,
      demo: "https://drive.google.com/file/d/1FyCIR0CvT20IspTmIXV-u_CFZQasqDwA/view?usp=drive_link",
      code: "https://github.com/TanyaSingh1503/Housing-_Market_Insight-Dashboard",
    },
    {
      id: 3,
      src: StudentEnrollmentDashboard,
      demo: "https://drive.google.com/file/d/1WfEa5G5hdgAD85eWzBvcq9SmdsoDoNjW/view?usp=sharing/",
      code: "https://github.com/TanyaSingh1503/Student_Management",
    },
    // {
    //   id: 4,
    //   src: portfolio01,
    //   demo: "https://girish-port-folio.netlify.app/",
    //   code: "https://github.com/Girish600/Portfolio",
    // },
  ];

  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Stories Through Data 
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
              <img
                src={src}
                alt="Portfolio item"
                className="w-full h-48 object-cover rounded-t-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center bg-gray-900">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer text-white text-center rounded-md"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer text-white text-center  rounded-md"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
