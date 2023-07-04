import linkedInBadge from "./images/linkedin.svg";
import css3Badge from "./images/css3.svg";
import djangoBadge from "./images/django.svg";
import htmlBadge from "./images/html.svg";
import javascriptBadge from "./images/javascript.svg";
import pythonBadge from "./images/python.svg";
import reactBadge from "./images/react.svg"
import mysqlBadge from "./images/mysql.svg"
import githubBadge from "./images/github.svg"
import { useState } from "react";
import Projects from "./Projects";
import data from "../data.json"

const About = () => {

    const myLinkedIn = "https://www.linkedin.com/in/salim-caliskan-724811273/"
    const myGithub = "https://github.com/S-EgeCaliskan"

    const [projects, setProjects] = useState(data)

    return (
        <div className="about-me">
            <h2>About me</h2>
            <div className="links">
                <a href={myLinkedIn}><img src={linkedInBadge} alt="linkedin badge" /></a>
                <a href={myGithub} ><img src={githubBadge} alt="github badge" /></a>
            </div>
            <div className="personal-statement">
                <p>Though I do not have an IT background, I got into programming with HTML and CSS, after which I learned JavaScript. After these I picked up
                    Python, React, Django and even some C# along the way. I also learned version controlling with git. <br /><br />
                    It is my passion to code, and I hope to make a career shift
                    into the world of software development. Eager to learn, I never shy away from
                    new challenges. I finished several personal projects, some of which can be found below, using different technologies I learned. My versatile skill set and experience show my willingness to
                    work to the best of my abilities. Through good feedback and coaching, I could make a great
                    asset to my future team.</p>
            </div>
            <h3>My stack:</h3>
            <div className="my-skills">
                <span><img src={reactBadge} alt="react badge" /></span>
                <span><img src={pythonBadge} alt="python badge" /></span>
                <span><img src={djangoBadge} alt="django badge" /></span>
                <span><img src={javascriptBadge} alt="javascript badge" /></span>
                <span><img src={css3Badge} alt="css3 badge" /></span>
                <span><img src={htmlBadge} alt="html5 badge" /></span>
            </div>

            <Projects projects={projects} />

            <h3>Familiar with:</h3>
            <div className="other-skills">
                <span><img src={mysqlBadge} alt="mySQL badge" /></span>
            </div>

            <div className="language-skills">
                <h3>Languages</h3>
                <p>English, Turkish, German, Dutch</p>
            </div>

        </div>
    );
}

export default About;