import { account, google, signOut, trashBin } from "@assets";
import { Button, DialogModal, Skeleton } from "@components";
import { styles as buttonStyles } from "@components/Button/styles";
import { AuthContext, ModalContext } from "@contexts";
import { auth, db, provider } from "@libs/firebase";
import * as stylex from "@stylexjs/stylex";
import { signInWithPopup } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";
import { useContext, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { styles } from "./styles";
import { formatName } from "./utils";

export const SignIn = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { loading, user } = useContext(AuthContext);
  const formattedName = formatName(user?.displayName);
  const email = user?.email;
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { openModal, closeModal } = useContext(ModalContext);
  const handleSignIn = () => signInWithPopup(auth, provider);
  const handleOpenDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const handleClick = user ? handleOpenDropdown : handleSignIn;
  const handleClickOutside = () => {
    setDropdownOpen(false);
  };
  const handleSignOut = () => {
    auth.signOut();
    setDropdownOpen(false);
  };
  const handleDeleteAccount = async () => {
    openModal(DialogModal, {
      title: "Are you absolutely sure?",
      text: "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
      showCloseButton: false,
      actions: [
        {
          label: "Cancel",
          variant: "secondary",
          onClick: closeModal,
        },
        {
          label: "Delete",
          variant: "destructive",
          onClick: async () => {
            if (user) {
              await deleteDoc(doc(db, "challenges", user.uid));
              await user.delete();
              await auth.signOut();
              closeModal();
            }
          },
        },
      ],
    });
    setDropdownOpen(false);
  };

  useOnClickOutside(wrapperRef, handleClickOutside);

  return loading ? (
    <Skeleton
      style={[buttonStyles.wrapper, buttonStyles.outline, styles.button]}
    />
  ) : (
    <div ref={wrapperRef} {...stylex.props(styles.wrapper)}>
      <Button variant="outline" onClick={handleClick} style={styles.button}>
        {user ? (
          <>
            <img src={account} {...stylex.props(styles.accountIcon)} />
            <span {...stylex.props(styles.accountLabel)}>My account</span>
          </>
        ) : (
          <>
            <img src={google} {...stylex.props(styles.accountIcon)} />
            <span {...stylex.props(styles.googleLabel)}>
              Sign in with Google
            </span>
          </>
        )}
      </Button>

      {isDropdownOpen && (
        <div {...stylex.props(styles.dropdownWrapper)}>
          <div
            {...stylex.props(
              buttonStyles.outline,
              styles.dropdownItem,
              styles.userWrapper
            )}
          >
            <span {...stylex.props(styles.userName)}>{formattedName}</span>
            <span {...stylex.props(styles.userEmail)}>{email}</span>
          </div>
          <Button
            variant="outline"
            style={styles.dropdownItem}
            onClick={handleDeleteAccount}
          >
            <div {...stylex.props(styles.dropdownItemIconWrapper)}>
              <img src={trashBin} {...stylex.props(styles.dropdownItemIcon)} />
            </div>
            <span>Delete account</span>
          </Button>
          <Button
            variant="outline"
            style={styles.dropdownItem}
            onClick={handleSignOut}
          >
            <div {...stylex.props(styles.dropdownItemIconWrapper)}>
              <img src={signOut} {...stylex.props(styles.dropdownItemIcon)} />
            </div>
            <span>Sign out</span>
          </Button>
        </div>
      )}
    </div>
  );
};
