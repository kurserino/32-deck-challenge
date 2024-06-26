import * as stylex from "@stylexjs/stylex";
import { useContext } from "react";
import { close } from "@assets";
import { ModalContext } from "../../contexts";
import { Button } from "../Button";
import { styles } from "./styles";

type DialogModalProps = {
  title: string;
  text: string;
  actions: {
    label: string;
    variant?: "primary" | "secondary" | "outline" | "destructive";
    onClick: () => void;
  }[];
  showCloseButton?: boolean;
};

export const DialogModal = ({
  title,
  text,
  actions,
  showCloseButton = true,
}: DialogModalProps) => {
  const { closeModal } = useContext(ModalContext);

  return (
    <div {...stylex.props(styles.wrapper)}>
      <div {...stylex.props(styles.formWrapper)}>
        <div {...stylex.props(styles.formHeader)}>
          <div {...stylex.props(styles.title)}>{title}</div>
          {showCloseButton && (
            <button onClick={closeModal} {...stylex.props(styles.closeButton)}>
              <img src={close} {...stylex.props(styles.closeButtonIcon)} />
            </button>
          )}
        </div>
        <div {...stylex.props(styles.text)}>{text}</div>
        <div {...stylex.props(styles.actionsWrapper)}>
          {actions.map(({ label, variant = "primary", onClick }) => (
            <Button variant={variant} onClick={onClick}>
              {label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
