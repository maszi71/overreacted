"use client";
import { FC, ReactNode, useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import { getThemeMode } from "./slice";
import Header from "../components/Header/Header";

type ProviderPropsType = {
  children: ReactNode;
};

const ThemeProvider: FC<ProviderPropsType> = ({ children }) => {
  const theme = useSelector(getThemeMode);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <>
      <Header />
      {children}
    </>
  );
};

const StoreProvider: FC<ProviderPropsType> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};

export default StoreProvider;
