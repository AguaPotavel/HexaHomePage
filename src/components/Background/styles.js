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

export const DiagonalLine = styled(motion.div)`
  min-width: 20vw;
  margin-right: 20vw;
  min-height: 300%;
  border-left: 0.1px solid black;
  border-right: 0.1px solid black;
  opacity: 0.1;
  transform: rotate(20deg);
`;
