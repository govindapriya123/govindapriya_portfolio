interface SectionTitleProps{
    title:string;
}
const SectionTitle=({title}:SectionTitleProps)=>{
    return(
          <h2 className="text-4xl font-bold text-center tracking-tight">{title}</h2> 
    )
}
export default SectionTitle;