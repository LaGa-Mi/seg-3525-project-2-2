// React imports
import { createRoot } from "react-dom/client";

// Bootstrap imports
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js'

// Personal imports
import './sass/styles.css';
import App from "./components/App";

const root = createRoot(document.getElementById("root"));

root.render(
    <App/>
);