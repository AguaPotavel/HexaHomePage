import {
  LineWrapper,
  ContentWrapper,
  PngRicharlison,
  BlurBackground,
  PlayButton,
  PlayIconWrapper,
} from "./styles";

import { motion } from "framer-motion";

import richarlisonPath from "../../Assets/richarlison.svg";
import bluBackgroundPath from "../../Assets/background.png";

import { HiPlay } from "react-icons/hi2";

function InnerContent() {
  const Parent = {
    hidden: { y: 900, x: -350 },
    show: {
      y: 0,
      x: 0,
      transition: {
        delay: 0,
        delayChildren: 0,
        duration: 3.2,
        ease: [1, 0.99, 0.4, 1.06],
      },
    },
  };

  const pngAnimation = {
    hidden: { scale: 1.1 },
    show: {
      scale: 1,
      transition: {
        delay: 0,
        delayChildren: 0,
        duration: 3,
        type: "spring",
      },
    },
  };

  const backgroundAnimation = {
    hidden: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
    show: {
      clipPath: "polygon(68% 0, 70% 0, 41% 100%, 38% 100%)",
      transition: {
        delay: 2.2,
        delayChildren: 0,
        duration: 1,
        type: "spring",
        stiffness: 60,
      },
    },
  };

  const LettersAnimation = {
    hiddenLeft: { x: -1000 },
    hiddenRight: { x: 1000 },
    show: {
      x: 0,
      transition: {
        delay: 2.2,
        duration: 1,
        type: "spring",
        stiffness: 60,
      },
    },
  };

  const PlayButtonAnimation = {
    hidden: {
      scale: 0,
    },
    show: {
      scale: 1,
      transition: {
        delay: 2.2,
        delayChildren: 2.5,
        duration: 1,
        type: "spring",
        stiffness: 60,
      },
    },
  };

  const PlayInnerAnimation = {
    hidden: {
      rotate: -90,
    },
    show: {
      rotate: 0,
    },
  };

  return (
    <>
      <BlurBackground
        variants={backgroundAnimation}
        initial="hidden"
        animate="show"
      >
        <img src={bluBackgroundPath} />
      </BlurBackground>
      <LineWrapper
        variants={Parent}
        initial="hidden"
        animate="show"
      ></LineWrapper>
      <ContentWrapper variants={pngAnimation} initial="hidden" animate="show">
        <motion.span
          variants={LettersAnimation}
          initial="hiddenLeft"
          animate="show"
        >
          H
        </motion.span>
        <motion.span
          variants={LettersAnimation}
          initial="hiddenLeft"
          animate="show"
        >
          E
        </motion.span>
        <img src={richarlisonPath} width={600} />
        <motion.span
          variants={LettersAnimation}
          initial="hiddenRight"
          animate="show"
        >
          A
        </motion.span>
        <PlayButton
          variants={PlayButtonAnimation}
          initial="hidden"
          animate="show"
        >
          <PlayIconWrapper variants={PlayInnerAnimation}>
            <HiPlay className="icon" />
          </PlayIconWrapper>
        </PlayButton>
      </ContentWrapper>
    </>
  );
}

export default InnerContent;
