import Image from 'next/image';
import Logo from '../../assets/logo-black.png';
import { Text, createStyles } from '@mantine/core';

const useStyles = createStyles({
	container: {
		fontFamily: 'poppins',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const Banner = () => {
	const { classes, cx } = useStyles();

	return (
		<div className={classes.container}>
		<Image src={Logo} alt="DevX logo" width={250} />
			<Text sx={{ textAlign: 'center', fontSize: '22px', fontStyle: 'italic' }}>
				&quot;Empowering your online success with DevX LK - web development and
				programming education destination. Join the community now!&quot;
			</Text>
		</div>
	);
};

export default Banner;
