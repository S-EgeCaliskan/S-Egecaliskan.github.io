import { HashLink } from "react-router-hash-link"

const Projects = ({ projects }) => {

    return (
        <div className="projects-container">
            <h2>Personal Projects</h2>
            <div className="my-projects">
                {projects.data.map((project) => (
                    <HashLink to={`/project/${project.id}`} key={project.id}>
                        <div className="project">{project.name}
                        </div>
                    </HashLink>
                ))}
            </div>
        </div >
    );
}

export default Projects;