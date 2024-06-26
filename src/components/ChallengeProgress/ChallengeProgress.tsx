import { ChallengeContext } from "@contexts";
import * as stylex from "@stylexjs/stylex";
import { useContext } from "react";
import { styles } from "./styles";
import { getChallengeProgress } from "./utils";
import { Skeleton } from "@components";

export const ChallengeProgress = () => {
  const { challenge, loading } = useContext(ChallengeContext);
  const porcentage = getChallengeProgress(challenge);

  if (loading) {
    return <Skeleton style={styles.skeleton} />;
  }

  return <div {...stylex.props(styles.wrapper)}>{porcentage}% completed</div>;
};
