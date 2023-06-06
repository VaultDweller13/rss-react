import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';

type User = typeof auth.currentUser;

export const useAuthState = () => {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => listener();
  }, []);

  return user;
};
