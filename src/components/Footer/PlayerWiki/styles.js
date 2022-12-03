import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  height: 80px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: visible;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primary};
    min-height: 95%;
    max-height: 95%;
    min-width: 80%;
    max-width: 80%;
    z-index: 0;
  }

  img {
    height: 105%;
    z-index: 1;
    cursor: pointer;

    &:hover {
      transition: transform 0.2s ease;
      transform: scale(1.1);
    }
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  span {
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: 10px;

    &.header {
      margin-bottom: 5px;
      font-size: 16px;
      font-weight: bold;
    }
  }
`;
