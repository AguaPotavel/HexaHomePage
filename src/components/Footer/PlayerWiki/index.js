import { Wrapper, ImageContainer, InformationContainer } from "./styles";

export function PlayerWikiItem({ imagePath, Player }) {
  return (
    <Wrapper>
      <ImageContainer>
        <img src={imagePath} />
      </ImageContainer>
      <InformationContainer>
        <span className="header">{Player}</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing</span>
      </InformationContainer>
    </Wrapper>
  );
}
