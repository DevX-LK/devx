import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { createStyles } from '@mantine/core';

const useStyles = createStyles({
	container: {
		paddingTop: '8rem',
	},
});

const Home = () => {
	const { classes, cx } = useStyles();

	return (
		<div className={classes.container}>
			<h1>Home</h1>
		</div>
	);
};

export default Home;
