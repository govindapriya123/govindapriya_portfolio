import Container from "../Common/Container";
import SectionTitle from "../Common/SectionTitle";
import { skillCategories } from "../../data/skills";
import SkillCategoryCard from "./SkillCategoryCard";
const Skills=()=>{
    return(
        <section id="skills" className="py-24">
            <Container>
                <SectionTitle title="Skills"/>
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                 {skillCategories.map((category)=>(
                    <SkillCategoryCard
                    category={category}
                    />
                 ))}
                </div>
            </Container>
        </section>
    )
}
export default Skills;