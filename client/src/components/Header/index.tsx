import * as S from "./styles";

import LOGO from "../../assets/img/LOGO.png";
import DropDownMenu from "./DropDown";
import NavBar from "./NavBar";

const Header: React.FC = () => {
  return (
    <>
      <S.ContainerHeader>
        <img src={LOGO} alt="Logotipo da LinkLei" />
        <DropDownMenu />
        <NavBar />
      </S.ContainerHeader>
    </>
  );
};

export default Header;
