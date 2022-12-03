import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  height: 100px;
  margin-top: 25px;
  width: calc(100% - 20px);
  gap: 10px;
  margin-left: 20px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

export const CbfLogoContainer = styled(motion.div)`
  width: 100px;
  img {
    height: 100px;
  }
`;

export const Navigation = styled(motion.div)`
  gap: 35px;
  flex: 3;
  a {
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    font-weight: bold;

    cursor: pointer;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 0px;
      min-width: 0%;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.secondary};
      transition: min-width 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    &:hover {
      &:after {
        min-width: 100%;
      }
    }
  }
`;

export const UserActions = styled(motion.div)`
  min-width: 200px;

  .icon {
    margin: 20px;
    cursor: pointer;
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
      transform: scale(1.3);
    }
  }
`;
