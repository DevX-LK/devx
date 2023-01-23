import { useState } from 'react';
import { HeaderBar } from '@/components/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from '@mantine/core';

export default function App({ Component, pageProps }: AppProps) {
	const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	return (
		<>
			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}
			>
				<MantineProvider
					theme={{ colorScheme }}
					withGlobalStyles
					withNormalizeCSS
				>
					<HeaderBar
						links={[
							{ label: 'Home', link: '/' },
							{ label: 'Projects', link: '/Projects' },
							{ label: 'Team', link: '/Team' },
							{ label: 'Contact', link: '/Contact' },
						]}
					/>
					<Component {...pageProps} />
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
}
