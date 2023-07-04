import { HashLink } from "react-router-hash-link"

const Projects = ({ projects }) => {

    return (
        <div className="projects-container">
            <h2>Personal Projects</h2>
            <div className="my-projects">
                {projects.data.map((project) => (
                    <HashLink to={`/project/${project.id}`} key={project.id}>
                        <span className="project">
                            {project.name}
                        </span>
                    </HashLink>
                ))}
            </div>
        </div >
    );
}

export default Projects;