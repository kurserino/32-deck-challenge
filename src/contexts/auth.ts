import { User } from 'firebase/auth';
import { createContext } from 'react';

type AuthContextProps = {
  loading: boolean;
  user: User | null;
};

export const AuthContext = createContext<AuthContextProps>({
  user: null,
} as AuthContextProps);
