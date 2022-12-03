import styled from "styled-components";
import { motion } from "framer-motion";

export const LineWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -1;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary};
  clip-path: polygon(68% 0, 70% 0, 41% 100%, 38% 100%);
  pointer-events: none;
`;

export const ContentWrapper = styled(motion.div)`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  pointer-events: none;

  span {
    position: absolute;
    font-size: 15rem;
    font-family: ${({ theme }) => theme.fonts.banner};
    z-index: -1;

    &:nth-child(1) {
      left: 25vw;
    }

    &:nth-child(2) {
      left: 36vw;
    }

    &:nth-child(4) {
      left: 62vw;
    }

    &:nth-child(5) {
      left: 80vw;
    }
  }
`;

export const BlurBackground = styled(motion.div)`
  display: flex;
  overflow: hidden;
  position: absolute;
  z-index: -2;
  width: 100vw;
  height: 100vh;
  pointer-events: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: show;
  }
`;

export const PngRicharlison = styled(motion.div)`
  display: flex;

  img {
    width: 55vw;
  }
`;

export const PlayButton = styled(motion.span)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  border-radius: 100px;
  position: absolute;
  cursor: pointer;
  border: 2px solid black;
  pointer-events: all;

  .icon {
    width: 25px;
  }
`;

export const PlayIconWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(20deg);
`;
