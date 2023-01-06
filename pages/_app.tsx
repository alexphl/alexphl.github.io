import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export const config = {
	unstable_runtimeJS: false,
};

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>alexphl</title>
				<meta name="description" content="My portfolio" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="shortcut icon" href="/favicon.svg" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			</Head>

			<Component {...pageProps} />

			{/* Shoutout ped.ro for the filter idea*/}
			<svg id="texture">
				<filter id="noise">
					<feTurbulence type="fractalNoise" baseFrequency=".7" numOctaves="4" stitchTiles="stitch" />
				</filter>
				<rect width="100%" height="100%" filter="url(#noise)" />
			</svg>
		</>
	);
}

export default MyApp;