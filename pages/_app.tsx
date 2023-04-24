import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./components/Layout";
import Test from "./components/Test";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full mx-auto">
      <Layout>
        <Test />
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
