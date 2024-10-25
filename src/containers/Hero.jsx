import styled from "styled-components";
import ParticlesBackground from "../components/ParticlesBackground";
import IdentityPanel from "../components/IdentityPanel"

const Hero = () => {

    //styling
    const HeroContainer = styled.section`
        height: auto;
        display: flex;
        position: relative;
    `;
    const BGContainer = styled.div`
        height: 100%;
        width: 100%;
        z-index: 0;
        position: absolute;
    `;
    
    return(
        <HeroContainer id="hero">
            <IdentityPanel />
            <BGContainer>
                <ParticlesBackground />
            </BGContainer>
        </HeroContainer>
    )
}

export default Hero