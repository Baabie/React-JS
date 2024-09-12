import styled from "styled-components";


export const Button = styled.button`
    color: #ffff;
    background-color: #5252c5;
    border: 1px #5252c5 solid;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;

    &:hover{
        background-color: #5252c5;
        border: 1px #5252c5 solid;
        box-shadow: 0 0 0 2px rgb(0, 0, 0, 0.5);
    }
`;