import { createRoot } from "react-dom/client";
import { lazy, Suspense } from 'react';
import { loadRemote, init } from "@module-federation/runtime";

init({
  remotes: [
    {
      name: "components",
      alias: "components",
      entry: "http://localhost:3002/mf-manifest.json",
    },
  ],
  plugins: [
    {
      name: 'custom-plugin',
      init(args) {
        console.log('init: ', args);
        return args;
      },
    },
  ],
  shared: {
    react: {
      singleton: true,
    },
    "react-dom": {
      singleton: true,
    },
  },
});

const Button = () => {
  const Component = lazy(() => loadRemote("components/Button"));

  return (
    <Suspense fallback="Loading...">
      <Component />
    </Suspense>
  );
};

const App = () => (
  <div>
    <h1>Host</h1>
    <Button />
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);
