import { FiGithub, FiLinkedin } from "react-icons/fi";
import Container from "../Common/Container";
const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8">
      <Container>
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Govindapriya Korni
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {" "}
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/govindapriya123"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-600"
          >
            <FiGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/govindapriya-korni"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-600"
          >
            <FiLinkedin size={22} />
          </a>
        </div>
         <a href="#home" className="text-sm text-blue-600 hover:underline">
            ↑ Back to Top
          </a>
      </Container>
    </footer>
  );
};
export default Footer;
