import { DeckCard, Skeleton } from "@components";
import { styles as deckCardStyles } from "@components/DeckCard/styles";
import { ChallengeContext } from "@contexts";
import * as stylex from "@stylexjs/stylex";
import { ColorIdentity } from "@types";
import { useContext } from "react";
import { styles } from "./styles";

export const ChallengeItemsGrid = () => {
  const { loading, filteredChallenge } = useContext(ChallengeContext);

  return (
    <div {...stylex.props(styles.wrapper)}>
      {/* {(filteredChallenge && (Object.keys(colorIdentities) as ColorIdentity[])) */}
      {(
        filteredChallenge && (Object.keys(filteredChallenge) as ColorIdentity[])
      )
        // Move unfilled color identities to end (scryfallId: undefined)
        .sort((a: string, b: string): number => {
          const getItem = (i: string) => filteredChallenge[i as ColorIdentity];
          if (!getItem(a)?.commander) return 1;
          if (!getItem(b)?.commander) return -1;
          return 0;
        })
        .map((colorIdentity) => {
          const challengeItem = filteredChallenge[colorIdentity];
          const deckCardProps = {
            colorIdentity,
            challengeItem,
          };
          return loading ? (
            <Skeleton key={colorIdentity} style={deckCardStyles.cardBase} />
          ) : (
            <DeckCard key={colorIdentity} {...deckCardProps} />
          );
        })}
    </div>
  );
};
