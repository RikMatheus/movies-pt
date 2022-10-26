import styled from "styled-components"
import theme from "../../theme"

export const StyledLibrary = styled.div`
	width: 100%;
	max-width: 1440px;
	padding: 1rem;

	@media ${theme.breakpoints.lg} {
		margin: 0 auto;
	}

	.observer {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 3rem;
		background-color: ${theme.colors.ptDark};
		color: ${theme.colors.secondary};
		max-width: 16rem;
		margin: 0 auto;
		margin-top: 1rem;
		border-radius: 3rem;
	}

	.loader {
		width: 24px;
    height: 24px;
    border: 5px solid ${theme.colors.secondary};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
		margin-right: 1rem;
	}

	@keyframes rotation {
    0% {
			transform: rotate(0deg);
    }

    100% {
			transform: rotate(360deg);
    }
	} 
`
