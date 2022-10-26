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
	.modal {
		position: fixed;
		z-index: 999;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.7);
	}

	.modal__close {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		right: .5rem;
		top: .5rem;
		width: 2.5rem;
		height: 2.5rem;
		border: none;
		border-radius: .75rem;
		cursor: pointer;
		transition: 0.3s ease;
		font-size: ${theme.fontSizes.exl};
		background-color: ${theme.colors.ptLight}33;
		color: ${theme.colors.primary};

		:hover {
			background-color: ${theme.colors.ptLight};
			color: ${theme.colors.secondary};
		}
	}

	.modal__content {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 80%;
		height: 90%;
		max-width: 64rem;
		max-height: 36rem;
		padding: .5rem;
		border-radius: 1rem;
		background: ${theme.colors.secondary};	
		overflow: auto;

		@media ${theme.breakpoints.md} {
			flex-direction: row;
			padding: 1rem;
		}
	}

	.modal__poster {
		max-height: 16rem;

		img {
			width: 100%;
			height: 100%;
			object-fit: scale-down;
		}

		@media ${theme.breakpoints.md} {
			max-height: 100%;
			min-width: 18rem;
			width: 100%;
		}

		@media ${theme.breakpoints.lg} {
			min-width: 22rem;
		}
	}

	.modal__description {
		padding: 1rem .5rem;

		@media ${theme.breakpoints.md} {
			padding: 1rem;
			font-size: ${theme.fontSizes.exl};
		}
	}

	.modal__title {
		font-size: ${theme.fontSizes.xl};

		@media ${theme.breakpoints.md} {
			font-size: ${theme.fontSizes.exl};
		}
	}

  .modal__original-title {
    font-size: ${theme.fontSizes.lg};
    font-weight: lighter;
  }

  .modal__informations {
    margin-top: .25rem;
		font-size: ${theme.fontSizes.sm};

		@media ${theme.breakpoints.md} {
    	margin-top: 1rem;
			font-size: ${theme.fontSizes.base};
		}
  }

	.modal__overview {
    margin-top: .5rem;
		font-size: ${theme.fontSizes.sm};
    font-weight: normal;

		@media ${theme.breakpoints.md} {
			margin-top: 1rem;
			font-size: ${theme.fontSizes.base};
			line-height: 1.5;
		}
	}
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
	background-color: ${theme.colors.secondary};
	color: ${theme.colors.primary};
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	width: max-content;

	.selector__title {
		margin: 0 .5rem;
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
		background-color: ${theme.colors.tertiary};
		color: ${theme.colors.primary};

		:hover {
			background: #ddd;
		}
	`}
`
