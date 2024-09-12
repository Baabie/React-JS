import styled from "styled-components";
import imgem4 from "../../assets/imagem4.png"

export const Section = styled.section`
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    background-color: ${`url(${imagem4})`};

    p{
        color: #ffff;
        font-size: 20px;
    }
`