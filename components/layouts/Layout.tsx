import { FC } from 'react';
import Head from 'next/head';
import React from 'react';
import { Navbar } from '../ui/Navbar';

interface Props {
	children: React.ReactNode;
	title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || 'PokeNextJS'}</title>
				<meta name="author" content="Yilfri Salave" />
				<meta name="description" content={`Learn to create a Pokedex with NetxtJS ${title}`} />
				<meta name="tags" content={`${title}, XXXX, pokedex, nextjs`} />
				<meta property="og:title" content={`Information about ${title}`} />
				<meta property="og:description" content={`Here you can find all abour ${title}`} />
				<meta property="og:image" content={`${origin}/img/banner.png`} />
			</Head>

			<Navbar />

			<main
				style={{
					padding: '0px 20px'
				}}
			>
				{children}
			</main>
		</>
	);
};
