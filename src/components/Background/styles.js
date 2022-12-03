import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -1;
  overflow: hidden;
`;

export const DiagonalLine = styled(motion.li)`
  position: absolute;
  left: ${({ left }) => left}vw;
  min-width: 100vw;
  min-height: 100vh;
  border-left: 0.1px solid black;
  opacity: 0.1;
  clip-path: polygon(70% 0, 70.1% 0, 38% 100%, 37.9% 100%);
  background-color: black;
`;
