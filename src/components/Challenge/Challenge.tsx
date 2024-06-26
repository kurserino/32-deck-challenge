import { share } from "@assets";
import {
  Button,
  ChallengeFilter,
  ChallengeItemsGrid,
  ChallengeProgress,
  Container,
} from "@components";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./styles";

export const Challenge = () => {
  return (
    <Container>
      <div {...stylex.props(styles.wrapper)}>
        <div {...stylex.props(styles.topbar)}>
          <div {...stylex.props(styles.leftContent)}>
            <h1 {...stylex.props(styles.title)}>Your challenge</h1>
            <ChallengeProgress />
          </div>
          <div {...stylex.props(styles.rightContent)}>
            <Button
              variant="secondary"
              style={[styles.shareButton, styles.hidden]}
            >
              <img src={share} />
            </Button>
            <ChallengeFilter />
          </div>
        </div>
        <ChallengeItemsGrid />
      </div>
    </Container>
  );
};
