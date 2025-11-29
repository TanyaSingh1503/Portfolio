import { Calendar, MapPin, Building2 } from "lucide-react";

const ExperienceCard = ({ item }) => {
  return (
    <div className="mt-12 bg-[#0c0c0d] border border-gray-700/40 rounded-3xl p-8 shadow-xl
      hover:border-teal-400/40 hover:shadow-teal-400/20 hover:scale-[1.01] transition-all duration-300">

      <div className="flex flex-col md:flex-row md:justify-between md:items-start">

        {/* LEFT */}
        <div>
          <h3 className="text-2xl font-bold text-white">{item.role}</h3>

          <div className="flex items-center gap-2 text-gray-400 mt-2">
            <Building2 size={16} />
            <span>{item.company}</span>
          </div>

          <ul className="list-disc ml-5 mt-4 text-gray-300 space-y-2 leading-relaxed">
            {item.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          {/* Skill badges */}
          <div className="flex flex-wrap gap-3 mt-6">
            {item.skills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-1 bg-teal-900/20 text-teal-300 text-sm rounded-full border border-teal-700/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="mt-6 md:mt-0 text-gray-300 space-y-4">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>{item.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>{item.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
