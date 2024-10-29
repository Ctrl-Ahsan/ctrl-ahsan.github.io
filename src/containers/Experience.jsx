import styled from "styled-components"
import ExperiencePanel from "../components/ExperiencePanel"

const Experience = () => {
    const ExperienceContainer = styled.section`
        height: auto;
        min-height: 100vh;
        overflow: hidden;
        background-color: #efefef;
    `

    return (
        <ExperienceContainer id="experience">
            <ExperiencePanel />
        </ExperienceContainer>
    )
}

export default Experience
