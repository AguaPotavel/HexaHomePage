import { Wrapper, DiagonalLine } from "./styles";
import { FiFacebook, FiTwitter, FiYoutube, FiInstagram } from "react-icons/fi";

function Background() {
  const Parent = {
    hidden: { y: -200, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2.4,
        delayChildren: 2.7,
      },
    },
  };

  const Child = {
    hidden: { opacity: 0 },
    show: {
      opacity: 0.1,
    },
  };

  return (
    <Wrapper variants={Parent} initial="hidden" animate="show">
      <DiagonalLine variants={Child} left={20} />
      <DiagonalLine variants={Child} left={-50} />
      <DiagonalLine variants={Child} left={-25} />
      <DiagonalLine variants={Child} left={50} />
    </Wrapper>
  );
}

export default Background;
