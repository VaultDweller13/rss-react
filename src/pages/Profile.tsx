import { useAuthState } from '../hooks';

export function Profile() {
  const { user } = useAuthState();
  const userData = [];

  if (user) {
    for (const [key, value] of Object.entries(user)) {
      userData.push(`${key}: ${value}\n`);
    }
  }

  return <pre>{userData}</pre>;
}
