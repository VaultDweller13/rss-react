import Header from '../components/Header';

export default function NotFound() {
  return (
    <>
      <Header currentPage="Page not found" />
      <main className="wrapper">
        <h1 className="not-found">404</h1>
      </main>
    </>
  );
}
