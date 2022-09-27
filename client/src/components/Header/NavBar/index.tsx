import { Container, Nav, NotLoggedContainer } from "./styles";

import { ButtonOutline2, ButtonLink } from "../../Buttons";

const NavBar: React.FC = () => {
  return (
    <Container>
      <Nav>
        <ButtonLink>Feed</ButtonLink>
        <ButtonLink>Conteudos</ButtonLink>
        <ButtonLink>Oportunidades</ButtonLink>
      </Nav>

      <NotLoggedContainer>
        <ButtonLink>Login</ButtonLink>
        <ButtonOutline2>Cadastrar</ButtonOutline2>
      </NotLoggedContainer>
    </Container>
  );
};

export default NavBar;
