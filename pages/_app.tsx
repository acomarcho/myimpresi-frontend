import "@/styles/globals.css";
import "@mantine/core/styles.css";

import type { AppProps } from "next/app";
import { MantineProvider, createTheme } from "@mantine/core";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-inter`}>
      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </main>
  );
}
