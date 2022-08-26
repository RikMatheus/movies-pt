import styled from "styled-components"
import theme from "../../theme"

export const StyledList = styled.section`
	.list__filters {
		margin-bottom: 1rem;
	}

	.list__items {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
		grid-gap: 1rem;
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
