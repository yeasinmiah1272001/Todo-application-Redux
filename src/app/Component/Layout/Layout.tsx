"use client";
import { persistor, store } from "@/Redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import loading from "../loading";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};



export default Layout;
