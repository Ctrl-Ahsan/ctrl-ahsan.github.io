import styled from "styled-components";
import TechnologiesPanel from "../components/TechnologiesPanel";

const Technologies = () => {

    const TechnologiesContainer = styled.section`
        height: auto;
        min-height: 100vh;
        overflow: hidden;
        background-color: #efefef;
    `;

    return ( 
        <TechnologiesContainer id="technologies">
            <TechnologiesPanel />
        </TechnologiesContainer>
     )
}
 
export default Technologies;