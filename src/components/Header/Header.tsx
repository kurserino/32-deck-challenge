import { Container, NavItem, NavMenu, SignIn } from "@components";
import { useNav } from "@hooks";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./styles";
import { useMediaQuery } from "usehooks-ts";

export const Header = () => {
  const isDesktopScreen = useMediaQuery("(min-width: 768px)");
  const { openHowItWorksModal, openAboutModal } = useNav();

  return (
    <div {...stylex.props(styles.wrapper)}>
      <Container style={styles.container}>
        <div {...stylex.props(styles.navWrapper)}>
          {!isDesktopScreen && <NavMenu />}
          {isDesktopScreen && (
            <>
              <NavItem style={styles.home}>32 deck challenge</NavItem>
              <NavItem onClick={openHowItWorksModal}>How it works?</NavItem>
              <NavItem onClick={openAboutModal}>About</NavItem>
            </>
          )}
        </div>
        {!isDesktopScreen && (
          <NavItem style={styles.home}>32 deck challenge</NavItem>
        )}
        <SignIn />
      </Container>
    </div>
  );
};
