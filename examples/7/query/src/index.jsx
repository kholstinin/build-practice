import { createRoot } from "react-dom/client";
import { App } from "./app";

const targetHTMLElement = document.getElementById("root");
const root = createRoot(targetHTMLElement);
root.render(<App />);
