import { ChallengeFormModal, ColorIdentitySymbols } from "@components";
import * as stylex from "@stylexjs/stylex";
import { FC, useContext } from "react";
import { plusIcon } from "@assets";
import { ModalContext } from "@contexts";
import { ChallengeItem, ColorIdentity, PartialScryfallCard } from "@types";
import { TRANSPARENT_PIXEL } from "./constants";
import { styles } from "./styles";
import { getCardFace } from "./utils";

export type DeckCardProps = {
  colorIdentity: ColorIdentity;
  challengeItem: ChallengeItem;
};

export const DeckCard: FC<DeckCardProps> = ({
  colorIdentity,
  challengeItem,
}) => {
  const { openModal } = useContext(ModalContext);
  // TODO: select which face to use
  const face = 0;

  const handleClick = () => {
    openModal(ChallengeFormModal, {
      key: colorIdentity,
      colorIdentity,
      challengeItem,
    });
  };

  return (
    <div
      onClick={handleClick}
      {...stylex.props(styles.cardBase, styles.wrapper)}
    >
      {challengeItem.commander ? (
        <>
          {challengeItem.partner || challengeItem.background ? (
            <>
              <img
                src={
                  getCardFace(challengeItem.commander, face).image_uris
                    ?.art_crop || TRANSPARENT_PIXEL
                }
                {...stylex.props(styles.commanderDualImage)}
              />
              <img
                src={
                  getCardFace(
                    (challengeItem.partner ||
                      challengeItem.background) as PartialScryfallCard,
                    face
                  ).image_uris?.art_crop || TRANSPARENT_PIXEL
                }
                {...stylex.props(styles.partnerDualImage)}
              />
            </>
          ) : (
            <img
              src={
                getCardFace(challengeItem.commander, face).image_uris
                  ?.art_crop || TRANSPARENT_PIXEL
              }
              {...stylex.props(styles.commanderImage)}
            />
          )}
          <div {...stylex.props(styles.container)}>
            <ColorIdentitySymbols
              colorIdentity={colorIdentity}
              style={styles.colorIdentity}
            />
            <div {...stylex.props(styles.commanderName)}>
              {getCardFace(challengeItem.commander, face).name}
              {(challengeItem.partner || challengeItem.background) && (
                <span style={{ fontSize: 15, marginLeft: 6 }}>
                  {`// ${
                    getCardFace(
                      (challengeItem.partner ||
                        challengeItem.background) as PartialScryfallCard,
                      face
                    ).name
                  }`}
                </span>
              )}
            </div>
            <div {...stylex.props(styles.deckTheme)}>{challengeItem.theme}</div>
          </div>
        </>
      ) : (
        <>
          <div {...stylex.props(styles.container, styles.justifyStart)}>
            <ColorIdentitySymbols colorIdentity={colorIdentity} />
          </div>
          <img src={plusIcon} {...stylex.props(styles.plusIcon)} />
        </>
      )}
    </div>
  );
};
