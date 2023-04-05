import { useState } from 'react';
import { HeaderBar } from '@/components/Header/Header';
import { FooterLinks } from '@/components/Footer/FooterLinks';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from '@mantine/core';

export default function App({ Component, pageProps }: AppProps) {
	const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

	return (
		<>
			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={() => {}}
			>
				<MantineProvider
					theme={{ colorScheme }}
					withGlobalStyles
					withNormalizeCSS
				>
					<HeaderBar
						links={[
							{ label: 'Home', link: '/' },
							{ label: 'About', link: '/About' },
							{ label: 'Projects', link: '/Projects' },
							{ label: 'Team', link: '/Team' },
							{ label: 'Contact', link: '/Contact' },
						]}
					/>
					<Component {...pageProps} />

					<FooterLinks
						data={[
							{
								title: 'Pages',
								links: [
									{ label: 'Home', link: '/' },
									{ label: 'About', link: '/About' },
									{ label: 'Projects', link: '/Projects' },
									{ label: 'Contact', link: '/Contact' },
								],
							},
							{
								title: 'Projects',
								links: [
									{ label: 'DevTalk', link: '/Projects' },
									{ label: 'Esala', link: '/Projects' },
									{ label: 'Decentra', link: '/Projects' },
									{ label: 'Web3 Chat App', link: '/Projects' },
								],
							},
							{
								title: 'Social',
								links: [
									{
										label: 'Instagram',
										link: 'https://www.instagram.com/devx.official/',
									},
									{
										label: 'LinkedIn',
										link: 'https://www.linkedin.com/company/devxlk/',
									},
									{
										label: 'Github',
										link: 'https://github.com/DevX-LK',
									},
									{
										label: 'YouTube',
										link: 'https://www.youtube.com/channel/UCLIxBIcAnh0NI95x9VB7-hg',
									},
								],
							},
						]}
					/>
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
}
