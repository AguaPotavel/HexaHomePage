import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;
`;

export const CatarLogo = styled.div`
  display: flex;
  width: 200px;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;

  img {
    height: 100px;
  }
`;

export const PlayersWikiContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  height: 100%;
  padding: 0px 20px;

  .numbersLabel {
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.normal};
    color: black;

    span {
      opacity: 0.7;

      &.bold {
        font-weight: bold;
        font-size: 22px;
        opacity: 1;
      }
    }
  }

  .ListPlayer {
    margin-left: 20px;
    display: flex;
    gap: 20px;
  }
`;
