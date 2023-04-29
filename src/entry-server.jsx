import { renderToPipeableStream } from 'react-dom/server';
import Html from './components/html/Html';

export function render(url, response) {
  console.log(url);

  let didError = false;
  const { pipe } = renderToPipeableStream(
    <Html>
      <h1>Hello</h1>
    </Html>,
    {
      onShellReady() {
        response.statusCode = didError ? 500 : 200;
        response.setHeader('Content-type', 'text/html');
        pipe(response);
      },
      onError(x) {
        didError = true;
        console.error(x);
      },
    }
  );
}
