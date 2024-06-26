import { User, onAuthStateChanged } from "firebase/auth";
import { PropsWithChildren, useState } from "react";
import { AuthContext } from "@contexts";
import { auth } from "@libs/firebase";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  onAuthStateChanged(auth, (user) => {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    if (user) setUser(user);
    // User is signed out
    else setUser(null);
    if (loading) setLoading(false);
  });
  return (
    <AuthContext.Provider value={{ loading, user }}>
      {children}
    </AuthContext.Provider>
  );
};
