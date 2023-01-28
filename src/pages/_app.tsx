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
	const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

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
							{ label: 'Projects', link: '/Projects' },
							{ label: 'Team', link: '/Team' },
							{ link: '/Contact', label: 'Contact' },
						]}
					/>
					{/* <Navbar /> */}
					<Component {...pageProps} />
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
}
