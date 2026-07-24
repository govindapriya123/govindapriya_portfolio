import { contact } from "../../data/contact";
import Container from "../Common/Container";
import SectionTitle from "../Common/SectionTitle";
import ContactItem from "./ContactItem";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionTitle title="Get In Touch" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-gray-600">
          I'm always open to discussing new opportunities, collaborations, or
          exciting projects.
        </p>
        <div className="mx-auto mt-12 max-w-xl space-y-6">
          {contact.map((contact) => (
            <ContactItem key={contact?.type} type={contact?.type} value={contact?.value}/>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Contact;
