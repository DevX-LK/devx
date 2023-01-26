import { createStyles, Paper, Transition } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import { useMantineColorScheme, ActionIcon } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { Burger } from '@mantine/core';
import { MediaQuery } from '@mantine/core';
import Image from 'next/image';
import Logo from '../assets/logo.png';

const useStyles = createStyles((theme) => ({
	wrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		position: 'absolute',
		right: '0',
		left: '0',
		backgroundColor: '#2F9834',
		padding: '0 8rem',
		marginBottom: '2rem',
		'@media (max-width: 728px)': {
			padding: '0 1rem',
		},
		'@media (max-width: 900px) and (min-width: 728px)': {
			padding: '0 4rem',
		},
	},
	dropdown: {
		position: 'absolute',
		top: 100,
		left: 0,
		right: 0,
		zIndex: 0,
		borderTopRightRadius: 0,
		borderTopLeftRadius: 0,
		borderTopWidth: 0,
		overflow: 'hidden',

		[theme.fn.largerThan('md')]: {
			display: 'none',
		},
	},
	mainNav: {
		display: 'flex',
		listStyle: 'none',
	},
	navLi: {
		padding: '0 2px',
		fontSize: '15px',
		fontWeight: 700,
	},
	navLink: {
		height: '0px',
		padding: '5px 10px',
		borderRadius: '2px',
		'&:hover': {
			backgroundColor: 'rgba(18, 18, 18, 0.2)',
		},
	},
	activeNavLink: {
		height: '0px',
		padding: '5px 10px',
		borderRadius: '2px',
		backgroundColor: 'rgba(10, 10, 10, 0.5)',
	},
	link: {
		display: 'block',
		lineHeight: 1,
		padding: '8px 12px',
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[0]
				: theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[6]
					: theme.colors.gray[0],
		},

		[theme.fn.smallerThan('sm')]: {
			borderRadius: 0,
			padding: theme.spacing.md,
		},
	},
	linkActive: {
		display: 'block',
		lineHeight: 1,
		padding: '8px 12px',
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[0]
				: theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,
		'&, &:hover': {
			backgroundColor: theme.fn.variant({
				variant: 'light',
				color: theme.primaryColor,
			}).background,
			color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
				.color,
		},
	},
}));

const items = [
	{ name: 'Home', link: '/' },
	{ name: 'Team', link: '/Team' },
	{ name: 'Projects', link: '/Projects' },
	{ name: 'Contact', link: '/Contact' },
];

const Navbar = () => {
	const { classes, cx } = useStyles();
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const [opened, setOpened] = useState(false);
	const [active, setActive] = useState(items[0].name);
	const title = opened ? 'Close navigation' : 'Open navigation';

	return (
		<div className={classes.wrapper}>
			<MediaQuery query="(max-width: 728px)" styles={{ fontSize: '30px' }}>
				<Image src={Logo} alt="DevX Logo" width={100} />
			</MediaQuery>

			<MediaQuery query="(max-width: 1028px)" styles={{ display: 'none' }}>
				<ul className={classes.mainNav}>
					{items.map((item) => (
						<li className={classes.navLi} key={item.name}>
							<Link href={item.link} legacyBehavior>
								<a
									key={item.name}
									className={
										item.name === active
											? classes.activeNavLink
											: classes.navLink
									}
									onClick={() => setActive(item.name)}
								>
									{item.name}
								</a>
							</Link>
						</li>
					))}
				</ul>
			</MediaQuery>

			<MediaQuery query="(min-width: 1028px)" styles={{ display: 'none' }}>
				<Burger
					opened={opened}
					onClick={() => setOpened((o) => !o)}
					title={title}
				/>
			</MediaQuery>

			<Transition transition="pop-top-right" duration={200} mounted={opened}>
				{(styles) => (
					<Paper
						key={Math.random()}
						className={classes.dropdown}
						withBorder
						style={styles}
					>
						{items.map((item) => (
							<Link href={item.link} legacyBehavior key={item.name}>
								<a
									key={item.name}
									className={
										active === item.name ? classes.linkActive : classes.link
									}
									onClick={(event) => {
										setActive(item.name);
										close();
									}}
								>
									{item.name}
								</a>
							</Link>
						))}
					</Paper>
				)}
			</Transition>
		</div>
	);
};

export default Navbar;
