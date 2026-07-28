import Button from "../Common/Button/Button";
import SkillChip from "../Common/SkillChip";
import type { Project } from "../../types/project";
import { FiExternalLink, FiGithub } from "react-icons/fi";
export const ProjectCard = ({ project }: { project: Project }) => {
  const { title, description, technologies, github, live, image } = project;
  return (
    <div
      className="rounded-2xl border border-gray-200 dark:bg-gray-900
dark:border-gray-700
 p-8 shadow-sm bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover object-top transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3
        className="text-2xl text-gray-900
        dark:text-gray-100 font-bold"
      >
        {title}
      </h3>
      <p className="mt-4 text-gray-600 dark:text-gray-400 leading-7">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {technologies.map((tag: string) => (
          <SkillChip key={tag} label={tag} />
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Button variant="outline">
            <div className="flex items-center gap-2">
              <FiGithub />
              GitHub
            </div>
          </Button>
        </a>
      </div>
    </div>
  );
};
