import { close } from "@assets";
import { Button } from "@components";
import { ModalContext } from "@contexts";
import * as stylex from "@stylexjs/stylex";
import { useContext } from "react";
import { styles } from "./styles";

export const HowItWorksModal = () => {
  const { closeModal: handleCloseModal } = useContext(ModalContext);

  return (
    <div {...stylex.props(styles.wrapper)}>
      <div {...stylex.props(styles.modalHeader)}>
        <h2 {...stylex.props(styles.modalTitle)}>How it works?</h2>
        <button
          onClick={handleCloseModal}
          {...stylex.props(styles.closeButton)}
        >
          <img src={close} {...stylex.props(styles.closeButtonIcon)} />
        </button>
      </div>
      <div>
        <p>
          This challenge is designed to inspire you to build a commander deck
          for each of the 32 color combinations. Here’s a quick guide on how to
          use the app to complete the challenge:
        </p>
        <h3 {...stylex.props(styles.title)}>Select a Color Combination:</h3>
        <p>
          • Click on any color combination from the list to start building a
          deck for that specific combination.
        </p>
        <h3 {...stylex.props(styles.title)}>Add Your Commander:</h3>
        <p>• Enter your commander for the selected color combination.</p>
        <p>
          • Optionally, fill in the theme of your deck and add a URL to your
          decklist.
        </p>
        <h3 {...stylex.props(styles.title)}>Save and Track Progress:</h3>
        <p>
          • Save your deck to track your progress. You can review and edit any
          of your decks at any time by selecting the color combination again.
        </p>
        <p>Enjoy building and completing the 32 Deck Challenge!</p>
      </div>
      <div {...stylex.props(styles.buttonsWrapper)}>
        <Button variant="primary" onClick={handleCloseModal}>
          Close
        </Button>
      </div>
    </div>
  );
};
