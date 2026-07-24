import SectionTitle from "../Common/SectionTitle";
import { experiences } from "../../data/experience";
import ExperienceCard from "./ExperienceCard";
import Container from "../Common/Container";
const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <Container>
        <SectionTitle title="Experience" />
        <div className="relative mt-12">
          <div className="absolute left-3 top-0 h-full w-0.5 bg-blue-200"/>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Experience;
