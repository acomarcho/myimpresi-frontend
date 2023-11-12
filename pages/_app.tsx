import "@/styles/globals.css";
import "@mantine/core/styles.css";

import type { AppProps } from "next/app";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { MantineProvider } from "@mantine/core";
import store, { persistor } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-inter`}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
          >
            <MantineProvider>
              <Component {...pageProps} />
            </MantineProvider>
          </GoogleReCaptchaProvider>
        </PersistGate>
      </Provider>
    </main>
  );
}
