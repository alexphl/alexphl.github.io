import Head from "next/head";

export const Heads = () => {
	return (
		<Head>
			<title>alexphl</title>
			<meta name="description" content="My portfolio" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<link rel="icon" href="/favicon.svg" />
			<link rel='mask-icon' href='favicon.svg' color='#000000' />
			<link rel='apple-touch-icon' href='favicon.png' />
		</Head>
	);
};

export default Heads;
