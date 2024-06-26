import { menu } from "@assets";
import { Button } from "@components";
import { useNav } from "@hooks";
import * as stylex from "@stylexjs/stylex";
import { useState } from "react";
import { styles } from "./styles";

export const NavMenu = () => {
  const { openHowItWorksModal, openAboutModal } = useNav();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdown = () => setIsDropdownOpen(false);

  const handleHowItWorksClick = () => openHowItWorksModal(closeDropdown);

  const handleAboutClick = () => openAboutModal(closeDropdown);

  const handleClick = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div {...stylex.props(styles.wrapper)}>
      <Button variant="outline" onClick={handleClick} style={styles.button}>
        <img src={menu} {...stylex.props(styles.menuIcon)} />
      </Button>
      {isDropdownOpen && (
        <div {...stylex.props(styles.dropdownWrapper)}>
          <Button
            variant="outline"
            style={styles.dropdownItem}
            onClick={handleHowItWorksClick}
          >
            How it works
          </Button>
          <Button
            variant="outline"
            style={styles.dropdownItem}
            onClick={handleAboutClick}
          >
            About
          </Button>
        </div>
      )}
    </div>
  );
};
