import {
	createStyles,
	Header,
	Menu,
	Group,
	Center,
	Burger,
	Container,
	Transition,
	Paper,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../assets/logo.png';

const useStyles = createStyles((theme) => ({
	header: {
		backgroundColor: '#2F9834',
		color: theme.primaryColor,
		borderBottom: 0,
		position: 'absolute',
		right: '0',
		left: '0',
	},
	dropdown: {
		position: 'absolute',
		top: 60,
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

	inner: {
		height: 56,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	links: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	burger: {
		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: '8px 12px',
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color: theme.white,
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor: 'rgba(5, 5,5, 0.2)',
			color: '#fff',
		},
		[theme.fn.smallerThan('sm')]: {
			borderRadius: 0,
			padding: theme.spacing.md,
			'&:hover': {
				backgroundColor: 'rgba(47, 152, 52, 0.2)',
				color: 'rgb(47, 152, 52)',
			},
		},
	},

	linkLabel: {
		marginRight: 5,
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
			backgroundColor: 'rgba(5, 5, 5, 0.4)',
			color: '#fff',
		},
		[theme.fn.smallerThan('sm')]: {
			'&, &:hover': {
				backgroundColor: 'rgba(47, 152, 52, 0.2)',
				color: 'rgb(47, 152, 52)',
			},
		},
	},
}));

interface HeaderSearchProps {
	links: {
		link: string;
		label: string;
	}[];
}

export function HeaderBar({ links }: HeaderSearchProps) {
	const [opened, { toggle }] = useDisclosure(false);
	const [active, setActive] = useState(links[0].label);
	const { classes } = useStyles();

	const items = links.map((link) => {
		return (
			<a
				key={link.label}
				href={link.link}
				className={active === link.label ? classes.linkActive : classes.link}
				onClick={(event) => {
					event.preventDefault();
					setActive(link.label);
				}}
			>
				{link.label}
			</a>
		);
	});

	return (
		<Header height={56} className={classes.header} mb={120}>
			<Container>
				<div className={classes.inner}>
					<Image src={Logo} alt="DevX logo" width={102} />
					<Group spacing={5} className={classes.links}>
						{items}
					</Group>
					<Burger
						opened={opened}
						onClick={toggle}
						className={classes.burger}
						size="sm"
						color="#fff"
					/>
				</div>
			</Container>
			<Transition transition="pop-top-right" duration={200} mounted={opened}>
				{(styles) => (
					<Paper
						key={Math.random()}
						className={classes.dropdown}
						withBorder
						style={styles}
					>
						{links.map((link) => (
							<Link href={link.link} legacyBehavior key={link.label}>
								<a
									key={link.label}
									className={
										active === link.label ? classes.linkActive : classes.link
									}
									onClick={(event) => {
										setActive(link.label);
										close();
									}}
								>
									{link.label}
								</a>
							</Link>
						))}
					</Paper>
				)}
			</Transition>
		</Header>
	);
}
