import { Text, Grid, Button, Badge } from '@mantine/core';
import Image from 'next/image';

const ProjectCard = ({
	name,
	description,
	githubLink,
	link,
	image,
	teamProject,
	opensource,
}: any) => {
	return (
		<Grid.Col
			span={'auto'}
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '1rem',
				margin: '2rem 1rem 1rem 1rem',
				boxShadow:
					'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px',
				borderRadius: '10px',
				'@media (max-width: 728px)': {
					flexDirection: 'column',
				},
			}}
		>
			<Grid.Col span={'auto'}>
				<Image src={image} alt={name} width={350} height={250} />
			</Grid.Col>
			<Grid.Col
				span={'auto'}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-start',
				}}
			>
				<Text sx={{ fontSize: '30px', fontWeight: 650 }}>{name}</Text>
				<Text sx={{ fontSize: '18px', fontWeight: 600 }}>{description}</Text>
				{githubLink ? (
					<Text
						sx={{ fontSize: '17px', fontWeight: 600, marginTop: '20px' }}
						onClick={() => window.open(githubLink, '_blank')?.focus()}
					>
						🔗 GitHub Repo
					</Text>
				) : (
					<></>
				)}
				<div style={{ display: 'flex', marginTop: '20px' }}>
					<Badge sx={{ width: '100px' }} color="indigo">
						{opensource ? 'Public' : 'Private'}
					</Badge>
					{teamProject ? (
						<Badge sx={{ width: '100px', marginLeft: '5px' }} color="red">
							Team
						</Badge>
					) : (
						<></>
					)}
				</div>
				<Button
					sx={{ width: '150px', marginTop: '10px' }}
					onClick={() => window.open(link, '_blank')?.focus()}
				>
					View Project
				</Button>
			</Grid.Col>
		</Grid.Col>
	);
};

export default ProjectCard;
