import styled from "styled-components";
import ProjectPanel from "../components/ProjectPanel";

const Projects = () => {

    const ProjectsContainer = styled.section`
        height: auto;
        min-height: 100vh;
        overflow: hidden;
        background-color: #e2e2e2;
    `;

    return (
        <ProjectsContainer id="projects">
            <ProjectPanel />
        </ProjectsContainer>
    )
}

export default Projects