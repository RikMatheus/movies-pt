import styled from "styled-components"
import theme from "../../theme"

export const StyledItem = styled.a`
	padding: 0;
	border: 0;
	border-radius: 0.5rem;
	transition: 0.2s ease;
	cursor: pointer;

	.item__poster {
		width: 110px;
		height: 165px;
		overflow: hidden;
		border-radius: 0.5rem;

		img {
			max-width: 110px;
		}
	}

	.item__informations {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin-top: 0.5rem;
		max-width: 110px;
	}

	.item__title,
	.item__average {
		color: ${theme.colors.secondary};
	}

	.item__title {
		font-size: ${theme.fontSizes.lg};
		font-weight: bolder;
		line-height: 1;
		margin-bottom: .25rem;
	}

	.item__release {
		font-size: ${theme.fontSizes.sm};
		opacity: 0.8;
	}

	:hover {
	}

	@media ${theme.breakpoints.md} {
		.item__poster {
			width: 220px;
			height: 330px;

			img {
				max-width: 220px;
			}
		}

		.item__informations {
			max-width: 220px;
		}
	}
`

export const StyledAverage = styled.div`
	display: flex;
	align-items: center;
	gap: .5rem;
	margin-bottom: .25rem;
	
	.avg__calc {
		position: relative;
		width: 5rem;
		height: 1rem;
		background-color: ${theme.colors.background};
	}

	.avg__total {
		display: flex;
		position: absolute;
		width: 100%;
		overflow: hidden;
	}

	.avg__current {
		position: absolute;
		height: 1rem;
		right: 0;
		z-index: 1;
		background-color: ${`${theme.colors.background}dd`};
		width: ${props => props.avg ? `${props.avg}%` : `0%`};
	}
`
