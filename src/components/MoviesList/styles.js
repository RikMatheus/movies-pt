import styled from "styled-components"
import theme from "../../theme"

export const StyledList = styled.section`
	.list__filters {
		margin-bottom: 1rem;
	}

	.list__items {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
		grid-gap: 1rem;

		@media ${theme.breakpoints.sm} {
			grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
		}
	}

	.list__item {
		display: flex;
		justify-content: center;
	}

	@media ${theme.breakpoints.md} {
		.list__items {
			grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
			grid-gap: 1.25rem;
		}
	}
`

export const StyledModal = styled.div`
	position: fixed;
	z-index: 10;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.8);

	.modal__close {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		right: -1.35rem;
		top: -1.355rem;
		width: 2.5rem;
		height: 2.5rem;
		border: none;
		border-radius: 2.5rem;
		cursor: pointer;
		transition: 0.2s ease-in-out;

		svg {
			width: 1.75rem;
			height: 1.75rem;
			color: ${theme.colors.primary};
		}

		:hover {
			transform: scale(1.25);
		}
	}

	.modal__content {
		position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
		border: 2px solid ${theme.colors.white};
		max-width: 64rem;
		max-height: 36rem;
		padding: 1rem;
		border-radius: 1rem;
		background: ${theme.colors.background};
		display: flex;
	}

	.modal__poster {
		max-height: 32rem;
		border-radius: 0.5rem;
	}

	.modal__description {
		padding: 1rem;
	}

	.modal__title {
		font-size: ${theme.fontSizes.exl};
	}

  .modal__original-title {
    font-size: ${theme.fontSizes.lg};
    font-weight: lighter;
  }

  .modal__informations {
    margin-top: 1rem;
  }

	.modal__overview {
    margin-top: 1rem;
    font-size: ${theme.fontSizes.base};
    font-weight: normal;
		line-height: 1.5;
	}

  ${props => props.open ? `
    display: block;
  `:`
    display: none;
  `}
`

export const StyledSelector = styled.div`
	position: fixed;
	bottom: 1rem;
	right: 50%;
	appearance: none;
	transform: translateX(50%);
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 999px;
	padding: .5rem;
	background-color: #eee;
	color: #333;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	width: fit-content;

	.selector__title {
		margin: 0 .5rem;
	}

	.selector__options {
		
	}

	@media ${theme.breakpoints.md} {
		right: 1rem;
		transform: translateX(0);
	}
`

export const StyledButton = styled.button`
	padding: .25rem .5rem;
	border: none;
	margin-right: .25rem;
	transition: 0.2s ease-in-out;
	cursor: pointer;

	:first-child {
		border-radius: 1rem 0 0 1rem;
	}

	:last-child {
		border-radius: 0 1rem 1rem 0;
		margin-right: 0;
	}

	${props => props.selected ? `
		background: ${theme.colors.ptDark};
		color: #eee;
	` : `
		background: #ccc;

		:hover {
			background: #ddd;
		}
	`}
`
