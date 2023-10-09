import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import SuspenseLoading from "./components/SuspenseLoading";
import store from "./redux-manager";
import "./index.css";

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter basename={"/"}>
        <ChakraProvider>
          <Suspense fallback={<SuspenseLoading />}>
            <App />
          </Suspense>
        </ChakraProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
