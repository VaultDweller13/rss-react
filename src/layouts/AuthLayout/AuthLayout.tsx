import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from '../../hooks';

export function AuthLayout() {
  const { user, loading } = useAuthState();

  if (loading) {
    return null;
  }

  if (user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
