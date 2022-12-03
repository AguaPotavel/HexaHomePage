import { Wrapper } from "./styles";
import { FiFacebook, FiTwitter, FiYoutube, FiInstagram } from "react-icons/fi";

function SideItem() {
  const Parent = {
    hidden: { x: -200, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 2.4,
        delayChildren: 2.7,
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <Wrapper variants={Parent} initial="hidden" animate="show">
      <FiInstagram className="icon" />
      <FiTwitter className="icon" />
      <FiYoutube className="icon" />
      <FiFacebook className="icon" />
    </Wrapper>
  );
}

export default SideItem;
