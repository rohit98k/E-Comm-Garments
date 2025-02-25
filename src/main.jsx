import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import rootStore from "./store/rootstore.js";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-4aeqvfvsrqm3ysii.us.auth0.com"
      clientId="Mt3mPPg33KTbIqkJjEgshTbOORY1AIth"
      redirectUri={window.location.origin} // Use redirectUri instead of authorizationParams
    >
      <Provider store={rootStore}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
