import styled from "styled-components"
import theme from "../../theme"

export const StyledLibrary = styled.div`
	width: 100%;
	max-width: 1440px;
	padding: 1rem;

	@media ${theme.breakpoints.lg} {
		margin: 0 auto;
	}
`
