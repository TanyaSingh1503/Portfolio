import React from "react";
import excel from "../assets/portfolio/excel.png";
import sql from "../assets/portfolio/sql.png";
import powerbi from "../assets/portfolio/powerbi.png";
import Tableau from "../assets/portfolio/Tableau.png";
import python from "../assets/portfolio/python.png";
import JupyterNotebook from "../assets/portfolio/JupyterNotebook.png";
import vsCode from "../assets/portfolio/vsCode.png";
import github from "../assets/portfolio/github.png";
import PowerQuery from "../assets/portfolio/PowerQuery.png";

const TechnicalStack = () => {
  const techs = [
    {
      id: 1,
      src: excel,
      title: "Excel",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: sql,
      title: "SQL",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: powerbi,
      title: "Power BI",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: Tableau,
      title: "Tableau",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: python,
      title: "Python",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: JupyterNotebook,
      title: "Jupyter Notebook",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: vsCode,
      title: "VS Code",
      style: "shadow-gray-500",
    },
    {
      id: 8,
      src: PowerQuery,
      title: "Power Query",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: github,
      title: "Github",
      style: "shadow-gray-500",
    }
  ];
  return (
    <div
      name="technicalstack"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col w-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technical Stack
          </p>
          <p className="py-6">These are the technologies I've expertise in</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalStack;
