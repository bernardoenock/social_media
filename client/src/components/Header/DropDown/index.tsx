import * as S from "./styles";

import { useState } from "react";

import BurguerIcon from "../BurguerIcon";

const DropDownMenu: React.FC = () => {
  const [drop, setDrop] = useState<boolean>(false);

  const handleMenu = () => {
    setDrop(!drop);
  };

  return (
    <S.Container>
      <S.DropRoot onOpenChange={handleMenu}>
        <S.DropTrigger>
          <BurguerIcon open={drop} />
        </S.DropTrigger>
        <S.DropContent>
          <S.DropItem>Feed</S.DropItem>
          <S.DropItem>Conteudos</S.DropItem>
          <S.DropItem>Oportunidades</S.DropItem>
          <S.DropSeparator />
          <S.DropItem>Login</S.DropItem>
          <S.DropItemButton>Cadastrar</S.DropItemButton>
          <S.DropSeparator />
        </S.DropContent>
      </S.DropRoot>
    </S.Container>
  );
};
export default DropDownMenu;
