import { Container } from "@components";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./styles";
import { github } from "@assets";

export const Footer = () => {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <Container style={styles.container}>
        <span {...stylex.props(styles.credits)}>
          developed by
          <a
            href="https://kurse.dev"
            target="_blank"
            {...stylex.props(styles.link)}
          >
            kurse.dev
          </a>
        </span>
        <a
          href="https://github.com/kurserino/32-deck-challenge"
          target="_blank"
        >
          <img width={20} src={github} />
        </a>
      </Container>
    </div>
  );
};
