import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement == null) {
	throw new Error("No root element found in HTML!");
}

const root = createRoot(rootElement);
root.render(<App />);
