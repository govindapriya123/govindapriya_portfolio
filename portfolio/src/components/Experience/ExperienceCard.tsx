import type { Experience } from "../../types/experience";

interface ExperienceCardProps {
  experience: Experience;
}
const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const { role, company, duration, achievements } = experience;
  return (
    <div className="relative mb-12 pl-12">
      <div className="absolute left-0 top-2 h-6 w-6 rounded-full bg-blue-600 border-4 border-white"></div>
      <div className="rounded-xl border border-gray-200 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h3 className="text-2xl font-bold">{role}</h3>
        <p className="mt-2 font-medium text-blue-600">{company}</p>
        <p className="mt-2 text-sm text-gray-500">{duration}</p>
        <ul className="mt-6 space-y-3">
          {achievements.map((achievement) => (
            <li key={achievement} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-blue-300" />
              <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ExperienceCard;
