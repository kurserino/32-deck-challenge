import { close } from "@assets";
import { Button } from "@components";
import { ModalContext } from "@contexts";
import * as stylex from "@stylexjs/stylex";
import { useContext } from "react";
import { styles } from "./styles";

export const AboutModal = () => {
  const { closeModal: handleCloseModal } = useContext(ModalContext);

  return (
    <div {...stylex.props(styles.wrapper)}>
      <div {...stylex.props(styles.modalHeader)}>
        <h2 {...stylex.props(styles.modalTitle)}>About</h2>
        <button
          onClick={handleCloseModal}
          {...stylex.props(styles.closeButton)}
        >
          <img src={close} {...stylex.props(styles.closeButtonIcon)} />
        </button>
      </div>
      <div>
        <p>
          I love playing commander and building new decks. When I learned about
          the 32 Deck Challenge, I decided to create this project to tackle the
          challenge in a dynamic and organized way.
        </p>
        <p>
          Developed by me, this project not only allows me to track my progress
          in the challenge but also to share my creations with the community.
        </p>
        <p>
          I’m glad you're visiting the project.
          <br />
          Enjoy the challenge,
          <br />
          Kurse
        </p>
        <p>
          You can learn more about me at:
          <br />
          <a href="https://kurse.dev" about="_blank">
            https://kurse.dev
          </a>
        </p>
      </div>
      <div {...stylex.props(styles.buttonsWrapper)}>
        <Button variant="primary" onClick={handleCloseModal}>
          Close
        </Button>
      </div>
    </div>
  );
};
