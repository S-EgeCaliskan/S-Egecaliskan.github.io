import { useState } from "react";
import data from "./data.json"
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link"


const Project = () => {
    const [projects, setProjects] = useState(data)
    const { id } = useParams()

    return (
        <div className="project-info">
            <h2>{projects.data[id - 1].name}</h2>
            <div className="project-description">
                <p id="project-description">{projects.data[id - 1].description}</p>
                <a href={projects.data[id - 1].link} target="_blank"><p>Check the Github repo of the project</p></a>
                <HashLink to="/"><h3>&laquo; Back</h3></HashLink>
            </div>
        </div >

    );
}

export default Project;