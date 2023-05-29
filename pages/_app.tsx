import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./components/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full mx-auto">
      <Layout />
      <Component {...pageProps} />
    </div>
  );
}
