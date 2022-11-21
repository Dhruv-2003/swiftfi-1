import "../styles/globals.css";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";

import { alchemyProvider } from "wagmi/providers/alchemy";

import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const auroraChain = {
  id: 1313161555,
  name: "Aurora-Testnet",
  network: "Aurora-Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "ETHER",
    symbol: "ETH",
  },
  rpcUrls: {
    default: "https://testnet.aurora.dev",
  },
  blockExplorers: {
    default: {
      name: "AuroraScan Testnet",
      url: "https://testnet.aurorascan.dev",
    },
  },
  testnet: true,
};

const { chains, provider } = configureChains([auroraChain], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColor: "#8585ff", //color of wallet  try #703844
          accentColorForeground: "black", //color of text
          borderRadius: "small", //rounded edges
          fontStack: "system",
        })}
      >
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
