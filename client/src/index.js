import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { SearchContextProvider } from "./context/SearchContext";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AuthContextProvider>
      <SearchContextProvider>
        <Toaster position="top-center" toastOptions={{ duration: 1000 }} />
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </Provider>
);
