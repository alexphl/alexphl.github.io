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
			<link rel="icon" href="/favicon.ico" />
			<link rel="preconnect" href="https://fonts.googleapis.com" /> 
			<link rel="preconnect" href="https://fonts.gstatic.com" /> 
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=optional"
				rel="stylesheet"
			/>
		</Head>
	);
};

export default Heads;
