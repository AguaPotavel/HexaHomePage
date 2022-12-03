import { Wrapper } from "./styles";
import { FiFacebook, FiTwitter, FiYoutube, FiInstagram } from "react-icons/fi";

function SideItem() {
  const Parent = {
    hidden: { x: -200, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1,
        delayChildren: 0.7,
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
