import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from '../hooks';

type AuthLayoutProps = {
  forLogged: boolean;
};

export function AuthLayout({ forLogged }: AuthLayoutProps) {
  const { user, loading } = useAuthState();

  if (loading) {
    return null;
  }

  if (forLogged) {
    return user ? <Outlet /> : <Navigate to="/" />;
  } else {
    return user ? <Navigate to="/" /> : <Outlet />;
  }
}
