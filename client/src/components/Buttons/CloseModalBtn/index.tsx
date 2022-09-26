import { IoIosClose } from "react-icons/io";
import { ButtonModal } from "./styles";

export interface IButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

export const CloseModalBtn: React.FC<IButtonProps> = ({ ...rest }) => {
  return (
    <ButtonModal>
      <button {...rest}>
        <IoIosClose size="1.5rem" color="#fcfdff" />
      </button>
    </ButtonModal>
  );
};
