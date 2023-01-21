import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import storage from "redux-persist/lib/storage";

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import authReducer from "./redux";

const persistConfig = {
    key: "root",
    storage,
    version: 1,
};

const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistStore(store)}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
