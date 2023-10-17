import styled from 'styled-components';
import { useFetchProjects } from '../fetchProjects';
const Projects = () => {
	const { isLoading, projects } = useFetchProjects();
	console.log(isLoading, projects);

	if (isLoading) {
		return (
			<section className='projects'>
				<h2>loading...</h2>
			</section>
		);
	}
	return (
		<Wrapper className='projects'>
			<div className='title'>
				<h2>projects</h2>
				<div className='title-underline'></div>
			</div>
			<div className='projectsCenter'>
				{projects.map((project) => {
					const { id, title, url, img } = project;
					return (
						<a
							key={id}
							href={url}
							target='_blank'
							rel='noopener noreferrer'
							className='project'
						>
							<img src={img} alt={title} className='img' />
							<h5>{title}</h5>
						</a>
					);
				})}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	&.projects {
		padding: 5rem 0;
	}
	.projectsCenter {
		width: 90vw;
		max-width: var(--max-width);
		margin: 0 auto;
		margin-top: 3rem;
		display: grid;
		gap: 2rem;
		@media (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
		}
		@media (min-width: 992px) {
			grid-template-columns: 1fr 1fr 1fr;
		}
		.project {
			background: var(--white);
			display: block;
			border-radius: var(--borderRadius);
			box-shadow: var(--shadow-2);
			transition: var(--transition);
			&:hover {
				transform: scale(1.05);
				box-shadow: var(--shadow-4);
			}
			.img {
				height: 15rem;
				border-top-right-radius: var(--borderRadius);
				border-top-left-radius: var(--borderRadius);
			}

			h5 {
				text-align: center;
				padding: 1rem 0;
				color: var(--grey-700);
			}
		}
	}
`;
export default Projects;
