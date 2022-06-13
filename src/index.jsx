import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider 
    store={store}>
        <App />
    </Provider>
);
