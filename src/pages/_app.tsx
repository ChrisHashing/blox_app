import SideNavbar from "@/components/layout/SideNavbar/SideNavbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main style={{ display: 'flex' }}>
      <SideNavbar />
      <Component {...pageProps} />
    </main>
  );
}