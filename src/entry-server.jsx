import { renderToPipeableStream } from 'react-dom/server';

export function render(url, response) {
  console.log(url);
  let didError = false;
  const { pipe } = renderToPipeableStream(<h1>Hello</h1>, {
    onShellReady() {
      response.statusCode = didError ? 500 : 200;
      response.setHeader('content-type', 'text/html');
      pipe(response);
    },
    onError(x) {
      didError = true;
      console.error(x);
    },
  });
}
