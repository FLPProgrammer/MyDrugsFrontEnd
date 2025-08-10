import styled, { keyframes } from 'styled-components';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';


export const colorCycle = keyframes`
  0% { color: white; }
  33% { color: red; }
  66% { color: purple; }
  100% { color: green; }
`;

export const AnimatedIconWhats = styled(FaWhatsapp)`
    animation: ${colorCycle} 5s infinite;
    transition: color 0.3s ease-in-out;
    font-size: 30px;
    cursor: pointer;
`

export const AnimatedIconLinkedin = styled(FaLinkedin)` 
    animation: ${colorCycle} 5s infinite;
    transition: color 0.3s ease-in-out;
    font-size: 30px;
    cursor: pointer;
`

export const AnimatedIconGithub = styled(FaGithub)`
    animation: ${colorCycle} 5s infinite;
    transition: color 0.3s ease-in-out;
    font-size: 30px;
    cursor: pointer;
`