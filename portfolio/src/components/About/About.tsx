import Container from "../Common/Container";
import { about } from "../../data/about";
import Button from "../Common/Button/Button";
import SectionTitle from "../Common/SectionTitle";
const About = () => {
  return (
    <section id="about" className="py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="About Me" />
          <p className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-400 text-center">
            {about.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {about.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium transition-all duration-200 hover:bg-blue-600 hover:text-white hover:-translate-y-1"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a href="/GK_Resume.pdf" download>
              <Button>Download Resume</Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default About;
