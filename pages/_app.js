import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { App } from "../context/AppContext";
import Layout from "../components/Layout";
import { initContract } from "../config/nearUtils";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    initContract().then(() => {
      console.log("Contract loaded");

      if (!window.walletConnection.isSignedIn()) {
        router.push("/login");
      }
    });
  }, []); // eslint-disable-line

  return (
    <App>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </App>
  );
}

export default MyApp;
