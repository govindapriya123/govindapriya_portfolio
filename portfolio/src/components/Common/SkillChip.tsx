interface SkillChipProps{
    label:string;
}
const SkillChip=({label}:SkillChipProps)=>{
    return(
        <span className="px-3 py-1 bg-blue-100 rounded-full text-blue-700 font-medium transition-all duration-200 hover:bg-blue-600 hover:text-white hover:-translate-y-1">
            {label}
        </span>
    );
};
export default SkillChip;