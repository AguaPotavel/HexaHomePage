import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100px;
  gap: 20px;
  margin-left: 20px;

  .icon {
    cursor: pointer;
  }
`;
