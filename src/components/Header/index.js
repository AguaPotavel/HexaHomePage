import { Wrapper, CbfLogoContainer, Navigation, UserActions } from "./styles";
import cbfPath from "../../Assets/selecao-brasileira-brasil.png";
import { FiUser, FiSearch } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Header() {
  const Parent = {
    hidden: { y: -200 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2.4,
        delayChildren: 0.7,
      },
    },
  };

  const Child = {
    hidden: { y: -200, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Wrapper variants={Parent} initial="hidden" animate="show">
      <CbfLogoContainer variants={Child}>
        <img src={cbfPath} />
      </CbfLogoContainer>
      <Navigation variants={Child}>
        <a>About</a>
        <a>News</a>
        <a>Store</a>
        <a>Contact</a>
      </Navigation>
      <UserActions variants={Child}>
        <HiOutlineShoppingBag className="icon" />
        <FiUser className="icon" />
        <FiSearch className="icon" />
      </UserActions>
    </Wrapper>
  );
}

export default Header;
