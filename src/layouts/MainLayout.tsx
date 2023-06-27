import { Outlet } from 'react-router-dom';
import { Header } from '../components';

export function MainLayout() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Outlet />
      </main>
    </>
  );
}
