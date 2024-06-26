import { VIEW_PARAM } from "@constants";
import {
  AuthContext,
  ChallengeContext,
  challengeInitialState,
} from "@contexts";
import { db } from "@libs/firebase";
import { Challenge, ChallengeItem, ColorIdentity, ColorSymbol } from "@types";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export const ChallengeProvider = ({ children }: PropsWithChildren) => {
  const { user, loading: loadingUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [challenge, setChallenge] = useState<Challenge>({
    ...challengeInitialState,
  });
  const [filter, setFilter] = useState<ColorSymbol[]>([]);

  const filteredChallenge = Object.entries(challenge).reduce(
    (acc, [colorIdentity, challengeItem]) => {
      const index = colorIdentity as ColorIdentity;
      if (
        filter.length === 0 ||
        filter.some((color) => colorIdentity.includes(color))
      ) {
        acc[index] = challengeItem;
      }
      return acc;
    },
    {} as Challenge
  );

  const setChallengeItem = (
    colorIdentity: ColorIdentity,
    challengeItem: ChallengeItem
  ) => {
    setChallenge({ ...challenge, [colorIdentity]: challengeItem });
  };

  const clearChallengeItem = (colorIdentity: ColorIdentity) => {
    setChallenge({
      ...challenge,
      [colorIdentity]: challengeInitialState[colorIdentity],
    });
  };

  const fetchStoredChallenge = useCallback(async () => {
    if (!loading) setLoading(true);

    const params = new URLSearchParams(document.location.search);
    const viewParam = params.get(VIEW_PARAM);

    if (user || viewParam) {
      const challengeId = viewParam || user?.uid || "";
      const docRef = doc(db, "challenges", challengeId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // user has stored challenge in firestore
        const storedChallenge = docSnap.data();
        const formattedChallenge = { ...challengeInitialState };
        Object.entries(storedChallenge).forEach(
          ([colorIdentity, storedChallengeItem]) => {
            const index = colorIdentity as ColorIdentity;
            formattedChallenge[index] = storedChallengeItem;
          }
        );
        setChallenge(formattedChallenge);
        setLoading(false);
      } else if (user && !viewParam) {
        // new user and has stored local challenge, then store it in firestore
        const storedChallenge: Challenge = JSON.parse(
          localStorage.getItem("challenge") || "{}"
        );
        if (Object.keys(storedChallenge).length) {
          await setDoc(doc(db, "challenges", user.uid), storedChallenge, {
            merge: true,
          });
          localStorage.removeItem("challenge");
        }
        setLoading(false);
      }
    }
  }, [loading, user]);

  const fetchLocalStoredChallenge = useCallback(async () => {
    if (!loading) setLoading(true);
    const storedChallenge: Challenge = JSON.parse(
      localStorage.getItem("challenge") || "{}"
    );
    const formattedChallenge: Challenge = { ...challengeInitialState };
    Object.entries(storedChallenge).forEach(
      ([colorIdentity, storedChallengeItem]) => {
        const index = colorIdentity as ColorIdentity;
        formattedChallenge[index] = storedChallengeItem;
      }
    );
    setChallenge(formattedChallenge);
    setLoading(false);
  }, [loading, user]);

  useEffect(() => {
    if (!loadingUser) {
      if (user) fetchStoredChallenge();
      else fetchLocalStoredChallenge();
    }
  }, [loadingUser, user]);

  return (
    <ChallengeContext.Provider
      value={{
        loading,
        challenge,
        filteredChallenge,
        filter,
        setFilter,
        setChallengeItem,
        clearChallengeItem,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};
