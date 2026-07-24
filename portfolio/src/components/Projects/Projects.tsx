import Container from "../Common/Container";
import { projects } from "../../data/projects";
import {ProjectCard }from "./ProjectCard";
import SectionTitle from "../Common/SectionTitle";
const Projects=()=>{
    return(
        <section id="projects" className="py-24">
           <Container>
           <SectionTitle title="Featured Projects"/>
            <div className="mt-12 grid gap-8">
               {projects.map((project)=>(
                <ProjectCard
                 key={project.id}
                 project={project}
                />
               ))}
            </div>
           </Container>
        </section>
    )
}
export default Projects;