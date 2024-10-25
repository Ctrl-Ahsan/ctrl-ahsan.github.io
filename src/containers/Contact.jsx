import styled from "styled-components";
import ContactPanel from "../components/ContactPanel";

const Contact = () => {

    const ContactContainer = styled.section`
        height: auto;
        overflow: hidden;
        background-color: #e2e2e2;
    `;

    return (
        <ContactContainer id="contact">
            <ContactPanel />
        </ContactContainer>
    )
}

export default Contact