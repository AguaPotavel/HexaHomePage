import { Wrapper, CatarLogo, PlayersWikiContainer } from "./styles";
import catarPath from "../../Assets/catar-cup.png";
import { PlayerWikiItem } from "./PlayerWiki";

// Images //
import neymarPath from "../../Assets/neymar-140.png";
import richarlisonPath from "../../Assets/richarlison-21.png";

function Footer() {
  const Parent = {
    hidden: { y: 200 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2.4,
        delayChildren: 2.7,
      },
    },
  };

  const Players = [
    {
      name: "Neymar",
      path: neymarPath,
    },
    {
      name: "Richarlison",
      path: richarlisonPath,
    },
    {
      name: "Vinicius Jr",
      path: neymarPath,
    },
  ];

  return (
    <Wrapper variants={Parent} initial="hidden" animate="show">
      <CatarLogo>
        <img src={catarPath} />
      </CatarLogo>
      <PlayersWikiContainer>
        <div className="numbersLabel">
          <span className="bold">01</span>
          <span>/10</span>
        </div>
        <div className="ListPlayer">
          {Players.map((player, index) => {
            return (
              <PlayerWikiItem
                Player={player.name}
                imagePath={player.path}
                key={index}
              />
            );
          })}
        </div>
      </PlayersWikiContainer>
    </Wrapper>
  );
}

export default Footer;
