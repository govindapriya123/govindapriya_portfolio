import Button from "../Common/Button/Button";
import Container from "../Common/Container";
import { profile} from "../../data/profile";
const Person=()=>{
    return(
        <section id="home" className="min-h-screen flex items-center">
            <Container>
               <div className="max-w-3xl">
                <p className="text-lg text-blue-600 font-medium">{profile.greeting}</p>
                <h1 className="mt-2 text-5xl md:text-7xl font-bold tracking-tight">{profile.name}</h1>
                    <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-400">{profile.role}</h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">{profile.description}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                    <Button>
                        View Projects
                    </Button>
                    <a href="/GK_Resume.pdf" download>
                        <Button variant="outline">
                            Download Resume
                        </Button>
                    </a>
                </div>
                <div className="mt-8 flex gap-6">
                    <a href="https://github.com/govindapriya123" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://www.linkedin.com/in/korni-govindapriya" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:example@example.com">Email</a>
                </div>
               </div>
            </Container>
        </section>
    )
}
export default Person;