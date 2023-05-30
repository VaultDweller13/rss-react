# Game library & backlog tracking app

## Deploy

[Click here](https://your-game-backlog.netlify.app)

## Starting app on a local machine

1. Clone repository:
   ```bash
   git clone https://github.com/VaultDweller13/rss-react.git
   ```
2. Navigate to the project directory:

   ```bash
   cd rss-react
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. You'll need your own API key from https://rawg.io/apidocs. Create `.env.local` file in the root directory and put inside the following string:

   ```
   VITE_API_KEY = your_api_key
   ```

5. Run one of the following commands:

   ### Dev server:

   ```bash
   npm run dev
   ```

   ### Build:

   ```bash
   npm run build
   ```

   ### Preview:

   ```bash
   npm run preview
   ```

   ### Lint:

   ```bash
   npm run lint
   ```

   ### Test:

   ```bash
   npm run test
   ```
