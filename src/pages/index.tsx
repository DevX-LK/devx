import Head from 'next/head';
import { createStyles } from '@mantine/core';
import Banner from '@/components/Banner/Banner';

const useStyles = createStyles({
	container: {
		marginTop: '6rem',
	},
});

const Home = () => {
	const { classes, cx } = useStyles();

	return (
		<div className={classes.container}>
			<Banner />
		</div>
	);
};

export default Home;
