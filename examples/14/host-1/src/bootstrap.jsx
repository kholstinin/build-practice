import { createRoot } from "react-dom/client";

import Button from "components/Button";

const App = () => (
  <div>
    <h1>Host</h1>
    <Button />
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);
