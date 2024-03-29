import MainChakraProvider from "@/providers/chakra";
import "@/styles/globals.css";
import 'material-symbols/outlined.css'
import type { AppProps } from "next/app";
import { WagmiConfig, createConfig } from "wagmi";
import {
    ConnectKitProvider,
    ConnectKitButton,
    getDefaultConfig,
} from "connectkit";

const config = createConfig(
    getDefaultConfig({
        // Required API Keys
        alchemyId: process.env.ALCHEMY_ID, // or infuraId
        walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID as string,

        // Required
        appName: "Your App Name",

        // Optional
        appDescription: "Your App Description",
        appUrl: "https://family.co", // your app's url
        appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
    })
);

export default function App({ Component, pageProps }: AppProps) {
    return (
        <WagmiConfig config={config}>
            <ConnectKitProvider>
                <MainChakraProvider>
                    <Component {...pageProps} />
                </MainChakraProvider>
            </ConnectKitProvider>
        </WagmiConfig>
    );
}
