import type { SkillCategory } from "../../types/SkillCategory";
import SkillChip from "../Common/SkillChip";
import { FiCpu, FiMonitor, FiServer } from "react-icons/fi";
const iconMap:any = {
  frontend: <FiMonitor />,
  backend: <FiServer />,
  ai: <FiCpu />,
};
interface SkillsCategoryCardProps{
    category:SkillCategory;
}
const SkillCategoryCard=({category}:SkillsCategoryCardProps)=>{
    const {title,icon,skills}=category;
    return(
      <div className="rounded-2xl border border-gray-200 p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
       <h3 className="flex items-center gap-2 text-2xl font-bold"><span>{iconMap?.[icon]}</span>{title}</h3>
       <div className="mt-6 flex flex-wrap gap-3">{skills.map((skill)=>(<SkillChip key={skill} label={skill}/>))}</div>
      </div>
    )
}
export default SkillCategoryCard;