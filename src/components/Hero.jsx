import React from 'react';
import heroImg from '../assets/contentCreator.svg';
import styled from 'styled-components';

const Hero = () => {
	return (
		<Wrapper className='hero'>
			<div className='heroCenter'>
				<div className='heroTitle'>
					<h1>contentful cms</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
						harum, eaque explicabo deleniti natus laboriosam maxime ea a ut.
						Accusamus, ullam praesentium? Incidunt dignissimos nesciunt omnis,
						illum sunt dolores vel, vitae voluptates ipsum iure dolorem
						temporibus. Similique nam dolorum expedita!
					</p>
				</div>
				<div className='imgContainer'>
					<img src={heroImg} alt='Content Creator' className='img' />
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	&.hero {
		min-height: 40vh;
		background: var(--white);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5rem;
	}
	.imgContainer {
		display: none;
	}
	.heroCenter {
		width: min(var(--view-width), var(--max-width));
		@media (min-width: 992px) {
			display: grid;
			grid-template-columns: 2fr 1fr;
			place-items: center;
			gap: 4rem;

			.imgContainer {
				display: block;
			}
		}
	}
	.heroTitle {
		h1 {
			margin-bottom: 2rem;
			font-weight: 700;
		}

		p {
			line-height: 2;
			max-width: 35em;
			color: var(--grey-600);
		}
	}
`;

export default Hero;
