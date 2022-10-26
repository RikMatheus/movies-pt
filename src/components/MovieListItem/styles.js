import styled from "styled-components"
import theme from "../../theme"

export const StyledItem = styled.a`
	padding: 0;
	border: 0;
	border-radius: 0.5rem;
	transition: 0.2s ease;
	cursor: pointer;
	display: flex;
	flex-direction: column;

	.item__poster {
		width: 110px;
		height: 165px;
		overflow: hidden;
		border-radius: 0.5rem;
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  	transition: all 0.3s cubic-bezier(.25,.8,.25,1);

		img {
			max-width: 110px;
		}
	}

	.item__informations {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-top: 0.5rem;
		max-width: 110px;
	}

	.item__title,
	.item__average {
		color: ${theme.colors.primary};
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

	.item__average {
		margin: auto;
	}

	:hover {
		.item__poster {
			box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
			transform: translateY(-5px);
		}
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
	margin-top: auto;
	
	.avg__calc {
		position: relative;
		width: 5rem;
		height: 1rem;
		background-color: ${theme.colors.secondary};
		color: ${theme.colors.accent};
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
		background-color: ${`${theme.colors.secondary}a`};
		width: ${props => props.avg ? `${props.avg}%` : `0%`};
	}

	@media ${theme.breakpoints.sm} {
		margin-bottom: .25rem;
	}
`
